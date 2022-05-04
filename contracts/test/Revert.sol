//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

error ReversionOfConstructor(address deployer);



contract RevertConstructor {

    constructor(){
        if (true) {
            revert ReversionOfConstructor(msg.sender);
        }
        // require(false, "You failed, miserably!");
    }
}

contract RevertFunction {

    function fail() external pure {
        require(false, "You failed, even more miserably than before!");
    }
}