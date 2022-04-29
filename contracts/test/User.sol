// //SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.4;

// import {CanVote} from "../implementing/CanVote.sol";

// interface IAmSpecial {
//     function makeMeSpecial(address specialPerson) external;
// }

// contract TestUser is CanVote, IAmSpecial {

//     mapping(address=>bool) public specialAccounts;
//     address public owner;
    
//     constructor () {
//         _connectToVotingApp();
//         owner = msg.sender;
//     }

//     function whitelistVoteContract(bytes4 selector)
//     external
//     {
//         require(msg.sender==owner, "Only owner");
//         _addWhitelistedVoteContract(selector);
//     }

//     function makeMeSpecial(address specialPerson)
//     external
//     override(IAmSpecial)
//     onlyByVoteOrByOwner
//     {
//         specialAccounts[specialPerson] = true;
//     }

//     modifier onlyByVoteOrByOwner {
//         require(_callerIsVotingApp() || msg.sender==owner, "I told ya!");
//         _;
//     }

// }