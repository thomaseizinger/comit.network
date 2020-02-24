---
title:  "ERC20, Lightning and COMIT"
author: philipp
author_url: https://github.com/bonomat
author_image_url: https://avatars2.githubusercontent.com/u/224613
tags: [announcement, connect-all-the-blockchains, erc20, lightning, swap]
---

We are aware that the the gossip factory is working overtime since our [short demo at the TenX summit on Friday, 7th of December](https://www.youtube.com/watch?v=OLlFegcEZ8Y):
So yes, it is true, we showed a live demo where we swapped a non-native asset to an asset on a layer-2 network on both mainnets.
In particular, we swapped 10 PAY tokens on Ethereum for 71240 Satoshi on the Lightning Network using COMIT.

<!--truncate-->

In this blog post we want to provide a short update about our latest findings in that regards.
During the implementation of the proof of concept (PoC) we came across some challenges that we thought were worth talking about.


# ERC20

As with our [previous Ether HTLC]({% post_url 2018-06-23-connect-all-the-blockchains %}) we wanted to deploy single use smart contracts to avoid the problems associated with stateful contracts.
Designing and implementing Ether and Bitcoin HTLCs in this way is straightforward because they're native assets.
However, ERC20 tokens are managed by a smart contract which needs to be invoked
to transfer ownership.

For our proof of concept we split the HTLC setup into two
transactions:

1. Contract deployment: <https://etherscan.io/tx/0x3027661dcac1a70e1ee19a20561b7e304698e52a1eae93fa340e2a1af4afd176>
2. ERC20 transfer call: <https://etherscan.io/tx/0xffc8eaa0a1ad8328cf98698af93b3a376f0d407043450c393f23e04b52326aa0>

Unfortunately, we couldn't figure out how to combine these two
steps. The ERC20 `transfer` function uses `msg.sender` for
authentication. However, calling `transfer` from a contract deployment sets
`msg.sender` to the address of the yet to be deployed contract which
obviously has no tokens! 🤦‍♀️

# Lightning ⚡️

Unsurprisingly, using the Lightning Network for an atomic swap also
has its quirks. Although HTLCs are first-class citizens in the [BOLT
specification](https://github.com/lightningnetwork/lightning-rfc), to the best of our knowledge none of the implementations offer direct access to them.
Instead, users create invoices and pay them without knowing about HTLCs; HTLCs are only handled in the background by the Lightning Node.

An atomic swap cannot always be expressed through this model of
invoices and payments. In LND, which is what we used for our PoC,
receiving a payment requires an invoice which requires knowledge of
the secret. As a result, we were only able to do ERC20 to Lightning
and not the other way around. The invoice used in the swap can be
found [below](#Appendix).

We are still looking at ways to address this issue, that's why Lightning will not be part of the initial open source release of COMIT. Yes, you read this correctly: Open Source! 🚀🌕

# Open Source

If you have followed our [GitHub organisation](https://github.com/coblox) you might have seen that we open sourced a couple of projects already.
To mention a few:
* **testcontainers-rs**: Inspired by a library written for Java this tool allows us to start single-use docker containers for our tests. For example, when we run tests against various blockchains: [link](https://github.com/testcontainers/testcontainers-rs/).
* **Bitcoin RPC Rust Client**: A Rust interface to the Bitcoin-Core JSON-RPC API:  [link](https://github.com/coblox/bitcoinrpc-rust-client).
* **Json RPC Rust Client**: A simple JsonRPC APIs client written in Rust: [link](https://github.com/coblox/jsonrpc-rust-client).

Moreover, the core principle of blockchain technology is _"don't trust, verify"_.
But how do you verify closed-source software?
Exactly, that is why we decided to release everything about COMIT open source.
We don't want people to trust that COMIT does what it claims to do.
They should be able to verify each and every step themselves.
Hence, we decided to make ALL the things open source!
We strongly believe in OSS which is another reason of why we want to give something back to the community.

So, why now and not sooner?
Well, from the very beginning, we made the promise to make COMIT an open protocol, its implementation an open source software and all of this free to use for everyone.
However, it took us quite a while to build something that meets our level of quality and security.
We didn't see any value in sharing something with the community if we don't deem it to be ready yet.
That is why **right now** is the perfect time to do it!

# Wait... what?

If you don't yet know what COMIT is: check out [the website](https://comit.network) for more details.
In short: **COMIT is an open protocol facilitating trustless cross-blockchain applications**.
The simplest use case one can imagine is an atomic swap between two currencies as you have seen in our former blog post [here]({% post_url 2018-06-23-connect-all-the-blockchains %}).

# And where?

The code can be found in our GitHub organisation [COMIT-network](https://github.com/comit-network).
For now, it only contains COMIT's reference implementation written in [Rust](https://github.com/comit-network/comit-rs).
The related RFCs will be available in a repository later on this year.
These are also meant to be free and publicly available so that anyone can write an implementation of COMIT in their language of choice.

# How to use it?

### We highly recommend to not run COMIT on any mainnet unless you really know what you are doing!!!😉

For the motivated developer a good starting point is to have a look at our [end-2-end tests](https://github.com/comit-network/comit-rs/tree/master/api_tests/e2e/rfc003).
You can find the code for swapping between BTC-ETH and BTC-ER20 there.
We tried hard to build an amazing API for the comit-node and we are still working on it so please be patient in terms of documentation :)
Please have a look in the [repository](https://github.com/comit-network/comit-rs) for now, examples can be found there.

# What's next?
If you haven't noticed, COMIT is amazing and its usability is enormous.
We will keep improving and extending COMIT, add more features and add support for more currencies.
If you are interested, please feel free to follow our [GitHub repository](https://github.com/comit-network/comit-rs).
Additionally, we will provide more information about crucial design decisions, our roadmap and how-tos for adding additional blockchains in future blog posts.

Cheers - The CoBloX team ✌️
