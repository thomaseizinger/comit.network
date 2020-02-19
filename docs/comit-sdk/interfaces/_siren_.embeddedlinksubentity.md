---
id: "_siren_.embeddedlinksubentity"
title: "EmbeddedLinkSubEntity"
sidebar_label: "EmbeddedLinkSubEntity"
---

## Hierarchy

* **EmbeddedLinkSubEntity**

## Indexable

* \[ **k**: *string*\]: any

## Index

### Properties

* [class](_siren_.embeddedlinksubentity.md#optional-class)
* [href](_siren_.embeddedlinksubentity.md#href)
* [rel](_siren_.embeddedlinksubentity.md#rel)
* [title](_siren_.embeddedlinksubentity.md#optional-title)
* [type](_siren_.embeddedlinksubentity.md#optional-type)

## Properties

### `Optional` class

• **class**? : *string[]*

*Defined in [siren.ts:134](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/siren.ts#L134)*

Describes the nature of an entity's content based on the current representation. Possible values are implementation-dependent and should be documented.

___

###  href

• **href**: *string*

*Defined in [siren.ts:142](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/siren.ts#L142)*

The URI of the linked sub-entity.

___

###  rel

• **rel**: *[[RelValue](../modules/_siren_.md#relvalue), string]*

*Defined in [siren.ts:138](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/siren.ts#L138)*

Defines the relationship of the sub-entity to its parent, per Web Linking (RFC5899).

___

### `Optional` title

• **title**? : *undefined | string*

*Defined in [siren.ts:147](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/siren.ts#L147)*

Descriptive text about the entity.

___

### `Optional` type

• **type**? : *[MediaType](../modules/_siren_.md#mediatype)*

*Defined in [siren.ts:143](https://github.com/comit-network/comit-js-sdk/blob/d186ad0/src/siren.ts#L143)*
