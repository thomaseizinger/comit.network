[comit-sdk - v0.10.1](../README.md) › [Globals](../globals.md) › ["negotiation/taker_negotiator"](../modules/_negotiation_taker_negotiator_.md) › [MakerClient](_negotiation_taker_negotiator_.makerclient.md)

# Class: MakerClient

## Hierarchy

* **MakerClient**

## Index

### Constructors

* [constructor](_negotiation_taker_negotiator_.makerclient.md#constructor)

### Methods

* [getExecutionParams](_negotiation_taker_negotiator_.makerclient.md#getexecutionparams)
* [getOrderByTradingPair](_negotiation_taker_negotiator_.makerclient.md#getorderbytradingpair)
* [takeOrder](_negotiation_taker_negotiator_.makerclient.md#takeorder)

## Constructors

###  constructor

\+ **new MakerClient**(`makerUrl`: string): *[MakerClient](_negotiation_taker_negotiator_.makerclient.md)*

*Defined in [negotiation/taker_negotiator.ts:88](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/taker_negotiator.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`makerUrl` | string |

**Returns:** *[MakerClient](_negotiation_taker_negotiator_.makerclient.md)*

## Methods

###  getExecutionParams

▸ **getExecutionParams**(`order`: [Order](../interfaces/_negotiation_order_.order.md)): *Promise‹any›*

*Defined in [negotiation/taker_negotiator.ts:99](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/taker_negotiator.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

**Returns:** *Promise‹any›*

___

###  getOrderByTradingPair

▸ **getOrderByTradingPair**(`tradingPair`: string): *Promise‹any›*

*Defined in [negotiation/taker_negotiator.ts:94](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/taker_negotiator.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`tradingPair` | string |

**Returns:** *Promise‹any›*

___

###  takeOrder

▸ **takeOrder**(`order`: [Order](../interfaces/_negotiation_order_.order.md), `swapId`: string): *Promise‹any›*

*Defined in [negotiation/taker_negotiator.ts:106](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/taker_negotiator.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |
`swapId` | string |

**Returns:** *Promise‹any›*
