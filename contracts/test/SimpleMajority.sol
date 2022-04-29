//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {VoteContract} from "../voteContract/VoteContract.sol";


error AlreadyVoted(address voter); // TODO: add more fields
error VotingNotAllowed(uint256 voteIndex, address callingContract);

struct Votes {
    uint256 pro;
    uint256 contra;
}

struct VotingParams {
    uint256 deadline;
}

contract TestVoteContract is VoteContract {
    mapping(address=>mapping(uint256=>mapping(address=>bool))) internal alreadyVoted;
    mapping(address=>mapping(uint256=>Votes)) internal votes;
    mapping(address=>mapping(uint256=>VotingParams)) internal _votingParams;

    constructor(uint56 _typeId, string memory name)
    VoteContract(_typeId, name){}

    function start(bytes memory votingParams) 
    public 
    override(VoteContract)
    iterateVoteIndex
    returns(uint256 voteIndex)
    {
        voteIndex = getCurrentVoteIndex();

        _votingParams[msg.sender][voteIndex] = VotingParams({
            deadline: block.timestamp + decodeVotingParams(votingParams)
        });

        votingStatus[msg.sender][voteIndex] = 1;
    }


    function vote(uint256 voteIndex, address voter, uint256 option) 
    external
    override(VoteContract) 
    checkVoteCondition(voteIndex)
    doubleVotingGuard(voteIndex, voter)
    {
        
        if (_condition(voteIndex)){
            votingStatus[msg.sender][voteIndex] = _check(voteIndex);
            return ;
        }

        if (option==0){
            votes[msg.sender][voteIndex].pro += 1;
        } else {
            votes[msg.sender][voteIndex].contra += 1;
        }
        
    }

    function _condition(uint voteIndex) internal view returns(bool) {
        return block.timestamp > _votingParams[msg.sender][voteIndex].deadline;
    }


    function _check(uint256 voteIndex) internal view returns(uint256 _votingStatus){
        bool invalid = votes[msg.sender][voteIndex].pro == votes[msg.sender][voteIndex].contra;
        _votingStatus = invalid ? 3 : 2;
    }

    
    function result(uint256 voteIndex) external virtual override(VoteContract) returns(bytes memory votingResult){
        return encodeResultParams(votes[msg.sender][voteIndex].pro, votes[msg.sender][voteIndex].contra);
    }

    function getVotingParamsEncodingSelector() public pure override(VoteContract) returns(bytes4) {
        return this.encodeVotingParams.selector;
    }

    function encodeVotingParams(uint256 duration) public view  returns(bytes memory){
        return abi.encode(duration);
    }

    function decodeVotingParams(bytes memory votingParams) public view returns(uint256 duration) {
        (duration) = abi.decode(votingParams, (uint256));
    }

    function encodeResultParams(uint256 pro, uint256 contra) public pure returns(bytes memory) {
        return abi.encode(pro, contra);
    }

    function decodeResultParams(bytes memory resultParams) public view returns(uint256 pro, uint256 contra) {
        (pro, contra) = abi.decode(resultParams, (uint256, uint256));
    }

    modifier doubleVotingGuard(uint256 voteIndex, address voter) {
        if (alreadyVoted[msg.sender][voteIndex][voter]){
            revert AlreadyVoted(voter);
        }
        _;
        alreadyVoted[msg.sender][voteIndex][voter] = true;
    }

    modifier checkVoteCondition(uint256 voteIndex) {
        if (votingStatus[msg.sender][voteIndex]!= 1) {
            revert VotingNotAllowed(voteIndex, msg.sender);
        }
        _;
    }
    
  
}