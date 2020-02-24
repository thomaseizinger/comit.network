---
id: "_cnd_cnd_.cnd"
title: "Cnd"
sidebar_label: "Cnd"
---

Facilitates access to the [COMIT network daemon (cnd)](@link https://github.com/comit-network/comit-rs) REST API.

## Hierarchy

* **Cnd**

## Index

### Constructors

* [constructor](_cnd_cnd_.cnd.md#constructor)

### Methods

* [executeSirenAction](_cnd_cnd_.cnd.md#executesirenaction)
* [fetch](_cnd_cnd_.cnd.md#fetch)
* [getPeerId](_cnd_cnd_.cnd.md#getpeerid)
* [getPeerListenAddresses](_cnd_cnd_.cnd.md#getpeerlistenaddresses)
* [getSwaps](_cnd_cnd_.cnd.md#getswaps)
* [postHalightLightningBitcoinHanEthereumEther](_cnd_cnd_.cnd.md#posthalightlightningbitcoinhanethereumether)
* [postHalightLightningBitcoinHerc20EthereumErc20](_cnd_cnd_.cnd.md#posthalightlightningbitcoinherc20ethereumerc20)
* [postHanEthereumEtherHalightLightningBitcoin](_cnd_cnd_.cnd.md#posthanethereumetherhalightlightningbitcoin)
* [postHerc20EthereumErc20HalightLightningBitcoin](_cnd_cnd_.cnd.md#postherc20ethereumerc20halightlightningbitcoin)
* [postSwap](_cnd_cnd_.cnd.md#postswap)

## Constructors

###  constructor

\+ **new Cnd**(`cndUrl`: string): *[Cnd](_cnd_cnd_.cnd.md)*

*Defined in [cnd/cnd.ts:211](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`cndUrl` | string |

**Returns:** *[Cnd](_cnd_cnd_.cnd.md)*

## Methods

###  executeSirenAction

▸ **executeSirenAction**(`action`: [Action](../interfaces/_cnd_siren_.action.md), `resolver?`: [FieldValueResolverFn](../modules/_cnd_action_to_http_request_.md#fieldvalueresolverfn)): *Promise‹AxiosResponse›*

*Defined in [cnd/cnd.ts:260](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [Action](../interfaces/_cnd_siren_.action.md) |
`resolver?` | [FieldValueResolverFn](../modules/_cnd_action_to_http_request_.md#fieldvalueresolverfn) |

**Returns:** *Promise‹AxiosResponse›*

___

###  fetch

▸ **fetch**<**T**>(`path`: string): *AxiosPromise‹T›*

*Defined in [cnd/cnd.ts:252](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L252)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *AxiosPromise‹T›*

___

###  getPeerId

▸ **getPeerId**(): *Promise‹string›*

*Defined in [cnd/cnd.ts:217](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L217)*

**Returns:** *Promise‹string›*

___

###  getPeerListenAddresses

▸ **getPeerListenAddresses**(): *Promise‹string[]›*

*Defined in [cnd/cnd.ts:225](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L225)*

**Returns:** *Promise‹string[]›*

___

###  getSwaps

▸ **getSwaps**(): *Promise‹[SwapSubEntity](../interfaces/_cnd_cnd_.swapsubentity.md)[]›*

*Defined in [cnd/cnd.ts:246](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L246)*

**Returns:** *Promise‹[SwapSubEntity](../interfaces/_cnd_cnd_.swapsubentity.md)[]›*

___

###  postHalightLightningBitcoinHanEthereumEther

▸ **postHalightLightningBitcoinHanEthereumEther**(`body?`: any): *Promise‹string›*

*Defined in [cnd/cnd.ts:317](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L317)*

Post a swap request on the lightning REST API route of cnd `/swaps/halight/lightning/bitcoin/han/ethereum/ether`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body?` | any | The body to set in the request. The design being not yet finalised it is optional and of type `any` |

**Returns:** *Promise‹string›*

The location of the swap (href) as returned by the REST API in the location header.

___

###  postHalightLightningBitcoinHerc20EthereumErc20

▸ **postHalightLightningBitcoinHerc20EthereumErc20**(`body?`: any): *Promise‹string›*

*Defined in [cnd/cnd.ts:337](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L337)*

Post a swap request on the lightning REST API route of cnd `/swaps/halight/lightning/bitcoin/herc20/ethereum/erc20`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body?` | any | The body to set in the request. The design being not yet finalised it is optional and of type `any` |

**Returns:** *Promise‹string›*

The location of the swap (href) as returned by the REST API in the location header.

___

###  postHanEthereumEtherHalightLightningBitcoin

▸ **postHanEthereumEtherHalightLightningBitcoin**(`body?`: any): *Promise‹string›*

*Defined in [cnd/cnd.ts:277](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L277)*

Post a swap request on the lightning REST API route of cnd `/swaps/han/ethereum/ether/halight/lightning/bitcoin`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body?` | any | The body to set in the request. The design being not yet finalised it is optional and of type `any` |

**Returns:** *Promise‹string›*

The location of the swap (href) as returned by the REST API in the location header.

___

###  postHerc20EthereumErc20HalightLightningBitcoin

▸ **postHerc20EthereumErc20HalightLightningBitcoin**(`body?`: any): *Promise‹string›*

*Defined in [cnd/cnd.ts:297](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L297)*

Post a swap request on the lightning REST API route of cnd `/swaps/herc20/ethereum/erc20/halight/lightning/bitcoin`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body?` | any | The body to set in the request. The design being not yet finalised it is optional and of type `any` |

**Returns:** *Promise‹string›*

The location of the swap (href) as returned by the REST API in the location header.

___

###  postSwap

▸ **postSwap**(`swap`: [SwapRequest](../interfaces/_cnd_cnd_.swaprequest.md)): *Promise‹string›*

*Defined in [cnd/cnd.ts:233](https://github.com/comit-network/comit-js-sdk/blob/95ab111/src/cnd/cnd.ts#L233)*

**Parameters:**

Name | Type |
------ | ------ |
`swap` | [SwapRequest](../interfaces/_cnd_cnd_.swaprequest.md) |

**Returns:** *Promise‹string›*
