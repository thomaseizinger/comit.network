---
id: "_bitcoin_wallet_.bitcoinwallet"
title: "BitcoinWallet"
sidebar_label: "BitcoinWallet"
---

## Hierarchy

* **BitcoinWallet**

## Implemented by

* [InMemoryBitcoinWallet](../classes/_bitcoin_wallet_.inmemorybitcoinwallet.md)
* [MockBitcoinWallet](../classes/___mocks___bitcoin_wallet_.mockbitcoinwallet.md)

## Index

### Methods

* [broadcastTransaction](_bitcoin_wallet_.bitcoinwallet.md#broadcasttransaction)
* [getAddress](_bitcoin_wallet_.bitcoinwallet.md#getaddress)
* [getBalance](_bitcoin_wallet_.bitcoinwallet.md#getbalance)
* [getFee](_bitcoin_wallet_.bitcoinwallet.md#getfee)
* [sendToAddress](_bitcoin_wallet_.bitcoinwallet.md#sendtoaddress)

## Methods

###  broadcastTransaction

▸ **broadcastTransaction**(`transactionHex`: string, `network`: string): *Promise‹string›*

*Defined in [bitcoin_wallet.ts:15](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHex` | string |
`network` | string |

**Returns:** *Promise‹string›*

___

###  getAddress

▸ **getAddress**(): *Promise‹string›*

*Defined in [bitcoin_wallet.ts:5](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L5)*

**Returns:** *Promise‹string›*

___

###  getBalance

▸ **getBalance**(): *Promise‹number›*

*Defined in [bitcoin_wallet.ts:7](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L7)*

**Returns:** *Promise‹number›*

___

###  getFee

▸ **getFee**(): *string*

*Defined in [bitcoin_wallet.ts:20](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L20)*

**Returns:** *string*

___

###  sendToAddress

▸ **sendToAddress**(`address`: string, `satoshis`: number, `network`: string): *Promise‹string›*

*Defined in [bitcoin_wallet.ts:9](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/bitcoin_wallet.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`satoshis` | number |
`network` | string |

**Returns:** *Promise‹string›*
