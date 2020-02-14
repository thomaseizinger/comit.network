---
id: "_swap_.swap"
title: "Swap"
sidebar_label: "Swap"
---

[comit-sdk - v0.10.1](../index.md) › [Globals](../globals.md) › ["swap"](../modules/_swap_.md) › [Swap](_swap_.swap.md)

## Hierarchy

* **Swap**

## Index

### Constructors

* [constructor](_swap_.swap.md#constructor)

### Properties

* [self](_swap_.swap.md#self)

### Methods

* [accept](_swap_.swap.md#accept)
* [decline](_swap_.swap.md#decline)
* [deploy](_swap_.swap.md#deploy)
* [doLedgerAction](_swap_.swap.md#doledgeraction)
* [fetchDetails](_swap_.swap.md#fetchdetails)
* [fund](_swap_.swap.md#fund)
* [redeem](_swap_.swap.md#redeem)
* [refund](_swap_.swap.md#refund)
* [tryExecuteAction](_swap_.swap.md#tryexecuteaction)

## Constructors

###  constructor

\+ **new Swap**(`bitcoinWallet`: [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md), `ethereumWallet`: [EthereumWallet](_ethereumwallet_.ethereumwallet.md), `cnd`: [Cnd](_cnd_.cnd.md), `self`: string): *[Swap](_swap_.swap.md)*

*Defined in [swap.ts:8](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`bitcoinWallet` | [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md) |
`ethereumWallet` | [EthereumWallet](_ethereumwallet_.ethereumwallet.md) |
`cnd` | [Cnd](_cnd_.cnd.md) |
`self` | string |

**Returns:** *[Swap](_swap_.swap.md)*

## Properties

###  self

• **self**: *string*

*Defined in [swap.ts:13](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L13)*

## Methods

###  accept

▸ **accept**(`params`: [TryParams](../interfaces/_timeout_promise_.tryparams.md)): *Promise‹AxiosResponse‹any››*

*Defined in [swap.ts:16](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TryParams](../interfaces/_timeout_promise_.tryparams.md) |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  decline

▸ **decline**(`params`: [TryParams](../interfaces/_timeout_promise_.tryparams.md)): *Promise‹AxiosResponse‹any››*

*Defined in [swap.ts:20](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TryParams](../interfaces/_timeout_promise_.tryparams.md) |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  deploy

▸ **deploy**(`params`: [TryParams](../interfaces/_timeout_promise_.tryparams.md)): *Promise‹undefined | string›*

*Defined in [swap.ts:24](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TryParams](../interfaces/_timeout_promise_.tryparams.md) |

**Returns:** *Promise‹undefined | string›*

___

###  doLedgerAction

▸ **doLedgerAction**(`action`: [LedgerAction](../modules/_cnd_.md#ledgeraction)): *Promise‹undefined | string›*

*Defined in [swap.ts:59](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [LedgerAction](../modules/_cnd_.md#ledgeraction) |

**Returns:** *Promise‹undefined | string›*

___

###  fetchDetails

▸ **fetchDetails**(): *Promise‹[SwapDetails](../interfaces/_cnd_.swapdetails.md)›*

*Defined in [swap.ts:44](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L44)*

**Returns:** *Promise‹[SwapDetails](../interfaces/_cnd_.swapdetails.md)›*

___

###  fund

▸ **fund**(`params`: [TryParams](../interfaces/_timeout_promise_.tryparams.md)): *Promise‹undefined | string›*

*Defined in [swap.ts:29](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TryParams](../interfaces/_timeout_promise_.tryparams.md) |

**Returns:** *Promise‹undefined | string›*

___

###  redeem

▸ **redeem**(`params`: [TryParams](../interfaces/_timeout_promise_.tryparams.md)): *Promise‹undefined | string›*

*Defined in [swap.ts:34](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TryParams](../interfaces/_timeout_promise_.tryparams.md) |

**Returns:** *Promise‹undefined | string›*

___

###  refund

▸ **refund**(`params`: [TryParams](../interfaces/_timeout_promise_.tryparams.md)): *Promise‹undefined | string›*

*Defined in [swap.ts:39](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TryParams](../interfaces/_timeout_promise_.tryparams.md) |

**Returns:** *Promise‹undefined | string›*

___

###  tryExecuteAction

▸ **tryExecuteAction**(`actionName`: string, `__namedParameters`: object): *Promise‹AxiosResponse‹any››*

*Defined in [swap.ts:49](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/swap.ts#L49)*

**Parameters:**

▪ **actionName**: *string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`maxTimeoutSecs` | number |
`tryIntervalSecs` | number |

**Returns:** *Promise‹AxiosResponse‹any››*
