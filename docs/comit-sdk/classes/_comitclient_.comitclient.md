[comit-sdk - v0.10.1](../README.md) › [Globals](../globals.md) › ["comitClient"](../modules/_comitclient_.md) › [ComitClient](_comitclient_.comitclient.md)

# Class: ComitClient

## Hierarchy

* **ComitClient**

## Index

### Constructors

* [constructor](_comitclient_.comitclient.md#constructor)

### Methods

* [getDoneSwaps](_comitclient_.comitclient.md#getdoneswaps)
* [getNewSwaps](_comitclient_.comitclient.md#getnewswaps)
* [getOngoingSwaps](_comitclient_.comitclient.md#getongoingswaps)
* [getPeerId](_comitclient_.comitclient.md#getpeerid)
* [getPeerListenAddresses](_comitclient_.comitclient.md#getpeerlistenaddresses)
* [retrieveSwapById](_comitclient_.comitclient.md#retrieveswapbyid)
* [sendSwap](_comitclient_.comitclient.md#sendswap)

## Constructors

###  constructor

\+ **new ComitClient**(`bitcoinWallet`: [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md), `ethereumWallet`: [EthereumWallet](_ethereumwallet_.ethereumwallet.md), `cnd`: [Cnd](_cnd_.cnd.md)): *[ComitClient](_comitclient_.comitclient.md)*

*Defined in [comitClient.ts:7](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/comitClient.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`bitcoinWallet` | [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md) |
`ethereumWallet` | [EthereumWallet](_ethereumwallet_.ethereumwallet.md) |
`cnd` | [Cnd](_cnd_.cnd.md) |

**Returns:** *[ComitClient](_comitclient_.comitclient.md)*

## Methods

###  getDoneSwaps

▸ **getDoneSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comitClient.ts:64](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/comitClient.ts#L64)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getNewSwaps

▸ **getNewSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comitClient.ts:41](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/comitClient.ts#L41)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getOngoingSwaps

▸ **getOngoingSwaps**(): *Promise‹[Swap](_swap_.swap.md)[]›*

*Defined in [comitClient.ts:55](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/comitClient.ts#L55)*

**Returns:** *Promise‹[Swap](_swap_.swap.md)[]›*

___

###  getPeerId

▸ **getPeerId**(): *Promise‹string›*

*Defined in [comitClient.ts:78](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/comitClient.ts#L78)*

**Returns:** *Promise‹string›*

___

###  getPeerListenAddresses

▸ **getPeerListenAddresses**(): *Promise‹string[]›*

*Defined in [comitClient.ts:82](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/comitClient.ts#L82)*

**Returns:** *Promise‹string[]›*

___

###  retrieveSwapById

▸ **retrieveSwapById**(`swapId`: string): *Promise‹[Swap](_swap_.swap.md) | undefined›*

*Defined in [comitClient.ts:86](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/comitClient.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`swapId` | string |

**Returns:** *Promise‹[Swap](_swap_.swap.md) | undefined›*

___

###  sendSwap

▸ **sendSwap**(`swapRequest`: [SwapRequest](../interfaces/_cnd_.swaprequest.md)): *Promise‹[Swap](_swap_.swap.md)›*

*Defined in [comitClient.ts:14](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/comitClient.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`swapRequest` | [SwapRequest](../interfaces/_cnd_.swaprequest.md) |

**Returns:** *Promise‹[Swap](_swap_.swap.md)›*
