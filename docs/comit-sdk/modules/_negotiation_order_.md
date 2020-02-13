[comit-sdk - v0.10.1](../README.md) › [Globals](../globals.md) › ["negotiation/order"](_negotiation_order_.md)

# External module: "negotiation/order"

## Index

### Interfaces

* [Order](../interfaces/_negotiation_order_.order.md)
* [OrderAsset](../interfaces/_negotiation_order_.orderasset.md)

### Variables

* [BITCOIN_DECIMALS](_negotiation_order_.md#const-bitcoin_decimals)
* [ETHER_DECIMALS](_negotiation_order_.md#const-ether_decimals)

### Functions

* [areAmountsEqual](_negotiation_order_.md#areamountsequal)
* [assetOrderToSwap](_negotiation_order_.md#assetordertoswap)
* [fromNominal](_negotiation_order_.md#fromnominal)
* [isNative](_negotiation_order_.md#isnative)
* [orderSwapAssetMatchesForMaker](_negotiation_order_.md#orderswapassetmatchesformaker)
* [orderSwapMatchesForMaker](_negotiation_order_.md#orderswapmatchesformaker)

## Variables

### `Const` BITCOIN_DECIMALS

• **BITCOIN_DECIMALS**: *8* = 8

*Defined in [negotiation/order.ts:127](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/order.ts#L127)*

___

### `Const` ETHER_DECIMALS

• **ETHER_DECIMALS**: *18* = 18

*Defined in [negotiation/order.ts:128](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/order.ts#L128)*

## Functions

###  areAmountsEqual

▸ **areAmountsEqual**(`asset`: string, `unitAmount`: string, `nominalAmount`: string, `token?`: [Token](../interfaces/_tokens_tokens_.token.md)): *boolean*

*Defined in [negotiation/order.ts:112](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/order.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`asset` | string |
`unitAmount` | string |
`nominalAmount` | string |
`token?` | [Token](../interfaces/_tokens_tokens_.token.md) |

**Returns:** *boolean*

___

###  assetOrderToSwap

▸ **assetOrderToSwap**(`orderAsset`: [OrderAsset](../interfaces/_negotiation_order_.orderasset.md)): *[Asset](../interfaces/_cnd_.asset.md) | undefined*

*Defined in [negotiation/order.ts:81](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/order.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`orderAsset` | [OrderAsset](../interfaces/_negotiation_order_.orderasset.md) |

**Returns:** *[Asset](../interfaces/_cnd_.asset.md) | undefined*

___

###  fromNominal

▸ **fromNominal**(`asset`: string, `nominalAmount`: string, `token?`: [Token](../interfaces/_tokens_tokens_.token.md)): *BigNumber | undefined*

*Defined in [negotiation/order.ts:130](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/order.ts#L130)*

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

*Defined in [negotiation/order.ts:39](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/order.ts#L39)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`asset` | string |
`ledger` | string |

**Returns:** *boolean*

___

###  orderSwapAssetMatchesForMaker

▸ **orderSwapAssetMatchesForMaker**(`orderAsset`: [OrderAsset](../interfaces/_negotiation_order_.orderasset.md), `swapAsset`: [Asset](../interfaces/_cnd_.asset.md), `swapLedger`: [Ledger](../interfaces/_cnd_.ledger.md)): *boolean*

*Defined in [negotiation/order.ts:46](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/order.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`orderAsset` | [OrderAsset](../interfaces/_negotiation_order_.orderasset.md) |
`swapAsset` | [Asset](../interfaces/_cnd_.asset.md) |
`swapLedger` | [Ledger](../interfaces/_cnd_.ledger.md) |

**Returns:** *boolean*

___

###  orderSwapMatchesForMaker

▸ **orderSwapMatchesForMaker**(`order`: [Order](../interfaces/_negotiation_order_.order.md), `props`: [SwapProperties](../interfaces/_cnd_.swapproperties.md)): *boolean*

*Defined in [negotiation/order.ts:19](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/order.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |
`props` | [SwapProperties](../interfaces/_cnd_.swapproperties.md) |

**Returns:** *boolean*
