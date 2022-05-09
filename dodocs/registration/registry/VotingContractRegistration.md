# VotingContractRegistration





This abstract contract handles just the registration and needs to be inherited by the registry



## Methods

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

### numberOfRegistrations

```solidity
function numberOfRegistrations() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |




