# Registry









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
function isRegistered(address votingContract) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| votingContract | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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




