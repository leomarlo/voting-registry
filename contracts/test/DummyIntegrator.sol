//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {REGISTRY} from "../registry/RegistryAddress.sol";
import {IVotingRegistry} from "../registry/IVotingRegistry.sol";
import {CanVoteAndDelegateImplement} from "../integration/CanVoteAndDelegateImplement.sol";
import {IDummyERC20, DummyERC20} from "./DummyERC20.sol";





contract DummyIntegrator is CanVoteAndDelegateImplement {

    DummyERC20 public dummyERC20; 
    address public owner;
    address public someoneElse;

    bytes4 public changeOwnerSelector = bytes4(keccak256("changeOwner(address)"));
    bytes4 public changeSomeoneElseSelector = bytes4(keccak256("changeSomeoneElse(address)"));

    constructor(address voteContract) 
    {
        dummyERC20 = new DummyERC20("Dummy ERC20 Token", "DUMMY");
        owner = msg.sender;

        // approve selectors
        _selectorApproval(changeOwnerSelector, true); 
        _selectorApproval(changeSomeoneElseSelector, true);

        // whitelist some contracts
        _whitelistContractAndSetSelector(changeOwnerSelector, voteContract);
        _whitelistContractAndSetSelector(changeSomeoneElseSelector, voteContract);
    }

    function changeOwner(address newOwner) 
    external 
    votingGuard(changeOwnerSelector)
    {
        owner = newOwner;
    }

    function changeSomeoneElse(address newSomeoneElse) 
    external 
    votingGuard(changeSomeoneElseSelector)
    {
        someoneElse = newSomeoneElse;
    }


    function _customFunctionGuard(bytes4 selector) 
    internal 
    view 
    override(CanVoteAndDelegateImplement)
    returns(bool)
    {
        bool ownerMayDoAnyThing = msg.sender==owner;
        bool someoneElseOnlyThis = (msg.sender==someoneElse) && (selector==changeSomeoneElseSelector);
        return ownerMayDoAnyThing || someoneElseOnlyThis;
    }

    // some introspection VIEW functions

    function getVotingContract(bytes4 selector) external view returns(address){
        return voteContract[selector];
    }

}
