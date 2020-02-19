---
id: "_negotiation_maker_negotiator_.negotiator"
title: "Negotiator"
sidebar_label: "Negotiator"
---

## Hierarchy

* **Negotiator**

## Index

### Constructors

* [constructor](_negotiation_maker_negotiator_.negotiator.md#constructor)

### Methods

* [addOrder](_negotiation_maker_negotiator_.negotiator.md#addorder)
* [getExecutionParams](_negotiation_maker_negotiator_.negotiator.md#getexecutionparams)
* [getOrderById](_negotiation_maker_negotiator_.negotiator.md#getorderbyid)
* [getOrderByTradingPair](_negotiation_maker_negotiator_.negotiator.md#getorderbytradingpair)
* [getUrl](_negotiation_maker_negotiator_.negotiator.md#geturl)
* [listen](_negotiation_maker_negotiator_.negotiator.md#listen)
* [takeOrder](_negotiation_maker_negotiator_.negotiator.md#takeorder)

## Constructors

###  constructor

\+ **new Negotiator**(`comitClient`: [ComitClient](_comit_client_.comitclient.md), `executionParams`: [ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md), `tryParams`: [TryParams](../interfaces/_timeout_promise_.tryparams.md)): *[Negotiator](_negotiation_maker_negotiator_.negotiator.md)*

*Defined in [negotiation/maker/negotiator.ts:15](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/negotiator.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`comitClient` | [ComitClient](_comit_client_.comitclient.md) |
`executionParams` | [ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md) |
`tryParams` | [TryParams](../interfaces/_timeout_promise_.tryparams.md) |

**Returns:** *[Negotiator](_negotiation_maker_negotiator_.negotiator.md)*

## Methods

###  addOrder

▸ **addOrder**(`order`: [Order](../interfaces/_negotiation_order_.order.md)): *boolean*

*Defined in [negotiation/maker/negotiator.ts:38](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/negotiator.ts#L38)*

add an Order to the order book.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) | the order to add.  |

**Returns:** *boolean*

true if the order parameters are valid and were successfully added to the order book, false otherwise.

___

###  getExecutionParams

▸ **getExecutionParams**(): *[ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)*

*Defined in [negotiation/maker/negotiator.ts:56](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/negotiator.ts#L56)*

**Returns:** *[ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)*

___

###  getOrderById

▸ **getOrderById**(`orderId`: string): *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

*Defined in [negotiation/maker/negotiator.ts:52](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/negotiator.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`orderId` | string |

**Returns:** *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

___

###  getOrderByTradingPair

▸ **getOrderByTradingPair**(`tradingPair`: string): *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

*Defined in [negotiation/maker/negotiator.ts:48](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/negotiator.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`tradingPair` | string |

**Returns:** *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

___

###  getUrl

▸ **getUrl**(): *string | undefined*

*Defined in [negotiation/maker/negotiator.ts:72](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/negotiator.ts#L72)*

**Returns:** *string | undefined*

___

###  listen

▸ **listen**(`port`: number, `hostname?`: undefined | string): *Promise‹void›*

*Defined in [negotiation/maker/negotiator.ts:76](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/negotiator.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`hostname?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

###  takeOrder

▸ **takeOrder**(`swapId`: string, `order`: [Order](../interfaces/_negotiation_order_.order.md)): *void*

*Defined in [negotiation/maker/negotiator.ts:60](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/negotiator.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`swapId` | string |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

**Returns:** *void*
