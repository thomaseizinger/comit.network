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
* [withBitcoinWallet](_comit_client_.comitclient.md#withbitcoinwallet)
* [withEthereumWallet](_comit_client_.comitclient.md#withethereumwallet)

## Constructors

###  constructor

\+ **new ComitClient**(`cnd`: [Cnd](_cnd_.cnd.md)): *[ComitClient](_comit_client_.comitclient.md)*

*Defined in [comit_client.ts:9](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`cnd` | [Cnd](_cnd_.cnd.md) |

**Returns:** *[ComitClient](_comit_client_.comitclient.md)*

## Methods

###  getDoneSwaps

▸ **getDoneSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comit_client.ts:81](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L81)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getNewSwaps

▸ **getNewSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comit_client.ts:58](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L58)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getOngoingSwaps

▸ **getOngoingSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comit_client.ts:72](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L72)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getPeerId

▸ **getPeerId**(): *Promise‹string›*

*Defined in [comit_client.ts:95](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L95)*

**Returns:** *Promise‹string›*

___

###  getPeerListenAddresses

▸ **getPeerListenAddresses**(): *Promise‹string[]›*

*Defined in [comit_client.ts:99](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L99)*

**Returns:** *Promise‹string[]›*

___

###  retrieveSwapById

▸ **retrieveSwapById**(`swapId`: string): *Promise‹[Swap](_swap_.swap.md) | undefined›*

*Defined in [comit_client.ts:103](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`swapId` | string |

**Returns:** *Promise‹[Swap](_swap_.swap.md) | undefined›*

___

###  sendSwap

▸ **sendSwap**(`swapRequest`: [SwapRequest](../interfaces/_cnd_.swaprequest.md)): *Promise‹[Swap](_swap_.swap.md)›*

*Defined in [comit_client.ts:23](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`swapRequest` | [SwapRequest](../interfaces/_cnd_.swaprequest.md) |

**Returns:** *Promise‹[Swap](_swap_.swap.md)›*

___

###  withBitcoinWallet

▸ **withBitcoinWallet**(`bitcoinWallet`: [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md)): *[ComitClient](_comit_client_.comitclient.md)*

*Defined in [comit_client.ts:13](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`bitcoinWallet` | [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md) |

**Returns:** *[ComitClient](_comit_client_.comitclient.md)*

___

###  withEthereumWallet

▸ **withEthereumWallet**(`ethereumWallet`: [EthereumWallet](_ethereum_wallet_.ethereumwallet.md)): *[ComitClient](_comit_client_.comitclient.md)*

*Defined in [comit_client.ts:18](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/comit_client.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`ethereumWallet` | [EthereumWallet](_ethereum_wallet_.ethereumwallet.md) |

**Returns:** *[ComitClient](_comit_client_.comitclient.md)*
