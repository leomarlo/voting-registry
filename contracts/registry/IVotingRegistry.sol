//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IVoteContract} from "../voteContract/IVoteContract.sol";


// TODO should be deployed always to the same address!
// TODO: Use the same trick as ERC1860 or whatever the global registry is called.
address constant VotingRegistryAddress = 0x0000000000000000000000000000000000000000;


interface IVotingRegistry {

    function register() external;

    function getVoteContract(bytes4 selector) external returns(IVoteContract voteContract);
}