//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {VoteContract, VotingStatus} from "../voteContract/VoteContract.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error AlreadyVoted(address voter); // TODO: add more fields
error VotingNotAllowed(uint256 voteIndex, address callingContract);

    

uint256 constant BASISPOINTS = 10_000;

struct Parameters {
    uint256 quorum;
    uint256 threshold;
    uint256 deadline;
    IERC20 token;
}

struct Votes {
    uint256 pro;
    uint256 contra;
    uint256 total;   // = pro + contra + abstain
}

contract ThresholdTokenVote is VoteContract {

    mapping(address=>mapping(uint256=>Parameters)) internal parameters;
    mapping(address=>mapping(uint256=>Votes)) internal votes;
    mapping(address=>mapping(uint256=>mapping(address=>bool))) internal alreadyVoted;

    // constructor(bytes8 _categoryId)
    // VoteContract(_categoryId){}
    // constructor(bytes8 _categoryId, address _registry)
    // VoteContract(_categoryId, _registry){}

    function _start(bytes memory votingParams) 
    internal 
    override(VoteContract)
    returns(uint256 voteIndex)
    {
        voteIndex = getCurrentVoteIndex(msg.sender);

        // load parameters into variables
        (uint256 quorum,
         uint256 threshold,
         uint256 duration,
         address tokenAddress) = decodeVotingParams(votingParams);

        // check parameter consistence
        require(threshold > quorum, "inconsistent parameters");

        // assign parameters to storage
        parameters[msg.sender][voteIndex].quorum = quorum;
        parameters[msg.sender][voteIndex].threshold = threshold;
        parameters[msg.sender][voteIndex].deadline = block.timestamp + duration;
        parameters[msg.sender][voteIndex].token = IERC20(tokenAddress);
        
    }

    function vote(uint256 voteIndex, address voter, uint256 option) 
    external
    override(VoteContract) 
    permitsVoting(voteIndex)
    doubleVotingGuard(voteIndex, voter)
    returns(uint256)
    {
        
        if (condition(voteIndex)==true){
            updateStatus(voteIndex);
            return votingStatus[msg.sender][voteIndex];
        }

        uint256 weight = parameters[msg.sender][voteIndex].token.balanceOf(voter);
        votes[msg.sender][voteIndex].total += weight;

        if (option==0) {
            votes[msg.sender][voteIndex].pro += weight;
        }
        if (option==1) {
            votes[msg.sender][voteIndex].contra += weight;
        }

        return votingStatus[msg.sender][voteIndex];
        
    }

    function condition(uint voteIndex) internal view override(VoteContract) returns(bool) {
        // check whether deadline is over
        return block.timestamp <= parameters[msg.sender][voteIndex].deadline;
    }

    function updateStatus(uint256 voteIndex) internal {
        
        // check Quorum
        uint256 totalVotes = votes[msg.sender][voteIndex].total;
        uint256 currentTokenSupply = parameters[msg.sender][voteIndex].token.totalSupply();
        if (totalVotes < (parameters[msg.sender][voteIndex].quorum * currentTokenSupply) / BASISPOINTS) {
            votingStatus[msg.sender][voteIndex] = uint256(uint8(VotingStatus.failed));
            return;
        } 

        // check Majority
        uint256 majorityThreshold = (parameters[msg.sender][voteIndex].threshold * totalVotes) / BASISPOINTS;
        bool moreProThanContra = votes[msg.sender][voteIndex].pro > votes[msg.sender][voteIndex].contra;
        // for simplicity lets assume that 
        bool completed = moreProThanContra && (votes[msg.sender][voteIndex].pro >= majorityThreshold);
        votingStatus[msg.sender][voteIndex] = completed ? uint256(uint8(VotingStatus.failed)) : uint256(uint8(VotingStatus.failed));

    }

    function statusPermitsVoting(uint256 voteIndex) external view override(VoteContract) returns(bool) {
        return _statusPermitsVoting(voteIndex);
    }

    function result(uint256 voteIndex) external view override(VoteContract) returns(bytes32 votingResult){
        return bytes32(votes[msg.sender][voteIndex].pro);
    }

    function getTotalVotes(uint256 voteIndex) external view returns (uint256) {
        return votes[msg.sender][voteIndex].total;
    }

    function getVotes(uint256 voteIndex) external view returns (uint256 pro, uint256 contra, uint256 abstain) {
        pro = votes[msg.sender][voteIndex].pro;
        contra = votes[msg.sender][voteIndex].contra;
        abstain = votes[msg.sender][voteIndex].total - (pro + contra);
    }

    function encodeVotingParams(
        uint256 quorum,
        uint256 threshold,
        uint256 duration,
        address tokenAddress)
    public
    pure 
    returns(bytes memory)
    {
        return abi.encode(quorum,threshold,duration,tokenAddress);
    }

    function decodeVotingParams(
        bytes memory votingParams) 
    public
    pure
    returns(
        uint256 quorum,
        uint256 thresholdInBasisPoints,
        uint256 duration,
        address tokenAddress)
    {
        (quorum,
         thresholdInBasisPoints,
         duration,
         tokenAddress) = abi.decode(votingParams, (uint256,uint256,uint256,address));
    }

    modifier doubleVotingGuard(uint256 voteIndex, address voter) {
        if (alreadyVoted[msg.sender][voteIndex][voter]){
            revert AlreadyVoted(voter);
        }
        _;
        alreadyVoted[msg.sender][voteIndex][voter] = true;
    }

}