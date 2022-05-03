//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IVotingRegistry, REGISTRY} from "../registry/IVotingRegistry.sol";
import {IVoteContract, Callback, Response} from "../voteContract/IVoteContract.sol";
import {ImplementCallback} from "../voteContract/VoteContract.sol";
import {CanVote, Whitelisting, FunctionGuard} from "./CanVote.sol";


abstract contract CanVoteAndImplement is Whitelisting, ImplementCallback, FunctionGuard, CanVote {

    mapping(uint256=>Callback) internal callback;

    constructor() CanVote(){}

     function _start(
        bytes memory _votingParams,
        bytes4 _callbackSelector,
        bytes memory _callbackArgs)
    external 
    returns(uint256 index) 
    {
        index = _start(_callbackSelector, _votingParams);
        callback[index] = Callback({
            selector: _callbackSelector,
            arguments: _callbackArgs,
            response: Response.none});
    }

    function _implement(uint256 voteIndex) internal {
        callback[voteIndex].response = _implement(address(this), callback[voteIndex]); 
    }

    function _functionGuard(bytes4 selector) 
    internal 
    view 
    override(FunctionGuard)
    returns(bool)
    {
        selector;
        return msg.sender == address(this);
    }

    function _supportsAdditionalInterfaces(address _voteContract)
    internal 
    pure 
    override(Whitelisting)
    returns(bool)
    {
        _voteContract;  // silence warnings
        return true;
    }
}
