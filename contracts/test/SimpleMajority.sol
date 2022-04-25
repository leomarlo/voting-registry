//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {VoteContract} from "../voteContract/VoteContract.sol";

struct Votes {
    uint256 pro;
    uint256 contra;
}

struct VotingParams {
    uint256 deadline;
}

contract TestVoteContract is VoteContract {

    mapping(address=>mapping(uint256=>Votes)) internal votes;
    mapping(address=>mapping(uint256=>VotingParams)) internal _votingParams;

    function start(bytes memory votingParams) 
    external 
    override(VoteContract)
    iterateVoteIndex
    returns(uint256 voteIndex)
    {
        voteIndex = getCurrentVoteIndex();
        uint256 deadline = block.timestamp + abi.decode(votingParams, (uint256));

        _votingParams[msg.sender][voteIndex] = VotingParams({
            deadline: deadline
        });

        votingStatus[msg.sender][voteIndex] = 1;
    }


    function _check(uint256 voteIndex) internal returns(uint256 _votingStatus){
        bool simpleMajority = votes[msg.sender][voteIndex].pro > votes[msg.sender][voteIndex].contra;
        _votingStatus = simpleMajority ? 1 : 0;
    }

    function getVotingParamsEncodingSelector() public view override(VoteContract) returns(bytes4) {
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

  
}