//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;



interface IVoteContract {
    function start(bytes memory votingParams) external returns(uint256 voteIndex); 

    function vote(uint256 voteIndex, address voter, uint256 option) external;

    /**
     * @notice The result can be the casted version of an address, an integer or a pointer to a mapping that contains the entire result.
     */
    function result(uint256 voteIndex) external view returns(bytes32 votingResult);
}


interface IVoteAndImplementContract is IVoteContract {
    function start(
        bytes memory _votingParams,
        bytes4 _callbackSelector,
        bytes memory _callbackArgs)
    external returns(uint256 index); 
}
