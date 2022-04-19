//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {VoteContract} from "../voteContract/VoteContract.sol";

contract TestVoteContract is VoteContract {

    mapping(uint256=>bool) public hellBreaksLoose;
    uint256 public numberOfVotes;
    bytes[] public params;

    function start(bytes memory votingParams) external override(VoteContract){
        params.push(votingParams);
        numberOfVotes += 1;
    }

    function stop() external override(VoteContract) {
        hellBreaksLoose[numberOfVotes] = true;
    }

    function parseParameters(bytes memory votingParams) 
    public
    pure
    returns(uint256 duration)
    {
        return abi.decode(votingParams, (uint256));
    }
}