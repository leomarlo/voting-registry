import { expect } from "chai";
import { ethers } from "hardhat";
// import {voteContractDeploymentStack, deployVoteContractStackAndSave} from '../scripts/helpers/deployment-helper'

import {
    Registry

 } from "../typechain";


interface Contracts {
    Registry: Registry,
}

async function deployContracts(): Promise<Contracts> {
    const VotingRegistry = await ethers.getContractFactory("Registry");
    const votingRegistry = await (await VotingRegistry.deploy()).deployed();
    let contracts: Contracts = {
        Registry: votingRegistry
    } 
    return contracts
}

describe("Registry", async function () {
    describe("Deploy Registry", async function() {
        it("Should deploy the Voting Registry", async function(){
            let contracts: Contracts = await deployContracts();
            let number = await contracts.Registry.numberOfRegistrations()
            console.log("registration count", number.toString())

        });
    });
    describe("Hook up Voting Contracts", async function() {
        let contracts: Contracts;
        beforeEach(async()=>{
            contracts = await deployContracts();
        });
        it("should hook up VoteContract", async function() {
            const SimpleMajorityVote = await ethers.getContractFactory("SimpleMajorityVote");
            console.log("registry Address", contracts.Registry.address)

            const simpleMajorityVote = await SimpleMajorityVote.deploy("0x0000000000000001")
            console.log("deployment tx", simpleMajorityVote)
            let tx = await simpleMajorityVote.register("0x0000000000000001")
            console.log('tx', tx)
            let number = await contracts.Registry.numberOfRegistrations()
            console.log("registration count", number.toString())
            // expect(await greeter.greet()).to.equal("Hola, mundo!");
            // const RevertConstructor = await ethers.getContractFactory("RevertConstructor");
            // const revertConstructor = await RevertConstructor.deploy()
            // console.log("reversion", revertConstructor)

        });
    });
});