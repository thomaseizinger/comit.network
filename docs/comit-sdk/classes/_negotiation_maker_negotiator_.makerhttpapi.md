---
id: "_negotiation_maker_negotiator_.makerhttpapi"
title: "MakerHttpApi"
sidebar_label: "MakerHttpApi"
---

## Hierarchy

* **MakerHttpApi**

## Index

### Constructors

* [constructor](_negotiation_maker_negotiator_.makerhttpapi.md#constructor)

### Methods

* [getUrl](_negotiation_maker_negotiator_.makerhttpapi.md#geturl)
* [listen](_negotiation_maker_negotiator_.makerhttpapi.md#listen)

## Constructors

###  constructor

\+ **new MakerHttpApi**(`getOrderById`: function, `getExecutionParams`: function, `takeOrder`: function, `getOrderByTradingPair`: function): *[MakerHttpApi](_negotiation_maker_negotiator_.makerhttpapi.md)*

*Defined in [negotiation/maker_negotiator.ts:120](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/maker_negotiator.ts#L120)*

**Parameters:**

▪ **getOrderById**: *function*

▸ (`orderId`: string): *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`orderId` | string |

▪ **getExecutionParams**: *function*

▸ (): *[ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)*

▪ **takeOrder**: *function*

▸ (`swapId`: string, `order`: [Order](../interfaces/_negotiation_order_.order.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`swapId` | string |
`order` | [Order](../interfaces/_negotiation_order_.order.md) |

▪ **getOrderByTradingPair**: *function*

▸ (`tradingPair`: string): *[Order](../interfaces/_negotiation_order_.order.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`tradingPair` | string |

**Returns:** *[MakerHttpApi](_negotiation_maker_negotiator_.makerhttpapi.md)*

## Methods

###  getUrl

▸ **getUrl**(): *undefined | string*

*Defined in [negotiation/maker_negotiator.ts:195](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/maker_negotiator.ts#L195)*

**Returns:** *undefined | string*

___

###  listen

▸ **listen**(`port`: number, `hostname?`: undefined | string): *Promise‹void›*

*Defined in [negotiation/maker_negotiator.ts:135](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/negotiation/maker_negotiator.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |
`hostname?` | undefined &#124; string |

**Returns:** *Promise‹void›*
