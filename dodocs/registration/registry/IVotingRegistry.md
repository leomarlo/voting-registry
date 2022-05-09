# IVotingRegistry









## Methods

### addCategoryToRegistration

```solidity
function addCategoryToRegistration(bytes8 categoryId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| categoryId | bytes8 | undefined |

### isRegistered

```solidity
function isRegistered(address voteContract) external view returns (bool registrationFlag)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| voteContract | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| registrationFlag | bool | undefined |

### isRegisteredCategory

```solidity
function isRegisteredCategory(bytes8 categoryId) external view returns (bool registrationFlag)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| categoryId | bytes8 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| registrationFlag | bool | undefined |

### register

```solidity
function register(bytes8 categoryId) external nonpayable returns (uint256 registrationIndex)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| categoryId | bytes8 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| registrationIndex | uint256 | undefined |




