//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;



interface IVoteContract {
    function start(bytes memory votingParams) external returns(uint256 voteIndex); 

    function vote(uint256 voteIndex, address voter, uint256 option) external;

    function result(uint256 voteIndex) external returns(bytes memory votingResult);

    // function stop(uint256 index) external;

    // function resume(uint256 index) external;

}

interface IVoteAndImplementContract is IVoteContract {
    function start(
        bytes4 callbackSelector,
        bytes memory callbackParams,
        bytes memory votingParams)
    external returns(uint256 index); 
}
