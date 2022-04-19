//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;



interface IVoteContract {
    function start(bytes memory votingParams) external; 

    function stop() external;

    // function parseParameters(bytes memory votingParams) external;
}
