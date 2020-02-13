---
layout: post
title:  "May + June, 2019 - Dev Update"
author: franck
categories: [ ]
image: assets/images/2019-05/dev_update_5.png
featured: false
hidden: false
comments: true
tags: [dev-update]
---

> Alone we can do so little; together we can do so much.
>
> — *[Helen Keller](https://en.wikiquote.org/wiki/Helen_Keller)*

Lately, we have been very busy preparing for the TenX Genesis event that went down mid of June.
All here at CoBloX were very excited to join our colleagues in Singapore for a full week of exchanging knowledge over beers and socializing events.
We also gave a workshop on COMIT there, showcasing what we have achieved right until then.

So, let's jump right into what has happened in COMIT.
First, great progress has been made on the development side.

We have migrated the [comit-rs](https://github.com/comit-network/comit-rs)'s REST API to [siren](https://github.com/kevinswiber/siren/).
Siren is a hypermedia specification for representing entities.
Siren offers structures to communicate information about entities, actions for executing state transitions, and links for client navigation.
It allows the comit-rs API to be self-descriptive.
This is very useful because the client is now being told on how to execute the action provided by comit-rs.
Having a self-descriptive API allows as little client-side logic as possible.
That will make it easier for us to evolve the comit-rs API without doing break changes for clients.

Talking about client, we have also worked very hard in creating a new client for comit-rs.
We have developed [Bobtimus](https://github.com/coblox/bobtimus), a showcase implementation of how the [comit-rs](https://github.com/comit-network/comit-rs/)'s REST API can be used to easily automate the execution of [Basic HTLC Atomic Swaps](https://github.com/comit-network/RFCs/blob/master/RFC-003-SWAP-Basic.md).
While this software is not intended to be used for mainnet, it will hopefully inspire developers to create their own GUI & bots on COMIT.

We have also improved the user experience of our reference GUI, [comit-i](https://github.com/comit-network/comit-i), including the support of atomic swap [refund](https://github.com/comit-network/comit-i/issues/35), when you or the other party changes their mind mid-swap.

In terms of internal software improvements, we have [started](https://github.com/comit-network/comit-rs/issues/606) to move the EVM assembly code away from comit-rs's codebase.
The RFC [now contains](https://github.com/comit-network/RFCs/issues/66) the hex code that implementations of the COMIT protocol are expected to use.
This change brings the following benefits:
  1. UX: Docker/`solc` is no longer needed to compile `comit_node`, making it easier for anyone to install it.
  2. Security: We now advocate building the HTLC by using the provided hex and inserting the data (secret hash, ethereum address) at specific locations instead of doing regex replacements.
  3. DevEx: One less layer of complexity to build a COMIT node as there is no longer the need to deal with Bitcoin Script or EVM assembly.

On the research side, we have started to create a [PoC](https://github.com/coblox/ss-ecdsa-poc) to understand how we can add _scriptless scripts_ (or as we prefer to call them: _conditional signatures_) _atomic swaps_ in COMIT.

Our almost latest recruit, [Daniel](https://www.linkedin.com/in/daniel-karzel/), has [greatly improved](https://github.com/comit-network/comit-rs/issues/919) the setup documentation of our COMIT software suite.
Furthermore, we are really excited that our actual latest recruit, [Tobin](https://github.com/tcharding), was able to join us in Singapore for his first week on the team, already helping for our workshop and presentation.
Talking about recruiting and getting the word about COMIT out there: We are happy to announce that [Philipp](https://twitter.com/bonomat?lang=en) recently made it to Austria to deepen our partnership with [Pedro Moreno-Sanchez](https://twitter.com/pedrorechez), post-doctoral researcher at TU Wien (the technical university of Vienna). 
Philipp gave a talk on COMIT as part of a lecture on crypto-currencies there. 

Finally, it was a great experience to present comit-rs and comit-i to our colleagues at TenX.
Being in a room full of people that do atomic swaps just with a few clicks really makes you feel that something big is coming.
Even though the workshop was based on swapping assets on regtest, one can feel that we are just a jump away from bringing COMIT to testnet and mainnet!


Cheers,

— Franck & Daniel

## Interesting Happenings
- Thomas wrote a [blog post](https://blog.eizinger.io/5835/rust-s-custom-derives-in-a-hexagonal-architecture-incompatible-ideas) on hexagonal architectures.
- Our friend Pedro Moreno-Sanchez and his collaborators have released a paper that lays the foundations for payment channels and atomic swaps on Monero: [DLSAG: Non-Interactive Refund Transactions For Interoperable Payment Channels in Monero](https://eprint.iacr.org/2019/595)
- We all gained at least 5 kilos because we had way too much delicious food in Singapore.

---

If you want to check out in more details the work done, here are the GitHub issues closed in May and June:

- [comit-rs](https://github.com/comit-network/comit-rs/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-05-01..2019-06-30)
- [comit-i](https://github.com/comit-network/comit-i/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-05-01..2019-06-30)
- [bobtimus](https://github.com/coblox/bobtimus/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-05-01..2019-06-30)
