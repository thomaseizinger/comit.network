[comit-sdk - v0.10.1](../README.md) › [Globals](../globals.md) › ["siren"](../modules/_siren_.md) › [Field](_siren_.field.md)

# Interface: Field

Fields represent controls inside of actions.

## Hierarchy

* **Field**

## Indexable

* \[ **k**: *string*\]: any

Fields represent controls inside of actions.

## Index

### Properties

* [name](_siren_.field.md#name)
* [title](_siren_.field.md#optional-title)
* [type](_siren_.field.md#optional-type)
* [value](_siren_.field.md#optional-value)

## Properties

###  name

• **name**: *string*

*Defined in [siren.ts:191](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L191)*

A name describing the control. Field names MUST be unique within the set of fields for an action. The behaviour of clients when parsing a Siren document that violates this constraint is undefined.

___

### `Optional` title

• **title**? : *undefined | string*

*Defined in [siren.ts:218](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L218)*

Textual annotation of a field. Clients may use this as a label.

___

### `Optional` type

• **type**? : *"hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "datetime" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file"*

*Defined in [siren.ts:195](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L195)*

The input type of the field. This is a subset of the input types specified by HTML5.

___

### `Optional` value

• **value**? : *string | number | [FieldValueObject](_siren_.fieldvalueobject.md)[]*

*Defined in [siren.ts:222](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/siren.ts#L222)*

A value assigned to the field.  May be a scalar value or a list of value objects.
