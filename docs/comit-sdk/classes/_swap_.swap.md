---
id: "_swap_.swap"
title: "Swap"
sidebar_label: "Swap"
---

A stateful class that represents a single swap.

It has all the dependencies embedded that are necessary for taking actions on the swap.

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
* [tryExecuteSirenAction](_swap_.swap.md#tryexecutesirenaction)

## Constructors

###  constructor

\+ **new Swap**(`bitcoinWallet`: [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md), `ethereumWallet`: [EthereumWallet](_ethereum_wallet_.ethereumwallet.md), `cnd`: [Cnd](_cnd_cnd_.cnd.md), `self`: string): *[Swap](_swap_.swap.md)*

*Defined in [swap.ts:14](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`bitcoinWallet` | [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md) |
`ethereumWallet` | [EthereumWallet](_ethereum_wallet_.ethereumwallet.md) |
`cnd` | [Cnd](_cnd_cnd_.cnd.md) |
`self` | string |

**Returns:** *[Swap](_swap_.swap.md)*

## Properties

###  self

• **self**: *string*

*Defined in [swap.ts:19](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L19)*

## Methods

###  accept

▸ **accept**(`tryParams`: [TryParams](../interfaces/_util_timeout_promise_.tryparams.md)): *Promise‹void›*

*Defined in [swap.ts:28](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L28)*

Looks for and executes the accept action of this [Swap](_swap_.swap.md).
If the [Swap](_swap_.swap.md) is not in the right state this call will throw a timeout exception.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tryParams` | [TryParams](../interfaces/_util_timeout_promise_.tryparams.md) | Controls at which stage the exception is thrown.  |

**Returns:** *Promise‹void›*

___

###  decline

▸ **decline**(`tryParams`: [TryParams](../interfaces/_util_timeout_promise_.tryparams.md)): *Promise‹void›*

*Defined in [swap.ts:38](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L38)*

Looks for and executes the decline action of this [Swap](_swap_.swap.md).
If the [Swap](_swap_.swap.md) is not in the right state this call will throw a timeout exception.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tryParams` | [TryParams](../interfaces/_util_timeout_promise_.tryparams.md) | Controls at which stage the exception is thrown.  |

**Returns:** *Promise‹void›*

___

###  deploy

▸ **deploy**(`tryParams`: [TryParams](../interfaces/_util_timeout_promise_.tryparams.md)): *Promise‹string›*

*Defined in [swap.ts:51](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L51)*

Looks for and executes the deploy action of this [Swap](_swap_.swap.md).
If the [Swap](_swap_.swap.md) is not in the right state this call will throw a timeout exception.

This is only valid for ERC20 swaps.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tryParams` | [TryParams](../interfaces/_util_timeout_promise_.tryparams.md) | Controls at which stage the exception is thrown. |

**Returns:** *Promise‹string›*

The hash of the transaction that was sent to the blockchain network.

___

###  doLedgerAction

▸ **doLedgerAction**(`ledgerAction`: [LedgerAction](../modules/_cnd_cnd_.md#ledgeraction)): *Promise‹string›*

*Defined in [swap.ts:135](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L135)*

Low level API for executing a ledger action returned from [Cnd](_cnd_cnd_.cnd.md).

Uses the wallets given in the constructor to send transactions according to the given ledger action.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ledgerAction` | [LedgerAction](../modules/_cnd_cnd_.md#ledgeraction) | The ledger action returned from [Cnd](_cnd_cnd_.cnd.md).  |

**Returns:** *Promise‹string›*

___

###  fetchDetails

▸ **fetchDetails**(): *Promise‹[SwapDetails](../interfaces/_cnd_cnd_.swapdetails.md)›*

*Defined in [swap.ts:104](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L104)*

**Returns:** *Promise‹[SwapDetails](../interfaces/_cnd_cnd_.swapdetails.md)›*

___

###  fund

▸ **fund**(`tryParams`: [TryParams](../interfaces/_util_timeout_promise_.tryparams.md)): *Promise‹string›*

*Defined in [swap.ts:66](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L66)*

Looks for and executes the fund action of this [Swap](_swap_.swap.md).
If the [Swap](_swap_.swap.md) is not in the right state this call will throw a timeout exception.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tryParams` | [TryParams](../interfaces/_util_timeout_promise_.tryparams.md) | Controls at which stage the exception is thrown. |

**Returns:** *Promise‹string›*

The hash of the transaction that was sent to the blockchain network.

___

###  redeem

▸ **redeem**(`tryParams`: [TryParams](../interfaces/_util_timeout_promise_.tryparams.md)): *Promise‹string›*

*Defined in [swap.ts:81](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L81)*

Looks for and executes the redeem action of this [Swap](_swap_.swap.md).
If the [Swap](_swap_.swap.md) is not in the right state this call will throw a timeout exception.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tryParams` | [TryParams](../interfaces/_util_timeout_promise_.tryparams.md) | Controls at which stage the exception is thrown. |

**Returns:** *Promise‹string›*

The hash of the transaction that was sent to the blockchain network.

___

###  refund

▸ **refund**(`tryParams`: [TryParams](../interfaces/_util_timeout_promise_.tryparams.md)): *Promise‹string›*

*Defined in [swap.ts:96](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L96)*

Looks for and executes the refund action of this [Swap](_swap_.swap.md).
If the [Swap](_swap_.swap.md) is not in the right state this call will throw a timeout exception.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tryParams` | [TryParams](../interfaces/_util_timeout_promise_.tryparams.md) | Controls at which stage the exception is thrown. |

**Returns:** *Promise‹string›*

The hash of the transaction that was sent to the blockchain network.

___

###  tryExecuteSirenAction

▸ **tryExecuteSirenAction**<**R**>(`actionName`: string, `__namedParameters`: object): *Promise‹AxiosResponse‹R››*

*Defined in [swap.ts:118](https://github.com/comit-network/comit-js-sdk/blob/d75521e/src/swap.ts#L118)*

Low level API for executing actions on the [Swap](_swap_.swap.md).

If you are using any of the above actions ([Swap.redeem](_swap_.swap.md#redeem), etc) you shouldn't need to use this.

**Type parameters:**

▪ **R**

**Parameters:**

▪ **actionName**: *string*

The name of the Siren action you want to execute.

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`maxTimeoutSecs` | number |
`tryIntervalSecs` | number |

**Returns:** *Promise‹AxiosResponse‹R››*

The response from [Cnd](_cnd_cnd_.cnd.md). The actual response depends on the action you executed (hence the type parameter).
