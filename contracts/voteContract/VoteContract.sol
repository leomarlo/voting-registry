//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
// TODO: this should be accessible via a npm package
import {IVotingRegistry, VotingRegistryAddress} from "../registry/IVotingRegistry.sol";
import {IVoteContract} from "./IVoteContract.sol";



abstract contract VoteContract is IERC165, IVoteContract {

    constructor() {
        _registerVoteContract();
    }

    function _registerVoteContract()
    internal 
    {
        IVotingRegistry(VotingRegistryAddress).register();
    }

    function start(bytes memory votingParams) external virtual override(IVoteContract);
    function stop() external virtual override(IVoteContract);

    function supportsInterface(bytes4 interfaceId) public pure override(IERC165) returns (bool) {
        return 
            interfaceId == type(IVoteContract).interfaceId ||
            interfaceId == type(IERC165).interfaceId;
            // super.supportsInterface(interfaceId);
    }

    
}