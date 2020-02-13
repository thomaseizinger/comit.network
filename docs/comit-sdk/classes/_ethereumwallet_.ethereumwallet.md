---
id: "_ethereumwallet_.ethereumwallet"
title: "EthereumWallet"
sidebar_label: "EthereumWallet"
---

## Hierarchy

* **EthereumWallet**

## Index

### Constructors

* [constructor](_ethereumwallet_.ethereumwallet.md#constructor)

### Methods

* [callContract](_ethereumwallet_.ethereumwallet.md#callcontract)
* [deployContract](_ethereumwallet_.ethereumwallet.md#deploycontract)
* [getAccount](_ethereumwallet_.ethereumwallet.md#getaccount)
* [getBalance](_ethereumwallet_.ethereumwallet.md#getbalance)
* [getErc20Balance](_ethereumwallet_.ethereumwallet.md#geterc20balance)

## Constructors

###  constructor

\+ **new EthereumWallet**(`jsonRpcUrl`: string, `key?`: SigningKey | HDNode | Arrayish): *[EthereumWallet](_ethereumwallet_.ethereumwallet.md)*

*Defined in [ethereumWallet.ts:14](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/ethereumWallet.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`jsonRpcUrl` | string |
`key?` | SigningKey &#124; HDNode &#124; Arrayish |

**Returns:** *[EthereumWallet](_ethereumwallet_.ethereumwallet.md)*

## Methods

###  callContract

▸ **callContract**(`data`: string, `contractAddress`: string, `gasLimit`: string): *Promise‹undefined | string›*

*Defined in [ethereumWallet.ts:71](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/ethereumWallet.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |
`contractAddress` | string |
`gasLimit` | string |

**Returns:** *Promise‹undefined | string›*

___

###  deployContract

▸ **deployContract**(`data`: string, `amount`: BigNumber, `gasLimit`: string): *Promise‹undefined | string›*

*Defined in [ethereumWallet.ts:55](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/ethereumWallet.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |
`amount` | BigNumber |
`gasLimit` | string |

**Returns:** *Promise‹undefined | string›*

___

###  getAccount

▸ **getAccount**(): *string*

*Defined in [ethereumWallet.ts:23](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/ethereumWallet.ts#L23)*

**Returns:** *string*

___

###  getBalance

▸ **getBalance**(): *Promise‹BigNumber‹››*

*Defined in [ethereumWallet.ts:27](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/ethereumWallet.ts#L27)*

**Returns:** *Promise‹BigNumber‹››*

___

###  getErc20Balance

▸ **getErc20Balance**(`contractAddress`: string, `decimals?`: undefined | number): *Promise‹BigNumber›*

*Defined in [ethereumWallet.ts:31](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/ethereumWallet.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`contractAddress` | string |
`decimals?` | undefined &#124; number |

**Returns:** *Promise‹BigNumber›*
