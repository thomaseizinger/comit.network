---
id: "_siren_.action"
title: "Action"
sidebar_label: "Action"
---

Actions show available behaviors an entity exposes.

## Hierarchy

* **Action**

## Indexable

* \[ **k**: *string*\]: any

Actions show available behaviors an entity exposes.

## Index

### Properties

* [class](_siren_.action.md#optional-class)
* [fields](_siren_.action.md#optional-fields)
* [href](_siren_.action.md#href)
* [method](_siren_.action.md#optional-method)
* [name](_siren_.action.md#name)
* [title](_siren_.action.md#optional-title)
* [type](_siren_.action.md#optional-type)

## Properties

### `Optional` class

• **class**? : *string[]*

*Defined in [siren.ts:157](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L157)*

Describes the nature of an action based on the current representation. Possible values are implementation-dependent and should be documented.

___

### `Optional` fields

• **fields**? : *[Field](_siren_.field.md)[]*

*Defined in [siren.ts:181](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L181)*

A collection of fields.

___

###  href

• **href**: *string*

*Defined in [siren.ts:169](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L169)*

The URI of the action.

___

### `Optional` method

• **method**? : *"DELETE" | "GET" | "PATCH" | "POST" | "PUT"*

*Defined in [siren.ts:165](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L165)*

An enumerated attribute mapping to a protocol method. For HTTP, these values may be GET, PUT, POST, DELETE, or PATCH. As new methods are introduced, this list can be extended. If this attribute is omitted, GET should be assumed.

___

###  name

• **name**: *string*

*Defined in [siren.ts:161](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L161)*

A string that identifies the action to be performed. Action names MUST be unique within the set of actions for an entity. The behaviour of clients when parsing a Siren document that violates this constraint is undefined.

___

### `Optional` title

• **title**? : *undefined | string*

*Defined in [siren.ts:173](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L173)*

Descriptive text about the action.

___

### `Optional` type

• **type**? : *undefined | string*

*Defined in [siren.ts:177](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L177)*

The encoding type for the request. When omitted and the fields attribute exists, the default value is `application/x-www-form-urlencoded`.
