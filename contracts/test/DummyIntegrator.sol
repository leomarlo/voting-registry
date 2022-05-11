//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {REGISTRY} from "../voting-registry-contracts/registry/RegistryAddress.sol";
import {IVotingRegistry} from "../voting-registry-contracts/registry/IVotingRegistry.sol";
import {CanVoteAndDelegateImplement} from "../voting-registry-contracts/integration/CanVoteAndDelegateImplement.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IDummyERC20, DummyERC20} from "./DummyERC20.sol";





contract DummyIntegrator is CanVoteAndDelegateImplement {

    IERC20 public dummyERC20; 
    address public owner;
    address public someoneElse;

    bytes4 public changeOwnerSelector = bytes4(bytes32(keccak256("changeOwner(address)")));
    bytes4 public changeSomeoneElseSelector = bytes4(bytes32(keccak256("changeSomeoneElse(address)")));

    constructor(address voteContract, address _dummyERC20) 
    {
        dummyERC20 = IERC20(_dummyERC20);
        owner = msg.sender;

        // approve selectors
        _selectorApproval(changeOwnerSelector, true); 
        _selectorApproval(changeSomeoneElseSelector, true);

        // whitelist some contracts
        _whitelistContractAndSetSelector(changeOwnerSelector, voteContract);
        _whitelistContractAndSetSelector(changeSomeoneElseSelector, voteContract);
    }

    /**
     * @notice Needs to be defined in order to allow voting
     */
    function start(
        bytes memory votingParams,
        bytes4 _callbackSelector,
        bytes memory _callbackArgs)
    public
    override(CanVoteAndDelegateImplement)
    {
        // some guard for calling this function might be useful.
        require(dummyERC20.balanceOf(msg.sender)>0, "Caller needs to hold DUMMY");
        _start(votingParams, _callbackSelector, _callbackArgs);
    }

    function vote(uint256 voteIndex, uint256 option)
    public 
    override(CanVoteAndDelegateImplement)
    {
        // some guard for calling this function might be useful.
        require(dummyERC20.balanceOf(msg.sender)>0, "Caller needs to hold DUMMY");
        _vote(voteIndex, option);
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
