---
id: "_negotiation_order_"
title: "negotiation/order"
sidebar_label: "negotiation/order"
---

## Index

### Interfaces

* [Order](../interfaces/_negotiation_order_.order.md)
* [OrderAsset](../interfaces/_negotiation_order_.orderasset.md)

### Variables

* [BITCOIN_DECIMALS](_negotiation_order_.md#const-bitcoin_decimals)
* [ETHER_DECIMALS](_negotiation_order_.md#const-ether_decimals)

### Functions

* [fromNominal](_negotiation_order_.md#fromnominal)
* [isNative](_negotiation_order_.md#isnative)
* [isOrderValid](_negotiation_order_.md#isordervalid)
* [toTradingPair](_negotiation_order_.md#totradingpair)

## Variables

### `Const` BITCOIN_DECIMALS

• **BITCOIN_DECIMALS**: *8* = 8

*Defined in [negotiation/order.ts:58](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/order.ts#L58)*

___

### `Const` ETHER_DECIMALS

• **ETHER_DECIMALS**: *18* = 18

*Defined in [negotiation/order.ts:59](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/order.ts#L59)*

## Functions

###  fromNominal

▸ **fromNominal**(`asset`: string, `nominalAmount`: string, `token?`: [Token](../interfaces/_tokens_tokens_.token.md)): *BigNumber | undefined*

*Defined in [negotiation/order.ts:61](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/order.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`asset` | string |
`nominalAmount` | string |
`token?` | [Token](../interfaces/_tokens_tokens_.token.md) |

**Returns:** *BigNumber | undefined*

___

###  isNative

▸ **isNative**(`__namedParameters`: object): *boolean*

*Defined in [negotiation/order.ts:51](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/order.ts#L51)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`asset` | string |
`ledger` | string |

**Returns:** *boolean*

___

###  isOrderValid

▸ **isOrderValid**(`order`: [Order](../interfaces/_negotiation_order_.order.md)): *boolean*

*Defined in [negotiation/order.ts:17](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/order.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

**Returns:** *boolean*

___

###  toTradingPair

▸ **toTradingPair**(`order`: [Order](../interfaces/_negotiation_order_.order.md)): *string*

*Defined in [negotiation/order.ts:39](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/order.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

**Returns:** *string*
