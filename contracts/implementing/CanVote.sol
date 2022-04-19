//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IVotingRegistry, VotingRegistryAddress} from "../registry/IVotingRegistry.sol";

import {IVoting, VotingAppAddress} from "../voting/IVoting.sol";



abstract contract CanVote {

    IVoting internal voting;

    mapping(bytes4 => bool) internal whitelistedVoteContracts;
    bool internal whitelistAllVoteContracts;


    function _connectToVotingApp()
    internal 
    {
        voting = IVoting(VotingAppAddress);
    }

    function _addWhitelistedVoteContract(bytes4 selector) internal {
        whitelistedVoteContracts[selector] = true;
    }

    function _removeWhitelistedVoteContract(bytes4 selector) internal {
        whitelistedVoteContracts[selector] = false;
    }

    function _whitelistAllVoteContracts() internal {
        whitelistAllVoteContracts = true;
    }

    function _undoWhitelistAllVoteContracts() internal {
        whitelistAllVoteContracts = false;
    }

    function _isWhiteListedVoteContract(bytes4 selector)
    internal
    view 
    returns(bool){
        return 
            whitelistedVoteContracts[selector] || 
            whitelistAllVoteContracts;
    }

    function _callerIsVotingApp()
    internal 
    view
    returns(bool) {
        return msg.sender==address(voting);
    }
    
}