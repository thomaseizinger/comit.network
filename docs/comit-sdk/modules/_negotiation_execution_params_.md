---
id: "_negotiation_execution_params_"
title: "negotiation/execution_params"
sidebar_label: "negotiation/execution_params"
---

## Index

### Enumerations

* [NetworkType](../enums/_negotiation_execution_params_.networktype.md)

### Interfaces

* [ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)
* [LedgerParams](../interfaces/_negotiation_execution_params_.ledgerparams.md)

### Variables

* [moment](_negotiation_execution_params_.md#moment)

### Functions

* [defaultLedgerParams](_negotiation_execution_params_.md#defaultledgerparams)
* [getNetworkType](_negotiation_execution_params_.md#getnetworktype)
* [isValidExecutionParams](_negotiation_execution_params_.md#isvalidexecutionparams)

## Variables

###  moment

• **moment**: *[moment](_negotiation_execution_params_.md#moment)*

*Defined in [negotiation/execution_params.ts:1](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/execution_params.ts#L1)*

## Functions

###  defaultLedgerParams

▸ **defaultLedgerParams**(): *[LedgerParams](../interfaces/_negotiation_execution_params_.ledgerparams.md)*

*Defined in [negotiation/execution_params.ts:16](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/execution_params.ts#L16)*

**Returns:** *[LedgerParams](../interfaces/_negotiation_execution_params_.ledgerparams.md)*

___

###  getNetworkType

▸ **getNetworkType**(`ledgerParams`: [LedgerParams](../interfaces/_negotiation_execution_params_.ledgerparams.md)): *[NetworkType](../enums/_negotiation_execution_params_.networktype.md)*

*Defined in [negotiation/execution_params.ts:63](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/execution_params.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`ledgerParams` | [LedgerParams](../interfaces/_negotiation_execution_params_.ledgerparams.md) |

**Returns:** *[NetworkType](../enums/_negotiation_execution_params_.networktype.md)*

___

###  isValidExecutionParams

▸ **isValidExecutionParams**(`executionParams`: [ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md)): *boolean*

*Defined in [negotiation/execution_params.ts:27](https://github.com/comit-network/comit-js-sdk/blob/638de0e/src/negotiation/execution_params.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`executionParams` | [ExecutionParams](../interfaces/_negotiation_execution_params_.executionparams.md) |

**Returns:** *boolean*
