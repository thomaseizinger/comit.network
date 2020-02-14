---
id: "_comit_client_.comitclient"
title: "ComitClient"
sidebar_label: "ComitClient"
---

## Hierarchy

* **ComitClient**

## Index

### Constructors

* [constructor](_comit_client_.comitclient.md#constructor)

### Methods

* [getDoneSwaps](_comit_client_.comitclient.md#getdoneswaps)
* [getNewSwaps](_comit_client_.comitclient.md#getnewswaps)
* [getOngoingSwaps](_comit_client_.comitclient.md#getongoingswaps)
* [getPeerId](_comit_client_.comitclient.md#getpeerid)
* [getPeerListenAddresses](_comit_client_.comitclient.md#getpeerlistenaddresses)
* [retrieveSwapById](_comit_client_.comitclient.md#retrieveswapbyid)
* [sendSwap](_comit_client_.comitclient.md#sendswap)

## Constructors

###  constructor

\+ **new ComitClient**(`bitcoinWallet`: [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md), `ethereumWallet`: [EthereumWallet](_ethereum_wallet_.ethereumwallet.md), `cnd`: [Cnd](_cnd_.cnd.md)): *[ComitClient](_comit_client_.comitclient.md)*

*Defined in [comit_client.ts:7](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/comit_client.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`bitcoinWallet` | [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md) |
`ethereumWallet` | [EthereumWallet](_ethereum_wallet_.ethereumwallet.md) |
`cnd` | [Cnd](_cnd_.cnd.md) |

**Returns:** *[ComitClient](_comit_client_.comitclient.md)*

## Methods

###  getDoneSwaps

▸ **getDoneSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comit_client.ts:64](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/comit_client.ts#L64)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getNewSwaps

▸ **getNewSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comit_client.ts:41](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/comit_client.ts#L41)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getOngoingSwaps

▸ **getOngoingSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comit_client.ts:55](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/comit_client.ts#L55)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getPeerId

▸ **getPeerId**(): *Promise‹string›*

*Defined in [comit_client.ts:78](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/comit_client.ts#L78)*

**Returns:** *Promise‹string›*

___

###  getPeerListenAddresses

▸ **getPeerListenAddresses**(): *Promise‹string[]›*

*Defined in [comit_client.ts:82](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/comit_client.ts#L82)*

**Returns:** *Promise‹string[]›*

___

###  retrieveSwapById

▸ **retrieveSwapById**(`swapId`: string): *Promise‹[Swap](_swap_.swap.md) | undefined›*

*Defined in [comit_client.ts:86](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/comit_client.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`swapId` | string |

**Returns:** *Promise‹[Swap](_swap_.swap.md) | undefined›*

___

###  sendSwap

▸ **sendSwap**(`swapRequest`: [SwapRequest](../interfaces/_cnd_.swaprequest.md)): *Promise‹[Swap](_swap_.swap.md)›*

*Defined in [comit_client.ts:14](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/comit_client.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`swapRequest` | [SwapRequest](../interfaces/_cnd_.swaprequest.md) |

**Returns:** *Promise‹[Swap](_swap_.swap.md)›*
