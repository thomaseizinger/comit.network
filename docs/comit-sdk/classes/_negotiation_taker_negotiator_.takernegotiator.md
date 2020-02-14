---
id: "_negotiation_taker_negotiator_.takernegotiator"
title: "TakerNegotiator"
sidebar_label: "TakerNegotiator"
---

[comit-sdk - v0.10.1](../index.md) › [Globals](../globals.md) › ["negotiation/taker_negotiator"](../modules/_negotiation_taker_negotiator_.md) › [TakerNegotiator](_negotiation_taker_negotiator_.takernegotiator.md)

## Hierarchy

* **TakerNegotiator**

## Index

### Constructors

* [constructor](_negotiation_taker_negotiator_.takernegotiator.md#constructor)

### Methods

* [getOrderByTradingPair](_negotiation_taker_negotiator_.takernegotiator.md#getorderbytradingpair)
* [takeOrder](_negotiation_taker_negotiator_.takernegotiator.md#takeorder)

## Constructors

###  constructor

\+ **new TakerNegotiator**(`comitClient`: [ComitClient](_comitclient_.comitclient.md), `makerUrl`: string): *[TakerNegotiator](_negotiation_taker_negotiator_.takernegotiator.md)*

*Defined in [negotiation/taker_negotiator.ts:50](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/negotiation/taker_negotiator.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`comitClient` | [ComitClient](_comitclient_.comitclient.md) |
`makerUrl` | string |

**Returns:** *[TakerNegotiator](_negotiation_taker_negotiator_.takernegotiator.md)*

## Methods

###  getOrderByTradingPair

▸ **getOrderByTradingPair**(`tradingPair`: string): *Promise‹[Order](../interfaces/_negotiation_order_.order.md)›*

*Defined in [negotiation/taker_negotiator.ts:57](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/negotiation/taker_negotiator.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`tradingPair` | string |

**Returns:** *Promise‹[Order](../interfaces/_negotiation_order_.order.md)›*

___

###  takeOrder

▸ **takeOrder**(`order`: [Order](../interfaces/_negotiation_order_.order.md)): *Promise‹[Swap](_swap_.swap.md) | undefined›*

*Defined in [negotiation/taker_negotiator.ts:61](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/negotiation/taker_negotiator.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

**Returns:** *Promise‹[Swap](_swap_.swap.md) | undefined›*
