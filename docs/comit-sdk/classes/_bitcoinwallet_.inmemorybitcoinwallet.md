---
id: "_bitcoinwallet_.inmemorybitcoinwallet"
title: "InMemoryBitcoinWallet"
sidebar_label: "InMemoryBitcoinWallet"
---

[comit-sdk - v0.10.1](../index.md) › [Globals](../globals.md) › ["bitcoinWallet"](../modules/_bitcoinwallet_.md) › [InMemoryBitcoinWallet](_bitcoinwallet_.inmemorybitcoinwallet.md)

## Hierarchy

* **InMemoryBitcoinWallet**

## Implements

* [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md)

## Index

### Methods

* [broadcastTransaction](_bitcoinwallet_.inmemorybitcoinwallet.md#broadcasttransaction)
* [getAddress](_bitcoinwallet_.inmemorybitcoinwallet.md#getaddress)
* [getBalance](_bitcoinwallet_.inmemorybitcoinwallet.md#getbalance)
* [getFee](_bitcoinwallet_.inmemorybitcoinwallet.md#getfee)
* [sendToAddress](_bitcoinwallet_.inmemorybitcoinwallet.md#sendtoaddress)
* [newInstance](_bitcoinwallet_.inmemorybitcoinwallet.md#static-newinstance)

## Methods

###  broadcastTransaction

▸ **broadcastTransaction**(`transactionHex`: string, `network`: string): *Promise‹string›*

*Implementation of [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md)*

*Defined in [bitcoinWallet.ts:142](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/bitcoinWallet.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHex` | string |
`network` | string |

**Returns:** *Promise‹string›*

___

###  getAddress

▸ **getAddress**(): *Promise‹any›*

*Implementation of [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md)*

*Defined in [bitcoinWallet.ts:116](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/bitcoinWallet.ts#L116)*

**Returns:** *Promise‹any›*

___

###  getBalance

▸ **getBalance**(): *Promise‹any›*

*Implementation of [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md)*

*Defined in [bitcoinWallet.ts:109](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/bitcoinWallet.ts#L109)*

**Returns:** *Promise‹any›*

___

###  getFee

▸ **getFee**(): *string*

*Implementation of [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md)*

*Defined in [bitcoinWallet.ts:155](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/bitcoinWallet.ts#L155)*

**Returns:** *string*

___

###  sendToAddress

▸ **sendToAddress**(`address`: string, `satoshis`: number, `network`: string): *Promise‹string›*

*Implementation of [BitcoinWallet](../interfaces/_bitcoinwallet_.bitcoinwallet.md)*

*Defined in [bitcoinWallet.ts:121](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/bitcoinWallet.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`satoshis` | number |
`network` | string |

**Returns:** *Promise‹string›*

___

### `Static` newInstance

▸ **newInstance**(`network`: string, `peerUri`: string, `hdKey`: string): *Promise‹[InMemoryBitcoinWallet](_bitcoinwallet_.inmemorybitcoinwallet.md)‹››*

*Defined in [bitcoinWallet.ts:24](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/bitcoinWallet.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | string |
`peerUri` | string |
`hdKey` | string |

**Returns:** *Promise‹[InMemoryBitcoinWallet](_bitcoinwallet_.inmemorybitcoinwallet.md)‹››*
