---
id: "_ethereum_wallet_.ethereumwallet"
title: "EthereumWallet"
sidebar_label: "EthereumWallet"
---

## Hierarchy

* **EthereumWallet**

## Index

### Constructors

* [constructor](_ethereum_wallet_.ethereumwallet.md#constructor)

### Methods

* [callContract](_ethereum_wallet_.ethereumwallet.md#callcontract)
* [deployContract](_ethereum_wallet_.ethereumwallet.md#deploycontract)
* [getAccount](_ethereum_wallet_.ethereumwallet.md#getaccount)
* [getBalance](_ethereum_wallet_.ethereumwallet.md#getbalance)
* [getErc20Balance](_ethereum_wallet_.ethereumwallet.md#geterc20balance)

## Constructors

###  constructor

\+ **new EthereumWallet**(`jsonRpcUrl`: string, `key?`: SigningKey | HDNode | Arrayish): *[EthereumWallet](_ethereum_wallet_.ethereumwallet.md)*

*Defined in [ethereum_wallet.ts:14](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/ethereum_wallet.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`jsonRpcUrl` | string |
`key?` | SigningKey &#124; HDNode &#124; Arrayish |

**Returns:** *[EthereumWallet](_ethereum_wallet_.ethereumwallet.md)*

## Methods

###  callContract

▸ **callContract**(`data`: string, `contractAddress`: string, `gasLimit`: string): *Promise‹undefined | string›*

*Defined in [ethereum_wallet.ts:71](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/ethereum_wallet.ts#L71)*

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

*Defined in [ethereum_wallet.ts:55](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/ethereum_wallet.ts#L55)*

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

*Defined in [ethereum_wallet.ts:23](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/ethereum_wallet.ts#L23)*

**Returns:** *string*

___

###  getBalance

▸ **getBalance**(): *Promise‹BigNumber‹››*

*Defined in [ethereum_wallet.ts:27](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/ethereum_wallet.ts#L27)*

**Returns:** *Promise‹BigNumber‹››*

___

###  getErc20Balance

▸ **getErc20Balance**(`contractAddress`: string, `decimals?`: undefined | number): *Promise‹BigNumber›*

*Defined in [ethereum_wallet.ts:31](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/ethereum_wallet.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`contractAddress` | string |
`decimals?` | undefined &#124; number |

**Returns:** *Promise‹BigNumber›*
