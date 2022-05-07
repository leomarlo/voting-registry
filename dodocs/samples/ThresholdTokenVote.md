# ThresholdTokenVote









## Methods

### categories

```solidity
function categories(uint256) external view returns (bytes8)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes8 | undefined |

### decodeVotingParams

```solidity
function decodeVotingParams(bytes votingParams) external pure returns (uint256 quorum, uint256 thresholdInBasisPoints, uint256 duration, address tokenAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| votingParams | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| quorum | uint256 | undefined |
| thresholdInBasisPoints | uint256 | undefined |
| duration | uint256 | undefined |
| tokenAddress | address | undefined |

### encodeVotingParams

```solidity
function encodeVotingParams(uint256 quorum, uint256 threshold, uint256 duration, address tokenAddress) external pure returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| quorum | uint256 | undefined |
| threshold | uint256 | undefined |
| duration | uint256 | undefined |
| tokenAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### getCurrentVoteIndex

```solidity
function getCurrentVoteIndex(address caller) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| caller | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getCurrentVotingStatus

```solidity
function getCurrentVotingStatus(uint256 voteIndex) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getTotalVotes

```solidity
function getTotalVotes(uint256 voteIndex) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getVotes

```solidity
function getVotes(uint256 voteIndex) external view returns (uint256 pro, uint256 contra, uint256 abstain)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| pro | uint256 | undefined |
| contra | uint256 | undefined |
| abstain | uint256 | undefined |

### register

```solidity
function register(bytes8 categoryId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| categoryId | bytes8 | undefined |

### result

```solidity
function result(uint256 voteIndex) external view returns (bytes32 votingResult)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| votingResult | bytes32 | undefined |

### start

```solidity
function start(bytes votingParams) external nonpayable returns (uint256 voteIndex)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| votingParams | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

### statusPermitsVoting

```solidity
function statusPermitsVoting(uint256 voteIndex) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### vote

```solidity
function vote(uint256 voteIndex, address voter, uint256 option) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |
| voter | address | undefined |
| option | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |




## Errors

### AlreadyVoted

```solidity
error AlreadyVoted(address voter)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voter | address | undefined |

### MayOnlyRegisterOnceByDeployer

```solidity
error MayOnlyRegisterOnceByDeployer(address caller, bytes8 categoryId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| caller | address | undefined |
| categoryId | bytes8 | undefined |

### StatusPermitsVoting

```solidity
error StatusPermitsVoting(address caller, uint256 voteIndex)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| caller | address | undefined |
| voteIndex | uint256 | undefined |


