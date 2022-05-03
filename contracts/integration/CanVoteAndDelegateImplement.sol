//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {REGISTRY} from "../registry/RegistryAddress.sol";
import {IVotingRegistry} from "../registry/IVotingRegistry.sol";
import {IVoteContract, IVoteAndImplementContract} from "../voteContract/IVoteContract.sol";
import {CanVote, Whitelisting, FunctionGuard} from "./CanVote.sol";


abstract contract CanVoteAndDelegateImplement is Whitelisting, FunctionGuard, CanVote {

    // constructor() CanVote(){}

    function _customFunctionGuard(bytes4 selector) 
    internal 
    view 
    virtual
    override(FunctionGuard)
    returns(bool)
    {
        selector;  // silence warnings
        return false;
    }

    function _functionGuard(bytes4 selector) 
    internal 
    view 
    override(FunctionGuard)
    returns(bool)
    {
        return msg.sender == voteContract[selector];
    }

    function _supportsAdditionalInterfaces(address _voteContract)
    internal 
    view 
    override(Whitelisting)
    returns(bool)
    {
        return IVoteContract(_voteContract).supportsInterface(type(IVoteAndImplementContract).interfaceId);
    }
    
}