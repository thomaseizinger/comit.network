---
id: "_bitcoin_wallet_.inmemorybitcoinwallet"
title: "InMemoryBitcoinWallet"
sidebar_label: "InMemoryBitcoinWallet"
---

## Hierarchy

* **InMemoryBitcoinWallet**

## Implements

* [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md)

## Index

### Methods

* [broadcastTransaction](_bitcoin_wallet_.inmemorybitcoinwallet.md#broadcasttransaction)
* [getAddress](_bitcoin_wallet_.inmemorybitcoinwallet.md#getaddress)
* [getBalance](_bitcoin_wallet_.inmemorybitcoinwallet.md#getbalance)
* [getFee](_bitcoin_wallet_.inmemorybitcoinwallet.md#getfee)
* [sendToAddress](_bitcoin_wallet_.inmemorybitcoinwallet.md#sendtoaddress)
* [newInstance](_bitcoin_wallet_.inmemorybitcoinwallet.md#static-newinstance)

## Methods

###  broadcastTransaction

▸ **broadcastTransaction**(`transactionHex`: string, `network`: string): *Promise‹string›*

*Implementation of [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md)*

*Defined in [bitcoin_wallet.ts:142](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHex` | string |
`network` | string |

**Returns:** *Promise‹string›*

___

###  getAddress

▸ **getAddress**(): *Promise‹any›*

*Implementation of [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md)*

*Defined in [bitcoin_wallet.ts:116](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L116)*

**Returns:** *Promise‹any›*

___

###  getBalance

▸ **getBalance**(): *Promise‹any›*

*Implementation of [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md)*

*Defined in [bitcoin_wallet.ts:109](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L109)*

**Returns:** *Promise‹any›*

___

###  getFee

▸ **getFee**(): *string*

*Implementation of [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md)*

*Defined in [bitcoin_wallet.ts:155](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L155)*

**Returns:** *string*

___

###  sendToAddress

▸ **sendToAddress**(`address`: string, `satoshis`: number, `network`: string): *Promise‹string›*

*Implementation of [BitcoinWallet](../interfaces/_bitcoin_wallet_.bitcoinwallet.md)*

*Defined in [bitcoin_wallet.ts:121](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`satoshis` | number |
`network` | string |

**Returns:** *Promise‹string›*

___

### `Static` newInstance

▸ **newInstance**(`network`: string, `peerUri`: string, `hdKey`: string): *Promise‹[InMemoryBitcoinWallet](_bitcoin_wallet_.inmemorybitcoinwallet.md)‹››*

*Defined in [bitcoin_wallet.ts:24](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | string |
`peerUri` | string |
`hdKey` | string |

**Returns:** *Promise‹[InMemoryBitcoinWallet](_bitcoin_wallet_.inmemorybitcoinwallet.md)‹››*
