---
id: "_timeout_promise_"
title: "timeout_promise"
sidebar_label: "timeout_promise"
---

[comit-sdk - v0.10.1](../index.md) › [Globals](../globals.md) › ["timeout_promise"](_timeout_promise_.md)

## Index

### Interfaces

* [TryParams](../interfaces/_timeout_promise_.tryparams.md)

### Functions

* [sleep](_timeout_promise_.md#sleep)
* [timeoutPromise](_timeout_promise_.md#timeoutpromise)

## Functions

###  sleep

▸ **sleep**(`ms`: number): *Promise‹unknown›*

*Defined in [timeout_promise.ts:17](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/timeout_promise.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹unknown›*

___

###  timeoutPromise

▸ **timeoutPromise**<**T**>(`ms`: number, `promise`: Promise‹T›): *Promise‹T›*

*Defined in [timeout_promise.ts:6](https://github.com/comit-network/comit-js-sdk/blob/9af15bb/src/timeout_promise.ts#L6)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |
`promise` | Promise‹T› |

**Returns:** *Promise‹T›*
