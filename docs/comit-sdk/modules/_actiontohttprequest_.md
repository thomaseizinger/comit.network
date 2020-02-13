---
id: "_actiontohttprequest_"
title: "actionToHttpRequest"
sidebar_label: "actionToHttpRequest"
---

## Index

### Type aliases

* [FieldValueResolverFn](_actiontohttprequest_.md#fieldvalueresolverfn)

### Functions

* [actionToHttpRequest](_actiontohttprequest_.md#actiontohttprequest)
* [failIfNotBuffer](_actiontohttprequest_.md#failifnotbuffer)
* [jsonRequestTransformer](_actiontohttprequest_.md#jsonrequesttransformer)
* [resolveAllFieldValues](_actiontohttprequest_.md#resolveallfieldvalues)

## Type aliases

###  FieldValueResolverFn

Ƭ **FieldValueResolverFn**: *function*

*Defined in [actionToHttpRequest.ts:6](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/actionToHttpRequest.ts#L6)*

#### Type declaration:

▸ (`field`: [Field](../interfaces/_siren_.field.md)): *Promise‹string | undefined›*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](../interfaces/_siren_.field.md) |

## Functions

###  actionToHttpRequest

▸ **actionToHttpRequest**(`action`: [Action](../interfaces/_siren_.action.md), `resolver?`: [FieldValueResolverFn](_actiontohttprequest_.md#fieldvalueresolverfn)): *Promise‹AxiosRequestConfig›*

*Defined in [actionToHttpRequest.ts:10](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/actionToHttpRequest.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | [Action](../interfaces/_siren_.action.md) |
`resolver?` | [FieldValueResolverFn](_actiontohttprequest_.md#fieldvalueresolverfn) |

**Returns:** *Promise‹AxiosRequestConfig›*

___

###  failIfNotBuffer

▸ **failIfNotBuffer**(`data`: any, `headers`: any): *any*

*Defined in [actionToHttpRequest.ts:58](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/actionToHttpRequest.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`headers` | any |

**Returns:** *any*

___

###  jsonRequestTransformer

▸ **jsonRequestTransformer**(`data`: any, `headers`: any): *any*

*Defined in [actionToHttpRequest.ts:42](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/actionToHttpRequest.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`headers` | any |

**Returns:** *any*

___

###  resolveAllFieldValues

▸ **resolveAllFieldValues**(`fields`: [Field](../interfaces/_siren_.field.md)[], `resolver?`: [FieldValueResolverFn](_actiontohttprequest_.md#fieldvalueresolverfn)): *Promise‹any›*

*Defined in [actionToHttpRequest.ts:68](https://github.com/comit-network/comit-js-sdk/blob/68ef370/src/actionToHttpRequest.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`fields` | [Field](../interfaces/_siren_.field.md)[] |
`resolver?` | [FieldValueResolverFn](_actiontohttprequest_.md#fieldvalueresolverfn) |

**Returns:** *Promise‹any›*
