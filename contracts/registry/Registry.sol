//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;


import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IVoteContract} from "../voteContract/IVoteContract.sol";
import {IVotingRegistry} from "./IVotingRegistry.sol";

error AlreadyRegistered(address contractSeekingRegistration);
error notInterfaceImplementer(address contractSeekingRegistration);
error InvalidVoteContractSelector(IVoteContract voteContractSelector);

abstract contract Registration {

    mapping(address=>bool) internal _alreadyRegistered;
    mapping(bytes4=>IVoteContract) public voteContract;
    mapping(uint256=>bytes4) public voteContractSelectors;
    uint256 numberOfRegisteredVoteContracts;

    function _register() 
    internal 
    {
        numberOfRegisteredVoteContracts += 1;
        bytes4 selector = _computeId(msg.sender);
        voteContract[selector] = IVoteContract(msg.sender);
        voteContractSelectors[numberOfRegisteredVoteContracts] = selector;
    }

    function _computeId(address contractSeekingRegistration)
    internal 
    pure 
    returns(bytes4){
        return bytes4(keccak256(abi.encode(contractSeekingRegistration)));
    }

    function _implementsInterface(address contractSeekingRegistration)
    internal 
    view 
    returns(bool) {
        //TODO: add ERC176 or whatever it is.
        return IERC165(contractSeekingRegistration).supportsInterface(type(IVoteContract).interfaceId);
    }

    modifier registrationReentrancyGuard {
        if (_alreadyRegistered[msg.sender]){
            revert AlreadyRegistered(msg.sender);
        }
        _;
        _alreadyRegistered[msg.sender] = true;
    }

    modifier isInterfaceImplementer {
        if (!_implementsInterface(msg.sender)){
            revert notInterfaceImplementer(msg.sender);
        }
        _;
    }

    modifier isRegisteredSelector(bytes4 selector){
        if (address(voteContract[selector])==address(0)){
            revert InvalidVoteContractSelector(voteContract[selector]);
        }
        _;
    }
}

contract VotingRegistry is Registration {
    
    function register()
    external 
    isInterfaceImplementer
    registrationReentrancyGuard
    {
        _register();
    }

    function getVoteContract(bytes4 selector) 
    external
    view
    isRegisteredSelector(selector)
    returns(IVoteContract) {
        return voteContract[selector];
    }
}