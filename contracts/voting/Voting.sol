// //SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.4;

// import {IVoting, IGetCurrentIndex} from "./IVoting.sol";
// import {IVoteContract} from "../voteContract/IVoteContract.sol";
// import {IVotingRegistry, REGISTRY} from "../registry/IVotingRegistry.sol";

// // should be possible to 
// // - vote with time thresholds, below and above (i.e. deadline).
// // - vote with token weight
// // - vote in between events
// // - vote ...


// abstract contract IndexHandling is IGetCurrentIndex {

//     mapping(address=>uint256) internal currentIndex;
    
//     function getCurrentIndex() external view override(IGetCurrentIndex) returns(uint256) {
//         return currentIndex[msg.sender];
//     }

//     modifier iterateIndex() {
//         currentIndex[msg.sender] += 1;
//         _;
//     }
// }

// abstract contract RegistryHandling {
//     IVotingRegistry public votingRegistry;

//     function _loadVotingRegistry() internal {
//         votingRegistry = IVotingRegistry(REGISTRY);
//     }
// }

// struct VotingMetaData{
//     address initializer;
//     IVoteContract voteContract;
//     bytes4 callbackSelector;
//     bytes callbackParams;
// }

// error InvalidInitializer(address initializer, address requiredInitializer);

// contract Voting is IGetCurrentIndex, IVoting, IndexHandling, RegistryHandling{

//     mapping(address=>mapping(uint256=>VotingMetaData)) internal votingMetaData;

//     constructor(address _votingRegistryAddress) {
//         _loadVotingRegistry();
//         // TODO: this address should be global
//         votingRegistry = IVotingRegistry(_votingRegistryAddress);
//     }

//     function start(
//         bytes4 votingId,
//         bytes memory votingParams,
//         bytes4 callbackSelector,
//         bytes memory callbackParams) 
//     external 
//     override(IVoting) 
//     iterateIndex
//     returns (uint256 index) 
//     {
//         index = currentIndex[msg.sender];
//         votingMetaData[msg.sender][index].voteContract = votingRegistry.getVoteContract(votingId);
//         votingMetaData[msg.sender][index].callbackSelector = callbackSelector;
//         votingMetaData[msg.sender][index].callbackParams = callbackParams;
//         votingMetaData[msg.sender][index].voteContract.start(votingParams);
//     }

//     function pause(uint256 index) external override(IVoting) returns(bool) { return false; }

//     function resume(uint256 index) external override(IVoting) returns(bool) { return false; }

//     function check(uint256 index) external override(IVoting) returns(bool) { return false; } 

//     function stop(uint256 index) external override(IVoting) returns(bool) { return false; }

//     function queryResult(uint256 index) external override(IVoting) returns(bytes memory) { return bytes(abi.encode(0x0)); }

//     function queryInitializer(uint256 index) external override(IVoting) returns(address) { return address(0x0); }


//     // modifier onlyInitializer(uint256 index) {
//     //     if(msg.sender!=votingMetaData[index].initializer){
//     //         revert InvalidInitializer(msg.sender, votingMetaData[index].initializer);
//     //     }
//     //     _;
//     // }

// }
