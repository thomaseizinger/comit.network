---
id: "_negotiation_maker_swap_order_matching_"
title: "negotiation/maker/swap_order_matching"
sidebar_label: "negotiation/maker/swap_order_matching"
---

## Index

### Functions

* [areAmountsEqual](_negotiation_maker_swap_order_matching_.md#areamountsequal)
* [assetsMatch](_negotiation_maker_swap_order_matching_.md#assetsmatch)
* [match](_negotiation_maker_swap_order_matching_.md#match)

## Functions

###  areAmountsEqual

▸ **areAmountsEqual**(`asset`: string, `unitAmount`: string, `nominalAmount`: string, `token?`: [Token](../interfaces/_tokens_tokens_.token.md)): *boolean*

*Defined in [negotiation/maker/swap_order_matching.ts:55](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/swap_order_matching.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`asset` | string |
`unitAmount` | string |
`nominalAmount` | string |
`token?` | [Token](../interfaces/_tokens_tokens_.token.md) |

**Returns:** *boolean*

___

###  assetsMatch

▸ **assetsMatch**(`orderAsset`: [OrderAsset](../interfaces/_negotiation_order_.orderasset.md), `swapAsset`: [Asset](../interfaces/_cnd_.asset.md), `swapLedger`: [Ledger](../interfaces/_cnd_.ledger.md)): *boolean*

*Defined in [negotiation/maker/swap_order_matching.ts:20](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/swap_order_matching.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`orderAsset` | [OrderAsset](../interfaces/_negotiation_order_.orderasset.md) |
`swapAsset` | [Asset](../interfaces/_cnd_.asset.md) |
`swapLedger` | [Ledger](../interfaces/_cnd_.ledger.md) |

**Returns:** *boolean*

___

###  match

▸ **match**(`order`: [Order](../interfaces/_negotiation_order_.order.md), `props`: [SwapProperties](../interfaces/_cnd_.swapproperties.md)): *boolean*

*Defined in [negotiation/maker/swap_order_matching.ts:11](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/maker/swap_order_matching.ts#L11)*

Check that a given swap matches the agreed conditions of an accepted order.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`order` | [Order](../interfaces/_negotiation_order_.order.md) | The order to check against the swap. |
`props` | [SwapProperties](../interfaces/_cnd_.swapproperties.md) | The properties of the the swap to check against the order.  |

**Returns:** *boolean*
