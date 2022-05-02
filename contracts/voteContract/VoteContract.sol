//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
// TODO: this should be accessible via a npm package
import {IVotingRegistry, REGISTRY} from "../registry/IVotingRegistry.sol";
import {IVoteContract, IVoteAndImplementContract} from "./IVoteContract.sol";


error StatusPermitsVoting(address caller, uint256 voteIndex);


abstract contract RegisterVoteContract is IERC165 {


    function _register(bytes8 categoryId)
    internal 
    {
        IVotingRegistry(REGISTRY).register(categoryId);
    }

    function _addCategoryToRegistration(bytes8 categoryId)
    internal 
    {
        IVotingRegistry(REGISTRY).addCategoryToRegistration(categoryId);
    }

    function supportsInterface(bytes4 interfaceId) public pure virtual override(IERC165) returns (bool) {
        return 
            interfaceId == type(IVoteContract).interfaceId ||
            interfaceId == type(IERC165).interfaceId;
    }
}


enum VotingStatus {inactive, completed, failed, active}

abstract contract VotingStatusHandling{
    // votingStatus:  0 = inactive, 1 = completed, 2 = failed, 3 = active,
    // we deliberately don't use enums that are fixed, because the end user should choose how many statuses there are.
    mapping(address=>mapping(uint256=>uint256)) internal votingStatus; 

    function _statusPermitsVoting(uint256 voteIndex) view internal returns(bool) {
        return votingStatus[msg.sender][voteIndex] > 3;
    }

    function getCurrentVotingStatus(uint256 voteIndex) view external returns(uint256) {
        return votingStatus[msg.sender][voteIndex];
    }

    modifier permitsVoting(uint256 voteIndex) {
        if (!_statusPermitsVoting(voteIndex)) {
            revert StatusPermitsVoting(msg.sender, voteIndex);
        }
        _;
    }
}


abstract contract VoteContract is IERC165, RegisterVoteContract, VotingStatusHandling, IVoteContract {

    mapping(address=>uint256) internal _registeredVotes;

    constructor(bytes8 _categoryId) { 
        _register(_categoryId);
    }

    // VOTING PRIMITIVES

    function start(bytes memory votingParams) public virtual override(IVoteContract) returns(uint256 voteIndex);

    function vote(uint256 voteIndex, address voter, uint256 option) external virtual override(IVoteContract) returns(uint256 status);

    function result(uint256 voteIndex) external view virtual override(IVoteContract) returns(bytes32 votingResult);

    function condition(uint voteIndex) internal view virtual returns(bool);

    function statusPermitsVoting(uint256 voteIndex) view external virtual override(IVoteContract) returns(bool);

    function getCurrentVoteIndex(address caller) view public returns(uint256){
        return _registeredVotes[caller];
    }

    function supportsInterface(bytes4 interfaceId) public pure virtual override(IERC165, RegisterVoteContract) returns (bool) {
        return 
            super.supportsInterface(interfaceId) ||
            interfaceId == type(VoteContract).interfaceId;
    }

    modifier activateNewVote {
        _registeredVotes[msg.sender] += 1;
        _;
        votingStatus[msg.sender][_registeredVotes[msg.sender]] = uint256(VotingStatus.active);
    }
    
}

enum Response {none, successful, failed}

struct Callback {
    bytes4 selector;
    bytes arguments;
    Response response;
}

abstract contract VoteAndImplementContract is IVoteContract, VoteContract, IVoteAndImplementContract {

    mapping(address=>mapping(uint256=>Callback)) internal callback;

    constructor(bytes8 _categoryId) VoteContract(_categoryId){}

    function _implement(uint256 voteIndex) internal returns(bool success) {
        (success, ) = msg.sender.call(
            abi.encodePacked(
                callback[msg.sender][voteIndex].selector,
                callback[msg.sender][voteIndex].arguments));
        callback[msg.sender][voteIndex].response = success ? Response.successful : Response.failed; 
    }

    function start(bytes memory votingParams) public virtual override(IVoteContract, VoteContract) returns(uint256 voteIndex) {
        votingParams;  // silence compiler warnings.
        return 0;
    }

    function vote(uint256 voteIndex, address voter, uint256 option) external virtual override(IVoteContract, VoteContract) returns (uint256 status);
    
    function result(uint256 voteIndex) external view virtual override(IVoteContract, VoteContract) returns(bytes32 votingResult);

    function condition(uint voteIndex) internal view virtual override(VoteContract) returns(bool);

    function statusPermitsVoting(uint256 voteIndex) view external virtual override(IVoteContract, VoteContract) returns(bool);

    function start(
        bytes memory _votingParams,
        bytes4 _callbackSelector,
        bytes memory _callbackArgs)
    external override(IVoteAndImplementContract) returns(uint256 index) {
        index = start(_votingParams);
        callback[msg.sender][index] = Callback({
            selector: _callbackSelector,
            arguments: _callbackArgs,
            response: Response.none});
    }

    function getCallbackResponse(uint256 voteIndex) external view override(IVoteAndImplementContract) returns(uint8) {
        return uint8(callback[msg.sender][voteIndex].response);
    }

    function getCallbackData(uint256 voteIndex) external view override(IVoteAndImplementContract) returns(bytes4 selector, bytes memory arguments) {
        selector = callback[msg.sender][voteIndex].selector;
        arguments = callback[msg.sender][voteIndex].arguments;
    }


    function supportsInterface(bytes4 interfaceId) public pure virtual override(VoteContract) returns (bool) {
        return 
            super.supportsInterface(interfaceId) ||
            interfaceId == type(IVoteAndImplementContract).interfaceId;
    }
}


    