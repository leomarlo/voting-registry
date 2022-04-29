//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
// TODO: this should be accessible via a npm package
import {IVotingRegistry, REGISTRY} from "../registry/IVotingRegistry.sol";
import {IVoteContract, IVoteAndImplementContract} from "./IVoteContract.sol";


abstract contract RegisterVoteContract {


    function _registerVoteContract(bytes8 categoryId, string memory name)
    internal 
    {
        IVotingRegistry(REGISTRY).register(categoryId, name);
    }
}

abstract contract VoteContractCategory {
    bytes8 public categoryId;

    function getCategoryId(uint8 version, uint56 _typeId) internal view returns(bytes8){
        return bytes8(bytes32(abi.encodePacked(
            version,
            _typeId,
            getVotingParamsEncodingSelector())));
    }

    function getVotingParamsEncodingSelector() public virtual view returns(bytes4) ;

    function getTypeId() public view returns(uint56){
        uint56 typeId = 1 ; 
        // TODO: get the typeId out of the categoryId
        return typeId;
    }
}



abstract contract VoteContract is IERC165, VoteContractCategory, RegisterVoteContract, IVoteContract {

    mapping(address=>uint256) internal _registeredVotes;
    // votingStatus:  0 = inactive, 1 = active, 2 = completed, 3 = failed
    // we deliberately don't use enums that are fixed, because the end user should choose how many statuses there are.
    mapping(address=>mapping(uint256=>uint256)) internal votingStatus; 

    constructor(uint56 _typeId, string memory name) { 
        categoryId = getCategoryId(uint8(1), _typeId);
        _registerVoteContract(categoryId, name);
    }

    // VOTING PRIMITIVES

    function start(bytes memory votingParams) public virtual override(IVoteContract) returns(uint256 voteIndex) {
        return 0;
    }

    function vote(uint256 voteIndex, address voter, uint256 option) external virtual override(IVoteContract);

    function result(uint256 voteIndex) external virtual override(IVoteContract) returns(bytes memory votingResult);

    function getVotingParamsEncodingSelector() public virtual view override(VoteContractCategory) returns(bytes4);

    // function resume(uint256 index) external virtual override(IVoteContract);

    // function stop(uint256 index) external virtual override(IVoteContract) {
    //     votingStatus[msg.sender][index] = 4;
    // }


    function supportsInterface(bytes4 interfaceId) public pure override(IERC165) returns (bool) {
        return 
            interfaceId == type(IVoteContract).interfaceId ||
            interfaceId == type(IERC165).interfaceId;
            // super.supportsInterface(interfaceId);
    }

    function getCurrentVoteIndex() view public returns(uint256){
        return _registeredVotes[msg.sender];
    }

    modifier iterateVoteIndex {
        _registeredVotes[msg.sender] += 1;
        _;
    }
    
}


abstract contract VoteAndImplementContract is VoteContract, IVoteAndImplementContract {

    mapping(address=>mapping(uint256=>bytes4)) internal callbackSelectors;
    mapping(address=>mapping(uint256=>bytes)) internal callbackParams;


    function _implement(uint256 votingIndex) internal returns(bool success) {
        (success, ) = msg.sender.call(abi.encodePacked(callbackSelectors[msg.sender][votingIndex], callbackParams[msg.sender][votingIndex]));
    }

    function start(
        bytes4 _callbackSelector,
        bytes memory _callbackParams,
        bytes memory _votingParams)
    external override(IVoteAndImplementContract) returns(uint256 index) {
        index = start(_votingParams);
        callbackSelectors[msg.sender][index] = _callbackSelector;
        callbackParams[msg.sender][index] = _callbackParams;
    }
}


    