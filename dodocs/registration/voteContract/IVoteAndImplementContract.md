# IVoteAndImplementContract









## Methods

### getCallbackData

```solidity
function getCallbackData(uint256 voteIndex) external view returns (bytes4 selector, bytes arguments)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| selector | bytes4 | undefined |
| arguments | bytes | undefined |

### getCallbackResponse

```solidity
function getCallbackResponse(uint256 voteIndex) external view returns (uint8)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteIndex | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### result

```solidity
function result(uint256 voteIndex) external view returns (bytes32 votingResult)
```

The result can be the casted version of an address, an integer or a pointer to a mapping that contains the entire result.



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

### start

```solidity
function start(bytes votingParams, bytes4 _callbackSelector, bytes _callbackArgs) external nonpayable returns (uint256 index)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| votingParams | bytes | undefined |
| _callbackSelector | bytes4 | undefined |
| _callbackArgs | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| index | uint256 | undefined |

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
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.*

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




