# Registry

*Leonhard Horstmeyer &lt;leonhard.horstmeyer@gmail.com&gt;*

> Voting Registry - An on-chain regitry for voting contracts that fulfil interface conditions





## Methods

### addCategoryToRegistration

```solidity
function addCategoryToRegistration(bytes8 categoryId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| categoryId | bytes8 | undefined |

### getNumberOfRegisteredCategories

```solidity
function getNumberOfRegisteredCategories() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getRegisteredCategoryFromIndex

```solidity
function getRegisteredCategoryFromIndex(uint256 index) external view returns (bytes8)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes8 | undefined |

### getRegistrationIndex

```solidity
function getRegistrationIndex(address votingContract) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| votingContract | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### isRegistered

```solidity
function isRegistered(address votingContract) external view returns (bool _isRegistered)
```



*Checks whether contract is registered*

#### Parameters

| Name | Type | Description |
|---|---|---|
| votingContract | address | The address of the contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _isRegistered | bool | The boolean flag that is raised when          the contract is registered |

### isRegisteredCategory

```solidity
function isRegisteredCategory(bytes8 category) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| category | bytes8 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### numberOfRegistrations

```solidity
function numberOfRegistrations() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### register

```solidity
function register(bytes8 _categoryId) external nonpayable returns (uint256 registrationIndex)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _categoryId | bytes8 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| registrationIndex | uint256 | undefined |




## Errors

### AlreadyRegistered

```solidity
error AlreadyRegistered(address contractSeekingRegistration)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| contractSeekingRegistration | address | undefined |

### NotRegistered

```solidity
error NotRegistered(address notRegisteredContract)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| notRegisteredContract | address | undefined |


