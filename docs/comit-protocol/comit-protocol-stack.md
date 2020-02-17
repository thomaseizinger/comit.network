---
id: comit-protocol-stack
title: COMIT protocol stack
sidebar_label: COMIT protocol stack
---

⚠️ Disclaimer: This part of the documentation is still under construction!

This documentation section provides an introduction to the COMIT protocol stack.
Concepts specific to the COMIT protocol as well as the protocol design are explained here.

<iframe 
    src="https://docs.google.com/presentation/d/e/2PACX-1vTT1qo6e8itnm76HFFCiM0zs2jBBgQ7hvwSqM91FgCePh9TyoO6gGkRhWgZXxBRIQDcjMZ2B7NZifr8/embed?start=false&loop=false&delayms=3000"
    frameborder="0"
    width="801"
    height="480"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true">
</iframe>

This slide shows the motivation of the COMIT protocol that is to create a truly trustless peer to peer protocol for digital assets.

## Comit Network Daemon (cnd)

The [COMIT network daemon (cnd)](https://github.com/comit-network/comit-rs/) the reference implementation of the COMIT protocol written in Rust.

## COMIT Atomic Swap Protocols

### HAN

**H**TLCs for **A**ssets that are **N**ative to the ledger

### HErc20

**H**TLCs for the **Erc20** asset

### HALight

**H**TLCs for **A**ssets on the **Light**ning ledger

## COMIT Messaging Protocols

The messaging protocol of COMIT is used to exchange information between parties prior to the execution of a [swap](../core-concepts/atomic-swap-htlc.md).

Messaging in [cnd](#comit-network-daemon-cnd) is based on [libp2p](https://libp2p.io/).
