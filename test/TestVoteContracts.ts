import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
// import {voteContractDeploymentStack, deployVoteContractStackAndSave} from '../scripts/helpers/deployment-helper'
import {
    retrieveAddressFromRegistryAddressSol,
    setGlobalRegistryAddressAndCompile,
    deployment, 
    RegisterVoteContract,
    fullContractInfo,
    delay
    } from '../scripts/helpers/deployment-helper';

import {
    Registry,
    ThresholdTokenVoteAndImplement,
    DummyERC20,
    DummyIntegrator,
 } from "../typechain";


interface Contracts {
    registry: Registry,
    thresholdTokenVoteAndImplement: ThresholdTokenVoteAndImplement,
    dummyERC20: DummyERC20,
    dummyIntegrator:DummyIntegrator,
}



async function deployContracts(): Promise<Contracts> {
    let orginalRegistryAddress: string = retrieveAddressFromRegistryAddressSol();
    try {
        // create signer
        const [ALICE] = await ethers.getSigners()

        const RegistryFactory = await ethers.getContractFactory("Registry");
        const _registry = await RegistryFactory.connect(ALICE).deploy();
        let deploymentTx = await _registry.deployed()
        let receipt = await deploymentTx.deployTransaction.wait()
        let registryAddress = receipt.contractAddress
        
        await setGlobalRegistryAddressAndCompile(registryAddress);

        // set the voting registry
        const ThresholdVotingFactory = await ethers.getContractFactory("ThresholdTokenVoteAndImplement");
        const _thresholdTokenVoteAndImplement = await ThresholdVotingFactory.connect(ALICE).deploy();
        let anotherDeploymentTx = await _thresholdTokenVoteAndImplement.deployed()
        receipt = await anotherDeploymentTx.deployTransaction.wait()
        let votingAddress = receipt.contractAddress
        let registration = await _thresholdTokenVoteAndImplement.register("0x0000000000000002")

        // deploy the dummy token
        let DummyToken = "DummyERC20"; let tokenName = "Dummy ERC20 Token"; let tokenSymbol = "DUMMY";
        const DummyTokenFactory = await ethers.getContractFactory("DummyERC20");
        const _dummyERC20 = await DummyTokenFactory.deploy(tokenName, tokenSymbol);
        let tokenDeploymentTx = await _dummyERC20.deployed()
        receipt = await tokenDeploymentTx.deployTransaction.wait()
        let dummyERC20Address = receipt.contractAddress

        // deploy the integrator
        const DummyIntegratorFactory = await ethers.getContractFactory("DummyIntegrator");
        const _dummyIntegrator = await DummyIntegratorFactory.deploy(votingAddress, dummyERC20Address)
        let integratorDeploymentTx = await _dummyIntegrator.deployed()
        receipt = await tokenDeploymentTx.deployTransaction.wait()
        let dummyIntegratorAddress = receipt.contractAddress

        let contracts: Contracts = {
            registry: _registry,
            thresholdTokenVoteAndImplement: _thresholdTokenVoteAndImplement,
            dummyERC20: _dummyERC20,
            dummyIntegrator: _dummyIntegrator
        } 
        await setGlobalRegistryAddressAndCompile(orginalRegistryAddress);

        return contracts
    } catch(err) {
        await setGlobalRegistryAddressAndCompile(orginalRegistryAddress);
        throw "Contract deployment failed."
    }
}


describe("Deploy and Test Integration", async function() {
    
    // this.beforeEach(deployContracts);
    it("Should deploy the Voting Registry", async function(){
        let contracts: Contracts = await deployContracts();
        const [ALICE, BOB] = await ethers.getSigners()

        
        // Alice And Bob buy DUMMYs
        let mintingAlice = await contracts.dummyERC20.connect(ALICE).freeMinting(ethers.utils.parseEther("245.7"))
        await mintingAlice.wait()
        let mintingBob = await contracts.dummyERC20.connect(BOB).freeMinting(ethers.utils.parseEther("245.7"))
        await mintingBob.wait()

        // get selector
        let selector = await contracts.dummyIntegrator.changeSomeoneElseSelector()
        console.log(selector)

        // get the vote encoding
        let votingParams = await contracts.thresholdTokenVoteAndImplement.encodeVotingParams(
            BigNumber.from("100"),
            BigNumber.from("1000"),
            BigNumber.from("4"),
            contracts.dummyERC20.address
        )
        console.log(votingParams);

        // whats the otherPerson before
        let someoneElseAddress = await contracts.dummyIntegrator.someoneElse()
        console.log("\nsomeoneElseAddress (before):", someoneElseAddress, "\n")

        // Alice starts vote
        let paddedAddress = "0x000000000000000000000000" + BOB.address.slice(2,)
        let startVotingTx = await contracts.dummyIntegrator.start(votingParams,selector, paddedAddress)
        await startVotingTx.wait()

        // Alice votes
        let votingTx = await contracts.dummyIntegrator.connect(ALICE).vote(BigNumber.from("1"), BigNumber.from("0"))
        await votingTx.wait()

        // wait for a bit
        console.log("We are waiting for 5 seconds.")
        await delay(5000);
        
        // Bob votes and triggers implement
        let votingBobTx = await contracts.dummyIntegrator.connect(BOB).vote(BigNumber.from("1"), BigNumber.from("0"))
        await votingBobTx.wait()

        // whats the otherPerson before
        someoneElseAddress = await contracts.dummyIntegrator.someoneElse()
        console.log("\nsomeoneElseAddress (after):", someoneElseAddress, "\n")

    });
});


