//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

uint256 constant MAX_BALANCE = 1000 * (1e18);

interface IDummyERC20 {
    function freeMinting(uint256 amount) external;
}

/**
 * @title A dummy ERC20 token contract
 * @author Leonhard Horstmeyer
 * @notice You can free mint yourself some tokens
 * @dev This is intended for testing purposes only
 */
 
contract DummyERC20 is ERC20 {

    bool public isDummy;

    constructor(string memory name, string memory symbol)
    ERC20(name, symbol) {
        isDummy = true;
    }

    function freeMinting(uint256 amount) external {
        _mint(msg.sender, amount);
        require(balanceOf(msg.sender)<=MAX_BALANCE, "may not mint beyond 1000 Dummies");
    }
}