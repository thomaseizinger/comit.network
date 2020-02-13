[comit-sdk - v0.10.1](../README.md) › [Globals](../globals.md) › ["bitcoinWallet"](../modules/_bitcoinwallet_.md) › [BitcoinWallet](_bitcoinwallet_.bitcoinwallet.md)

# Interface: BitcoinWallet

## Hierarchy

* **BitcoinWallet**

## Implemented by

* [InMemoryBitcoinWallet](../classes/_bitcoinwallet_.inmemorybitcoinwallet.md)

## Index

### Methods

* [broadcastTransaction](_bitcoinwallet_.bitcoinwallet.md#broadcasttransaction)
* [getAddress](_bitcoinwallet_.bitcoinwallet.md#getaddress)
* [getBalance](_bitcoinwallet_.bitcoinwallet.md#getbalance)
* [getFee](_bitcoinwallet_.bitcoinwallet.md#getfee)
* [sendToAddress](_bitcoinwallet_.bitcoinwallet.md#sendtoaddress)

## Methods

###  broadcastTransaction

▸ **broadcastTransaction**(`transactionHex`: string, `network`: string): *Promise‹string›*

*Defined in [bitcoinWallet.ts:15](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/bitcoinWallet.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`transactionHex` | string |
`network` | string |

**Returns:** *Promise‹string›*

___

###  getAddress

▸ **getAddress**(): *Promise‹string›*

*Defined in [bitcoinWallet.ts:5](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/bitcoinWallet.ts#L5)*

**Returns:** *Promise‹string›*

___

###  getBalance

▸ **getBalance**(): *Promise‹number›*

*Defined in [bitcoinWallet.ts:7](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/bitcoinWallet.ts#L7)*

**Returns:** *Promise‹number›*

___

###  getFee

▸ **getFee**(): *string*

*Defined in [bitcoinWallet.ts:20](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/bitcoinWallet.ts#L20)*

**Returns:** *string*

___

###  sendToAddress

▸ **sendToAddress**(`address`: string, `satoshis`: number, `network`: string): *Promise‹string›*

*Defined in [bitcoinWallet.ts:9](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/bitcoinWallet.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`satoshis` | number |
`network` | string |

**Returns:** *Promise‹string›*
