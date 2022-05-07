# CanVoteAndImplement









## Methods

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

### start

```solidity
function start(bytes votingParams, bytes4 _callbackSelector, bytes _callbackArgs) external nonpayable
```





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




