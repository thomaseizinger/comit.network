---
id: "_negotiation_taker_negotiator_.negotiator"
title: "Negotiator"
sidebar_label: "Negotiator"
---

## Hierarchy

* **Negotiator**

## Index

### Constructors

* [constructor](_negotiation_taker_negotiator_.negotiator.md#constructor)

### Methods

* [getOrder](_negotiation_taker_negotiator_.negotiator.md#getorder)

## Constructors

###  constructor

\+ **new Negotiator**(`comitClient`: [ComitClient](_comit_client_.comitclient.md), `makerUrl`: string): *[Negotiator](_negotiation_taker_negotiator_.negotiator.md)*

*Defined in [negotiation/taker/negotiator.ts:56](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/taker/negotiator.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`comitClient` | [ComitClient](_comit_client_.comitclient.md) |
`makerUrl` | string |

**Returns:** *[Negotiator](_negotiation_taker_negotiator_.negotiator.md)*

## Methods

###  getOrder

▸ **getOrder**(`criteria`: [MatchingCriteria](../interfaces/_negotiation_taker_order_.matchingcriteria.md)): *Promise‹[Order](_negotiation_taker_order_.order.md)›*

*Defined in [negotiation/taker/negotiator.ts:70](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/negotiation/taker/negotiator.ts#L70)*

Get an order from the maker based on specified criteria. Whatever is returned from the maker is
returned here, even if it does not match the criteria or is invalid. Not all criteria are passed to the maker.
If it is indeed invalid or mismatching it will not be possible to execute the order, however it gives the
opportunity to the lib consumer to know that this maker returns invalid orders and the details of such order.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`criteria` | [MatchingCriteria](../interfaces/_negotiation_taker_order_.matchingcriteria.md) | The criteria of the order to be requested from the maker.  |

**Returns:** *Promise‹[Order](_negotiation_taker_order_.order.md)›*
