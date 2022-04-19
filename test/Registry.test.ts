// import { expect } from "chai";
// import { ethers } from "hardhat";

// import {
//     VotingRegistry,
//     Voting
// } from "../typechain";


// interface Contracts {
//     voting: Voting;
//     votingRegitry: VotingRegistry
// }

// async function deployContracts(): Promise<Contracts> {
//     const VotingRegistry = await ethers.getContractFactory("VotingRegistry");
//     const votingRegistry = await (await VotingRegistry.deploy()).deployed();
    
// }

// describe("Registry", function () {
//   it("Should deploy the Voting Registry", async function () {
//     votingRegistry = await VotingRegistry__factory.connect("abcde", ethers.provider).deployTransaction()

//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });