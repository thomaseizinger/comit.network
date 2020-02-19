---
id: "_negotiation_taker_maker_client_.makerclient"
title: "MakerClient"
sidebar_label: "MakerClient"
---

## Hierarchy

* **MakerClient**

## Index

### Constructors

* [constructor](_negotiation_taker_maker_client_.makerclient.md#constructor)

### Methods

* [getExecutionParams](_negotiation_taker_maker_client_.makerclient.md#getexecutionparams)
* [getOrderByTradingPair](_negotiation_taker_maker_client_.makerclient.md#getorderbytradingpair)
* [takeOrder](_negotiation_taker_maker_client_.makerclient.md#takeorder)

## Constructors

###  constructor

\+ **new MakerClient**(`makerUrl`: string): *[MakerClient](_negotiation_taker_maker_client_.makerclient.md)*

*Defined in [negotiation/taker/maker_client.ts:5](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/taker/maker_client.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`makerUrl` | string |

**Returns:** *[MakerClient](_negotiation_taker_maker_client_.makerclient.md)*

## Methods

###  getExecutionParams

▸ **getExecutionParams**(`order`: [Order](../interfaces/_negotiation_order_.order.md)): *Promise‹[ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)›*

*Defined in [negotiation/taker/maker_client.ts:13](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/taker/maker_client.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

**Returns:** *Promise‹[ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)›*

___

###  getOrderByTradingPair

▸ **getOrderByTradingPair**(`tradingPair`: string): *Promise‹[Order](../interfaces/_negotiation_order_.order.md)›*

*Defined in [negotiation/taker/maker_client.ts:8](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/taker/maker_client.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`tradingPair` | string |

**Returns:** *Promise‹[Order](../interfaces/_negotiation_order_.order.md)›*

___

###  takeOrder

▸ **takeOrder**(`orderId`: string, `swapId`: string): *Promise‹void›*

*Defined in [negotiation/taker/maker_client.ts:29](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/taker/maker_client.ts#L29)*

Tells the maker that we are taking this order and what is the swap id of the swap request sent for
this order from taker cnd to maker cnd.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The id of the order that is taken. |
`swapId` | string | To facilitate matching between swap requests and orders, the taker first tells their cnd to send a swap request to the maker's cnd, then use the unique swap id, known by both cnds, to tell the maker that it is taking the order and what swap request is being use for this order. While this facilitates the order swap matching logic on the maker's side, the maker still needs to double check the parameters of the swap.  |

**Returns:** *Promise‹void›*
