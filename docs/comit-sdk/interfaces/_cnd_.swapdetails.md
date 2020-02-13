---
id: "_cnd_.swapdetails"
title: "SwapDetails"
sidebar_label: "SwapDetails"
---

## Hierarchy

* [Entity](_siren_.entity.md)

  ↳ **SwapDetails**

## Indexable

* \[ **k**: *string*\]: any

## Index

### Properties

* [actions](_cnd_.swapdetails.md#optional-actions)
* [class](_cnd_.swapdetails.md#optional-class)
* [entities](_cnd_.swapdetails.md#optional-entities)
* [links](_cnd_.swapdetails.md#optional-links)
* [properties](_cnd_.swapdetails.md#optional-properties)
* [title](_cnd_.swapdetails.md#optional-title)

## Properties

### `Optional` actions

• **actions**? : *[Action](_siren_.action.md)[]*

*Inherited from [Entity](_siren_.entity.md).[actions](_siren_.entity.md#optional-actions)*

*Defined in [siren.ts:123](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L123)*

A collection of actions; actions show available behaviors an entity exposes.

___

### `Optional` class

• **class**? : *string[]*

*Inherited from [Entity](_siren_.entity.md).[class](_siren_.entity.md#optional-class)*

*Defined in [siren.ts:105](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L105)*

Describes the nature of an entity's content based on the current representation. Possible values are implementation-dependent and should be documented.

___

### `Optional` entities

• **entities**? : *[SubEntity](../modules/_siren_.md#subentity)[]*

*Inherited from [Entity](_siren_.entity.md).[entities](_siren_.entity.md#optional-entities)*

*Defined in [siren.ts:119](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L119)*

A collection of related sub-entities. If a sub-entity contains an href value, it should be treated as an embedded link. Clients may choose to optimistically load embedded links. If no href value exists, the sub-entity is an embedded entity representation that contains all the characteristics of a typical entity. One difference is that a sub-entity MUST contain a rel attribute to describe its relationship to the parent entity.

___

### `Optional` links

• **links**? : *[Link](_siren_.link.md)[]*

*Inherited from [Entity](_siren_.entity.md).[links](_siren_.entity.md#optional-links)*

*Defined in [siren.ts:127](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L127)*

A collection of items that describe navigational links, distinct from entity relationships. Link items should contain a `rel` attribute to describe the relationship and an `href` attribute to point to the target URI. Entities should include a link `rel` to `self`.

___

### `Optional` properties

• **properties**? : *[SwapProperties](_cnd_.swapproperties.md)*

*Overrides [Entity](_siren_.entity.md).[properties](_siren_.entity.md#optional-properties)*

*Defined in [cnd.ts:86](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/cnd.ts#L86)*

___

### `Optional` title

• **title**? : *undefined | string*

*Inherited from [Entity](_siren_.entity.md).[title](_siren_.entity.md#optional-title)*

*Defined in [siren.ts:109](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L109)*

Descriptive text about the entity.
