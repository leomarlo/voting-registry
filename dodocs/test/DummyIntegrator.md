# DummyIntegrator









## Methods

### changeOwner

```solidity
function changeOwner(address newOwner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### changeOwnerSelector

```solidity
function changeOwnerSelector() external view returns (bytes4)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined |

### changeSomeoneElse

```solidity
function changeSomeoneElse(address newSomeoneElse) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newSomeoneElse | address | undefined |

### changeSomeoneElseSelector

```solidity
function changeSomeoneElseSelector() external view returns (bytes4)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined |

### dummyERC20

```solidity
function dummyERC20() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

### getTotalVotesStarted

```solidity
function getTotalVotesStarted() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getVoteInfo

```solidity
function getVoteInfo(uint256 voteIndex) external view returns (address, uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |

### getVotingContract

```solidity
function getVotingContract(bytes4 selector) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| selector | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### owner

```solidity
function owner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### someoneElse

```solidity
function someoneElse() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### start

```solidity
function start(bytes votingParams, bytes4 _callbackSelector, bytes _callbackArgs) external nonpayable
```

Needs to be defined in order to allow voting



#### Parameters

| Name | Type | Description |
|---|---|---|
| votingParams | bytes | undefined |
| _callbackSelector | bytes4 | undefined |
| _callbackArgs | bytes | undefined |

### vote

```solidity
function vote(uint256 voteIndex, uint256 option) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |
| option | uint256 | undefined |




## Errors

### DoesNotPermitVoting

```solidity
error DoesNotPermitVoting(uint256 voteIndex)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

### FunctionDoesntPermitVoting

```solidity
error FunctionDoesntPermitVoting(bytes4 selector)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| selector | bytes4 | undefined |

### IsNotWhitelistedVoteContract

```solidity
error IsNotWhitelistedVoteContract(address voteContract)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteContract | address | undefined |

### MayNotCallFunction

```solidity
error MayNotCallFunction(address caller)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| caller | address | undefined |

### NotRegisteredVoteContract

```solidity
error NotRegisteredVoteContract(address voteContract)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteContract | address | undefined |


