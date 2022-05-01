//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {VoteContract, VotingStatus} from "../voteContract/VoteContract.sol";

error AlreadyVoted(address voter); // TODO: add more fields
error VotingNotAllowed(uint256 voteIndex, address callingContract);




contract TestVoteContract is VoteContract {

    mapping(address=>mapping(uint256=>int256)) internal aggregateVotes;
    mapping(address=>mapping(uint256=>uint256)) internal deadline;
    mapping(address=>mapping(uint256=>mapping(address=>bool))) internal alreadyVoted;

    constructor(bytes8 _categoryId)
    VoteContract(_categoryId){}

    function start(bytes memory votingParams) 
    public 
    override(VoteContract)
    incrementVoteIndex
    returns(uint256 voteIndex)
    {
        voteIndex = getCurrentVoteIndex();
        deadline[msg.sender][voteIndex] = block.timestamp + decodeVotingParams(votingParams);
        votingStatus[msg.sender][voteIndex] = uint256(VotingStatus.active);
    }


    function vote(uint256 voteIndex, address voter, uint256 option) 
    external
    override(VoteContract) 
    statusPermitsVoting(voteIndex)
    doubleVotingGuard(voteIndex, voter)
    {
        
        if (condition(voteIndex)==true){
            updateVotingStatus(voteIndex);
            return;
        }

        aggregateVotes[msg.sender][voteIndex] += option == 0 ? 1 : (-1);
        
    }

    function condition(uint voteIndex) internal view override(VoteContract) returns(bool) {
        return block.timestamp > deadline[msg.sender][voteIndex];
    }


    function updateVotingStatus(uint256 voteIndex) internal returns(uint256 _votingStatus){
        bool invalid = votes[msg.sender][voteIndex].pro == votes[msg.sender][voteIndex].contra;
        votingStatus[msg.sender][voteIndex] = invalid ? uint256(VotingStatus.failed) : uint256(VotingStatus.completed);
    }

    
    function result(uint256 voteIndex) external virtual override(VoteContract) returns(bytes32 votingResult){
        return bytes32(aggregateVotes);
    }


    function encodeVotingParams(uint256 duration) public view  returns(bytes memory){
        return abi.encode(duration);
    }

    function decodeVotingParams(bytes memory votingParams) public view returns(uint256 duration) {
        (duration) = abi.decode(votingParams, (uint256));
    }


    modifier doubleVotingGuard(uint256 voteIndex, address voter) {
        if (alreadyVoted[msg.sender][voteIndex][voter]){
            revert AlreadyVoted(voter);
        }
        _;
        alreadyVoted[msg.sender][voteIndex][voter] = true;
    }

    
  
}