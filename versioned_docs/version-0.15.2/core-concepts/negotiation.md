---
id: negotiation
title: Negotiation vs. Execution
sidebar_label: Negotiation vs. Execution
---

import UnderConstruction from '../shared/under-construction.md'
import NegotiationPresentation from '../embedded-presentations/negotiation.md'

<UnderConstruction />

This documentation section provides an introduction to negotiation and execution of a trade.

<NegotiationPresentation />

## Negotiation

Prior to the [execution of a swap](atomic-swap-htlc.md) there is a negotiation phase where the two parties involved in the trade agree on what to trade (ledgers, assets) and the amounts.

In trading there are usually two roles:

1. *Maker*: Creates and publishes orders. 
1. *Taker*: Takes the order created by the maker and initiates execution.

The COMIT protocol enables the execution of the trade through the [COMIT network daemon (cnd)](../comit-protocol/comit-protocol-stack.md#comit-network-daemon-cnd).

Currently, in the COMIT protocol, the maker defaults to the cryptographic role of Bob and the taker to the role of Alice for the execution of the swap.

## Execution

The execution of the trade is the actual change of ownership of the digital assets.
The execution can be achieved with concepts like [atomics swaps using HTLCs](atomic-swap-htlc.md).
