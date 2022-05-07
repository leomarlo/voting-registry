# CanVote









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
function start(bytes4 selector, bytes votingParams) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| selector | bytes4 | undefined |
| votingParams | bytes | undefined |

### vote

```solidity
function vote(uint256 voteIndex, uint256 option) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |
| option | uint256 | undefined |




