//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {VoteContract, VoteAndImplementContract, VotingStatus} from "../voting-registry-contracts/voteContract/VoteContract.sol";
import {SimpleMajorityVote} from "./SimpleMajorityVote.sol";


error AlreadyVoted(address voter); // TODO: add more fields




contract SimpleMajorityVoteAndImplement is VoteAndImplementContract {

    mapping(address=>mapping(uint256=>int256)) internal aggregateVotes;
    mapping(address=>mapping(uint256=>uint256)) internal deadline;
    mapping(address=>mapping(uint256=>mapping(address=>bool))) internal alreadyVoted;

    // constructor(bytes8 _categoryId, address _registry)
    // VoteAndImplementContract(_categoryId, _registry){}

    function _start(bytes memory votingParams) 
    internal 
    override(VoteAndImplementContract)
    returns(uint256 voteIndex)
    {
        voteIndex = getCurrentVoteIndex(msg.sender);
        // set voting parameters
        deadline[msg.sender][voteIndex] = block.timestamp + decodeVotingParams(votingParams);
        
    }


    function vote(uint256 voteIndex, address voter, uint256 option) 
    external
    override(VoteAndImplementContract) 
    permitsVoting(voteIndex)
    doubleVotingGuard(voteIndex, voter)
    returns(uint256)
    {
        
        if (condition(voteIndex)==true){
            updateStatus(voteIndex);
            _implement(voteIndex);
            return votingStatus[msg.sender][voteIndex];
        }

        aggregateVotes[msg.sender][voteIndex] += (option == 0) ? int256(1) : int256(-1);
        
        return votingStatus[msg.sender][voteIndex];
    }

    function condition(uint voteIndex) internal view override(VoteAndImplementContract) returns(bool) {
        return block.timestamp > deadline[msg.sender][voteIndex];
    }


    function updateStatus(uint256 voteIndex) internal {
        // only pass the vote when the aggregated votes are larger than zero.
        votingStatus[msg.sender][voteIndex] = aggregateVotes[msg.sender][voteIndex]>0 ? uint256(uint8(VotingStatus.failed)) : uint256(uint8(VotingStatus.completed));
    }

    function statusPermitsVoting(uint256 voteIndex) view external override(VoteAndImplementContract) returns(bool) {
        return _statusPermitsVoting(voteIndex);
    }
    
    function result(uint256 voteIndex) external view override(VoteAndImplementContract) returns(bytes32 votingResult){
        return bytes32(uint256(aggregateVotes[msg.sender][voteIndex]));
    }


    function encodeVotingParams(uint256 duration) public pure  returns(bytes memory){
        return abi.encode(duration);
    }

    function decodeVotingParams(bytes memory votingParams) public pure returns(uint256 duration) {
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