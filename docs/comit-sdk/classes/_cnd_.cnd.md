---
id: "_cnd_.cnd"
title: "Cnd"
sidebar_label: "Cnd"
---

Facilitates access to the cnd REST API

## Hierarchy

* **Cnd**

## Index

### Constructors

* [constructor](_cnd_.cnd.md#constructor)

### Methods

* [executeAction](_cnd_.cnd.md#executeaction)
* [fetch](_cnd_.cnd.md#fetch)
* [getPeerId](_cnd_.cnd.md#getpeerid)
* [getPeerListenAddresses](_cnd_.cnd.md#getpeerlistenaddresses)
* [getSwaps](_cnd_.cnd.md#getswaps)
* [postSwap](_cnd_.cnd.md#postswap)

## Constructors

###  constructor

\+ **new Cnd**(`cndUrl`: string): *[Cnd](_cnd_.cnd.md)*

*Defined in [cnd.ts:202](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/cnd.ts#L202)*

**Parameters:**

Name | Type |
------ | ------ |
`cndUrl` | string |

**Returns:** *[Cnd](_cnd_.cnd.md)*

## Methods

###  executeAction

▸ **executeAction**(`action`: [Action](../interfaces/_siren_.action.md), `resolver?`: [FieldValueResolverFn](../modules/_action_to_http_request_.md#fieldvalueresolverfn)): *Promise‹AxiosResponse›*

*Defined in [cnd.ts:251](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/cnd.ts#L251)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [Action](../interfaces/_siren_.action.md) |
`resolver?` | [FieldValueResolverFn](../modules/_action_to_http_request_.md#fieldvalueresolverfn) |

**Returns:** *Promise‹AxiosResponse›*

___

###  fetch

▸ **fetch**<**T**>(`path`: string): *AxiosPromise‹T›*

*Defined in [cnd.ts:243](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/cnd.ts#L243)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *AxiosPromise‹T›*

___

###  getPeerId

▸ **getPeerId**(): *Promise‹string›*

*Defined in [cnd.ts:208](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/cnd.ts#L208)*

**Returns:** *Promise‹string›*

___

###  getPeerListenAddresses

▸ **getPeerListenAddresses**(): *Promise‹string[]›*

*Defined in [cnd.ts:216](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/cnd.ts#L216)*

**Returns:** *Promise‹string[]›*

___

###  getSwaps

▸ **getSwaps**(): *Promise‹[SwapSubEntity](../interfaces/_cnd_.swapsubentity.md)[]›*

*Defined in [cnd.ts:237](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/cnd.ts#L237)*

**Returns:** *Promise‹[SwapSubEntity](../interfaces/_cnd_.swapsubentity.md)[]›*

___

###  postSwap

▸ **postSwap**(`swap`: [SwapRequest](../interfaces/_cnd_.swaprequest.md)): *Promise‹string›*

*Defined in [cnd.ts:224](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/cnd.ts#L224)*

**Parameters:**

Name | Type |
------ | ------ |
`swap` | [SwapRequest](../interfaces/_cnd_.swaprequest.md) |

**Returns:** *Promise‹string›*
