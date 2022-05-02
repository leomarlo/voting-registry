//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IVotingRegistry, REGISTRY} from "../registry/IVotingRegistry.sol";
import {IVoteContract} from "../voteContract/IVoteContract.sol";

error NotRegisteredVoteContract(address voteContract);
error IsNotWhitelistedVoteContract(address voteContract);
error FunctionDoesntPermitVoting(bytes4 selector);
error NotPermissibleVoteContractOrSelector(bytes4 selector, address voteContract);
error DoesNotPermitVoting(uint256 voteIndex);


abstract contract Whitelisting {

    mapping(bytes4 => bool) internal votable;
    mapping(bytes4 => address) internal voteContract;
    mapping(address => bool) internal whitelistedVoteContract;
    
    constructor () {
        whitelistedVoteContract[address(0)] = false;
    }

    function _approveSelector(bytes4 selector) internal {
        votable[selector] = true;
    }

    function _disapproveSelector(bytes4 selector) internal {
        votable[selector] = false;
    }

    function _approveVoteContractForSelector(bytes4 selector, address _voteContract) 
    internal 
    isWhitelisted(_voteContract)
    isVotable(selector)
    {
        voteContract[selector] = _voteContract;
    }

    function _whitelistAndApprove(bytes4 selector, address _voteContract) 
    internal 
    {
        _addWhitelistedVoteContract(_voteContract);
        _approveVoteContractForSelector(selector, _voteContract);
    }

    function _addWhitelistedVoteContract(address _voteContract) 
    internal
    isRegistered(_voteContract)
    {
        whitelistedVoteContract[_voteContract] = true;
    }

    function _removeWhitelistedVoteContract(address _voteContract) 
    internal
    {
        whitelistedVoteContract[_voteContract] = false;
    }

    function _isPermissibleVoteContractAndSelector(bytes4 selector, address _voteContract) 
    internal 
    view
    returns(bool)
    {
        return votable[selector] && whitelistedVoteContract[_voteContract];
    } 

    modifier isRegistered(address _voteContract) {
        if (!IVotingRegistry(REGISTRY).isRegistered(_voteContract)) {
            revert NotRegisteredVoteContract(_voteContract);
        }
        _;
    }

    modifier isWhitelisted(address _voteContract) {
        if (!whitelistedVoteContract[_voteContract]) {
            revert IsNotWhitelistedVoteContract(_voteContract);
        }
        _;
    }

    modifier isVotable(bytes4 selector) {
        if (!votable[selector]) {
            revert FunctionDoesntPermitVoting(selector);
        }
        _;
    }

    modifier isPermissible(bytes4 selector, address _voteContract){
        if (!_isPermissibleVoteContractAndSelector(selector, voteContract[selector])) {
            revert NotPermissibleVoteContractOrSelector(selector,voteContract[selector] );
        }
        _;
    }
    
}

struct VoteInfo {
    address voteContract;
    uint256 index;
}

abstract contract CanVote is Whitelisting {

    mapping(uint256=>VoteInfo) internal voteInfo;
    uint256 internal totalVotesStarted;

    constructor() Whitelisting(){}

    function _start(bytes4 selector, bytes memory votingParams) 
    internal
    isPermissible(selector, voteContract[selector])
    {
        totalVotesStarted += 1;
        VoteInfo memory _voteInfo;
        _voteInfo.voteContract = voteContract[selector];
        _voteInfo.index = IVoteContract(_voteInfo.voteContract).start(votingParams);
        voteInfo[totalVotesStarted] = _voteInfo;
    }

    function getTotalVotesStarted() external view returns(uint256) {
        return totalVotesStarted;
    }

    function getVoteInfo(uint256 voteIndex) external view returns(address, uint256) {
        return (voteInfo[voteIndex].voteContract, voteInfo[voteIndex].index);
    }

    function _vote(uint256 voteIndex, uint256 option)
    internal
    permitsVoting(voteIndex)
    {
        uint256 status = IVoteContract(voteInfo[voteIndex].voteContract).vote(
            voteInfo[voteIndex].index,
            msg.sender,
            option
        );

    }

    modifier permitsVoting(uint256 voteIndex){
        if(! IVoteContract(voteInfo[voteIndex].voteContract).statusPermitsVoting(voteInfo[voteIndex].index)){
            revert DoesNotPermitVoting(voteIndex);
        }
        _;
    }
    
}