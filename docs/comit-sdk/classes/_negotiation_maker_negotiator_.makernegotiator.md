---
id: "_negotiation_maker_negotiator_.makernegotiator"
title: "MakerNegotiator"
sidebar_label: "MakerNegotiator"
---

## Hierarchy

* **MakerNegotiator**

## Index

### Constructors

* [constructor](_negotiation_maker_negotiator_.makernegotiator.md#constructor)

### Methods

* [addOrder](_negotiation_maker_negotiator_.makernegotiator.md#addorder)
* [getExecutionParams](_negotiation_maker_negotiator_.makernegotiator.md#getexecutionparams)
* [getOrderById](_negotiation_maker_negotiator_.makernegotiator.md#getorderbyid)
* [getOrderByTradingPair](_negotiation_maker_negotiator_.makernegotiator.md#getorderbytradingpair)
* [getUrl](_negotiation_maker_negotiator_.makernegotiator.md#geturl)
* [listen](_negotiation_maker_negotiator_.makernegotiator.md#listen)
* [takeOrder](_negotiation_maker_negotiator_.makernegotiator.md#takeorder)

## Constructors

###  constructor

\+ **new MakerNegotiator**(`comitClient`: [ComitClient](_comit_client_.comitclient.md), `executionParams`: [ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md), `tryParams`: [TryParams](../interfaces/_timeout_promise_.tryparams.md)): *[MakerNegotiator](_negotiation_maker_negotiator_.makernegotiator.md)*

*Defined in [negotiation/maker_negotiator.ts:14](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/maker_negotiator.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`comitClient` | [ComitClient](_comit_client_.comitclient.md) |
`executionParams` | [ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md) |
`tryParams` | [TryParams](../interfaces/_timeout_promise_.tryparams.md) |

**Returns:** *[MakerNegotiator](_negotiation_maker_negotiator_.makernegotiator.md)*

## Methods

###  addOrder

▸ **addOrder**(`order`: [Order](../interfaces/_negotiation_order_.order.md)): *void*

*Defined in [negotiation/maker_negotiator.ts:32](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/maker_negotiator.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

**Returns:** *void*

___

###  getExecutionParams

▸ **getExecutionParams**(): *[ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)*

*Defined in [negotiation/maker_negotiator.ts:46](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/maker_negotiator.ts#L46)*

**Returns:** *[ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)*

___

###  getOrderById

▸ **getOrderById**(`orderId`: string): *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

*Defined in [negotiation/maker_negotiator.ts:42](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/maker_negotiator.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`orderId` | string |

**Returns:** *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

___

###  getOrderByTradingPair

▸ **getOrderByTradingPair**(`tradingPair`: string): *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

*Defined in [negotiation/maker_negotiator.ts:38](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/maker_negotiator.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`tradingPair` | string |

**Returns:** *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

___

###  getUrl

▸ **getUrl**(): *string | undefined*

*Defined in [negotiation/maker_negotiator.ts:62](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/maker_negotiator.ts#L62)*

**Returns:** *string | undefined*

___

###  listen

▸ **listen**(`port`: number, `hostname?`: undefined | string): *Promise‹void›*

*Defined in [negotiation/maker_negotiator.ts:66](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/maker_negotiator.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`hostname?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

###  takeOrder

▸ **takeOrder**(`swapId`: string, `order`: [Order](../interfaces/_negotiation_order_.order.md)): *void*

*Defined in [negotiation/maker_negotiator.ts:50](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/maker_negotiator.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`swapId` | string |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

**Returns:** *void*
