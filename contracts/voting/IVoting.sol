//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

// TODO should be deployed always to the same address!
// TODO: Use the same trick as ERC1860 or whatever the global registry is called.
address constant VotingAppAddress = 0x0000000000000000000000000000000000000000;

interface IGetCurrentIndex {

    function getCurrentIndex() external returns(uint256);
}

interface IVoting is IGetCurrentIndex{

    function start(bytes4 votingId, bytes memory votingParams, bytes4 callbackId, bytes memory callbackParams) external returns (uint256 index);

    function pause(uint256 index) external returns(bool);

    function resume(uint256 index) external returns(bool);

    function check(uint256 index) external returns(bool);

    function stop(uint256 index) external returns(bool);

    function queryResult(uint256 index) external returns(bytes memory);

    function queryInitializer(uint256 index) external returns(address);
}
