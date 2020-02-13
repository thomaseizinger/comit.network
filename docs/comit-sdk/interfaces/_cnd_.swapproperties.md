---
id: "_cnd_.swapproperties"
title: "SwapProperties"
sidebar_label: "SwapProperties"
---

## Hierarchy

* **SwapProperties**

## Indexable

* \[ **k**: *string*\]: any

## Index

### Properties

* [counterparty](_cnd_.swapproperties.md#counterparty)
* [id](_cnd_.swapproperties.md#id)
* [parameters](_cnd_.swapproperties.md#parameters)
* [protocol](_cnd_.swapproperties.md#protocol)
* [role](_cnd_.swapproperties.md#role)
* [state](_cnd_.swapproperties.md#optional-state)
* [status](_cnd_.swapproperties.md#status)

## Properties

###  counterparty

• **counterparty**: *string*

*Defined in [cnd.ts:101](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/cnd.ts#L101)*

The peer-id of the counterparty of this swap.

___

###  id

• **id**: *string*

*Defined in [cnd.ts:97](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/cnd.ts#L97)*

The id of the swap.

___

###  parameters

• **parameters**: *object*

*Defined in [cnd.ts:117](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/cnd.ts#L117)*

The parameters of this swap.

#### Type declaration:

* \[ **k**: *string*\]: any

* **alpha_asset**: *[Asset](_cnd_.asset.md)*

* **alpha_ledger**: *[Ledger](_cnd_.ledger.md)*

* **beta_asset**: *[Asset](_cnd_.asset.md)*

* **beta_ledger**: *[Ledger](_cnd_.ledger.md)*

___

###  protocol

• **protocol**: *string*

*Defined in [cnd.ts:109](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/cnd.ts#L109)*

The cryptographic protocol that is employed in this swap.

___

###  role

• **role**: *"Alice" | "Bob"*

*Defined in [cnd.ts:105](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/cnd.ts#L105)*

The role in which you are participating in this swap.

___

### `Optional` state

• **state**? : *undefined | object*

*Defined in [cnd.ts:127](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/cnd.ts#L127)*

The detailed state of the swap.

___

###  status

• **status**: *"IN_PROGRESS" | "SWAPPED" | "NOT_SWAPPED" | "INTERNAL_FAILURE"*

*Defined in [cnd.ts:113](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/cnd.ts#L113)*

The status this swap is currently in.
