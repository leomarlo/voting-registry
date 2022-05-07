# RegisterVoteContract









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

### register

```solidity
function register(bytes8 categoryId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| categoryId | bytes8 | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool)
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


