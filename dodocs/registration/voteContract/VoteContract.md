# VoteContract









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
function vote(uint256 voteIndex, address voter, uint256 option) external nonpayable returns (uint256 status)
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
| status | uint256 | undefined |




## Errors

### MayOnlyRegisterOnceByDeployer

```solidity
error MayOnlyRegisterOnceByDeployer(address caller, bytes8 categoryId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| caller | address | undefined |
| categoryId | bytes8 | undefined |


