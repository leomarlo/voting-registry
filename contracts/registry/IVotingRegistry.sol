//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IVoteContract} from "../voteContract/IVoteContract.sol";


// TODO should be deployed always to the same address!
// TODO: Use the same trick as ERC1860 or whatever the global registry is called.
address constant REGISTRY = 0x1460ce805f5E6dc4Afd65960c7a8DD23bB3EeF6A;


interface IVotingRegistry {

    function register(bytes8) external returns(uint256 registrationIndex);
    function isRegistered(address) view external returns(bool registrationFlag);

    function addCategoryToRegistration(bytes8) external;
    function isRegisteredCategory(bytes8) view external returns(bool registrationFlag);

}