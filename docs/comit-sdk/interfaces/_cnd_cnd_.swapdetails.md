---
id: "_cnd_cnd_.swapdetails"
title: "SwapDetails"
sidebar_label: "SwapDetails"
---

## Hierarchy

* [Entity](_cnd_siren_.entity.md)

  ↳ **SwapDetails**

## Indexable

* \[ **k**: *string*\]: any

## Index

### Properties

* [actions](_cnd_cnd_.swapdetails.md#optional-actions)
* [class](_cnd_cnd_.swapdetails.md#optional-class)
* [entities](_cnd_cnd_.swapdetails.md#optional-entities)
* [links](_cnd_cnd_.swapdetails.md#optional-links)
* [properties](_cnd_cnd_.swapdetails.md#optional-properties)
* [title](_cnd_cnd_.swapdetails.md#optional-title)

## Properties

### `Optional` actions

• **actions**? : *[Action](_cnd_siren_.action.md)[]*

*Inherited from [Entity](_cnd_siren_.entity.md).[actions](_cnd_siren_.entity.md#optional-actions)*

*Defined in [src/cnd/siren.ts:123](https://github.com/comit-network/comit-js-sdk/blob/ee6360f/src/cnd/siren.ts#L123)*

A collection of actions; actions show available behaviors an entity exposes.

___

### `Optional` class

• **class**? : *string[]*

*Inherited from [Entity](_cnd_siren_.entity.md).[class](_cnd_siren_.entity.md#optional-class)*

*Defined in [src/cnd/siren.ts:105](https://github.com/comit-network/comit-js-sdk/blob/ee6360f/src/cnd/siren.ts#L105)*

Describes the nature of an entity's content based on the current representation. Possible values are implementation-dependent and should be documented.

___

### `Optional` entities

• **entities**? : *[SubEntity](../modules/_cnd_siren_.md#subentity)[]*

*Inherited from [Entity](_cnd_siren_.entity.md).[entities](_cnd_siren_.entity.md#optional-entities)*

*Defined in [src/cnd/siren.ts:119](https://github.com/comit-network/comit-js-sdk/blob/ee6360f/src/cnd/siren.ts#L119)*

A collection of related sub-entities. If a sub-entity contains an href value, it should be treated as an embedded link. Clients may choose to optimistically load embedded links. If no href value exists, the sub-entity is an embedded entity representation that contains all the characteristics of a typical entity. One difference is that a sub-entity MUST contain a rel attribute to describe its relationship to the parent entity.

___

### `Optional` links

• **links**? : *[Link](_cnd_siren_.link.md)[]*

*Inherited from [Entity](_cnd_siren_.entity.md).[links](_cnd_siren_.entity.md#optional-links)*

*Defined in [src/cnd/siren.ts:127](https://github.com/comit-network/comit-js-sdk/blob/ee6360f/src/cnd/siren.ts#L127)*

A collection of items that describe navigational links, distinct from entity relationships. Link items should contain a `rel` attribute to describe the relationship and an `href` attribute to point to the target URI. Entities should include a link `rel` to `self`.

___

### `Optional` properties

• **properties**? : *[SwapProperties](_cnd_cnd_.swapproperties.md)*

*Overrides [Entity](_cnd_siren_.entity.md).[properties](_cnd_siren_.entity.md#optional-properties)*

*Defined in [src/cnd/cnd.ts:196](https://github.com/comit-network/comit-js-sdk/blob/ee6360f/src/cnd/cnd.ts#L196)*

___

### `Optional` title

• **title**? : *undefined | string*

*Inherited from [Entity](_cnd_siren_.entity.md).[title](_cnd_siren_.entity.md#optional-title)*

*Defined in [src/cnd/siren.ts:109](https://github.com/comit-network/comit-js-sdk/blob/ee6360f/src/cnd/siren.ts#L109)*

Descriptive text about the entity.
