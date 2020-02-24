---
title:  "January, 2019 - Dev Update"
author: franck
author_url: https://github.com/d4nte
author_image_url: https://avatars1.githubusercontent.com/u/300805?s=400&v=4
tags: [dev-update]
---

*New year, new resolutions.*

After our [first swap](../../../2018/06/23/connect-all-the-blockchains.html) and making the whole [COMIT code open source](../../../2018/12/12/erc20-lightning-and-COMIT.html) we thought you would enjoy regular updates of what is happening at CoBloX.
Hence we will be starting a series of *dev update* posts, published *roughly* monthly, containing a summary of the latest COMIT advancements.

<!--truncate-->

If you simply cannot wait for the *dev update*, feel free to check out our [scrum board](https://waffle.io/comit-network/comit-rs) and [GitHub](https://github.com/coblox/) [organisations](https://github.com/comit-network/).

During the holidays, some of us were still coding and mainly focused in completing the code for ERC20<->BTC and ETH<->BTC swaps.

![alt text]({{ site.github.url }}/assets/images/2019-01/erc20tobtc720p.gif "ER20 to BTC atomic swap")

In January, we finalised our first [RFCs drafts](https://github.com/comit-network/RFCs/), this is a milestone for the COMIT protocol as a lot of work has happened since we released the first [COMIT white paper](https://arxiv.org/pdf/1810.02174).
We are aiming to provide a comprehensive and clear documentation on how this open protocol operates.
Feel free to provide feedback by commenting on the relevant RFCs [tracking issues](https://github.com/comit-network/RFCs/labels/tracking-issue).

Part of the discussion to define COMIT protocols was the [option problem](https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-December/001752.html) brought by a basic HTLC atomic swap.
Lloyd wrote a response on the [Lightning mailing list](https://lists.linuxfoundation.org/pipermail/lightning-dev/2019-January/001798.html) about the American Swap Option.

We also had our first major external contribution with the modularising of our JavaScript test suite.
Thank you [elpiel](https://github.com/elpiel)!

## Interesting reads from the team
- [Why BitTorrent Mattered](https://medium.com/@simonhmorris/why-bittorrent-mattered-bittorrent-lessons-for-crypto-1-of-4-fa3c6fcef488)
- [MIT DCI's Cryptocurrency Research Review #1](https://mitcryptocurrencyresearch.substack.com/p/mit-dcis-cryptocurrency-research?utm_source=substack&utm_medium=email&utm_content=share#)
- [Comparison of Block Expectation Time for Various Consensus Algorithms](http://ric.zntu.edu.ua/article/view/154595/154190)
- [Scalable Funding of Bitcoin Micropayment Channel Networks](https://www.tik.ee.ethz.ch/file/a20a865ce40d40c8f942cf206a7cba96/Scalable_Funding_Of_Blockchain_Micropayment_Networks%20(1).pdf)

----

Here is the list of items closed by sprint (public repositories only):

##### External Contributors - Thank you!
- [(616)](https://github.com/comit-network/comit-rs/pull/616) [its-me-yours-truly](https://github.com/its-me-yours-truly) fix: ~ in default config dir is not shell expanded
- [(613)](https://github.com/comit-network/comit-rs/pull/613) [elpiel](https://github.com/elpiel) Issue #575 split test_lib.js
- [(564)](https://github.com/comit-network/comit-rs/pull/564) [rex4539](https://github.com/rex4539) Fix typos

##### Sprint 7 (23 to 29 Jan)

- [(20)](https://github.com/comit-network/RFCs/pull/20) Add Tracking issues links
- [(25)](https://github.com/comit-network/RFCs/pull/25) Minor changes
- [(439)](https://github.com/comit-network/comit-rs/issues/439) Refactor headers in BAM to use bam::Header struct from comit-rs
- [(476)](https://github.com/comit-network/comit-rs/issues/476) Validation of ERC20 funding transaction
- [(497)](https://github.com/comit-network/comit-rs/issues/497) ⚗️ More (debug) information returned by HTTP API GET swap/:id
- [(563)](https://github.com/comit-network/comit-rs/issues/563) Use new LQS Parameter to retrieve ETH/ERC20 Refund/Redeem tx
- [(646)](https://github.com/comit-network/comit-rs/issues/646) Cleanup Bitcoin LQS
- [(654)](https://github.com/comit-network/comit-rs/issues/654) ⚗️ Decentralised orderbook - tech investigation
- [(666)](https://github.com/comit-network/comit-rs/issues/666) ⚗️How to realize same chain trades on Bitcoin 👹
- [(673)](https://github.com/comit-network/comit-rs/issues/673) Make actions returned from HTTP API self-descriptive
- [(690)](https://github.com/comit-network/comit-rs/issues/690) Logs repeat themselves
- [(702)](https://github.com/comit-network/comit-rs/issues/702) Maybe not print settings because of private keys?...
- [(709)](https://github.com/comit-network/comit-rs/issues/709) decide whether we want to serialize this directly...
- [(713)](https://github.com/comit-network/comit-rs/issues/713) replace with AtomicU32 once stable https://doc.rust-lang.org/std/sync/atomic/struct.AtomicU32.html...
- [(715)](https://github.com/comit-network/comit-rs/issues/715) set derivation path for Ethereum to m/44'/60'/a'/0/n, see #291...

##### Sprint 6 (16 to 22 Jan)

- [(32)](https://github.com/comit-network/comit-rs/issues/32) ⚗️ Test coverage in Travis
- [(412)](https://github.com/comit-network/comit-rs/issues/412) Allow filtering of "log" in Ethereum blocks
- [(494)](https://github.com/comit-network/comit-rs/issues/494) ⚗️ Actions returned from HTTP should be self-descriptive
- [(596)](https://github.com/comit-network/comit-rs/issues/596) `cargo make e2e something_that_doesnt_exist` behaves unexpectedly
- [(617)](https://github.com/comit-network/comit-rs/pull/617) Update testcontainers to use parity 2.1.3 across the board
- [(637)](https://github.com/comit-network/comit-rs/issues/637) ⚗️ COMIT nodes need an identifying key
- [(648)](https://github.com/comit-network/comit-rs/pull/648) Replacement PR for #616
- [(676)](https://github.com/comit-network/comit-rs/issues/676) Remove IsEmpty trait
- [(7)](https://github.com/comit-network/RFCs/issues/7) [RFC-003] Write up current atomic swap protocol
- [(8)](https://github.com/comit-network/RFCs/issues/8) Move this repository to the COMIT organization

##### Sprint 5 (9 to 15 Jan)

- [(12)](https://github.com/coblox/jsonrpc-rust-client/pull/12) Update jsonrpc requirement from 8 to 9
- [(13)](https://github.com/coblox/jsonrpc-rust-client/pull/13) Update jsonrpc-http-server requirement from 8 to 9
- [(14)](https://github.com/coblox/jsonrpc-rust-client/pull/14) Update env_logger requirement from 0.5 to 0.6
- [(26)](https://github.com/coblox/bitcoinrpc-rust-client/pull/26) implement getbalance rpc call
- [(304)](https://github.com/comit-network/comit-rs/issues/304) Enable more clippy lints
- [(318)](https://github.com/comit-network/comit-rs/issues/318) Add inbound connections to client pool
- [(440)](https://github.com/comit-network/comit-rs/issues/440) Make rfc003::SecretHash implement Copy
- [(45)](https://github.com/coblox/bitcoinrpc-rust-client/pull/45) Upgrade to bitcoind 0.17.0 and implement getbalance call
- [(555)](https://github.com/comit-network/comit-rs/issues/555) Allow COMIT node to talk to more than one COMIT node!
- [(575)](https://github.com/comit-network/comit-rs/issues/575) Split test_lib.js
- [(628)](https://github.com/comit-network/comit-rs/issues/628) cargo make `js-format` task does not work in Travis
- [(629)](https://github.com/comit-network/comit-rs/issues/629) From trait implementation should not panic
- [(641)](https://github.com/comit-network/comit-rs/issues/641) Find a better way for handling mergify

##### Sprint 4 (Up to 8 Jan)

- [(381)](https://github.com/comit-network/comit-rs/issues/381) Implement "decline" action on started state for Bob
- [(416)](https://github.com/comit-network/comit-rs/issues/416) Validate secret length in Bitcoin HTLC
- [(433)](https://github.com/comit-network/comit-rs/issues/433) Validate secret length in ETH&ERC20 HTLC
- [(498)](https://github.com/comit-network/comit-rs/issues/498) Create State Machine Factory
- [(499)](https://github.com/comit-network/comit-rs/issues/499) [ETH->BTC] From Start to BothFunded
- [(506)](https://github.com/comit-network/comit-rs/issues/506) [ETH->BTC] From BothFunded to BothRedeemed
- [(559)](https://github.com/comit-network/comit-rs/issues/559) Use futures::stream in LQS
- [(561)](https://github.com/comit-network/comit-rs/issues/561) Alice should not have Accept/Decline actions
- [(568)](https://github.com/comit-network/comit-rs/issues/568) ⚗️ Evaluate Typescript & Flow
- [(576)](https://github.com/comit-network/comit-rs/issues/576) ⚗️ Re-architecting state machine
- [(585)](https://github.com/comit-network/comit-rs/pull/585) Correct Travis condition (again)
- [(588)](https://github.com/comit-network/comit-rs/pull/588) Revert "Bob can decline a swap request"
- [(589)](https://github.com/comit-network/comit-rs/issues/589) [ERC20->BTC] From Start to BothRedeemed
- [(594)](https://github.com/comit-network/comit-rs/pull/594) Implement PR suggestions in a different PR because you forget to push changes before merging
- [(597)](https://github.com/comit-network/comit-rs/pull/597) Missing feedback from last PR
- [(6)](https://github.com/comit-network/RFCs/issues/6) [RFC-002] Write up SWAP message design
- [(600)](https://github.com/comit-network/comit-rs/pull/600) Update mergify to merge only if RTM
- [(601)](https://github.com/comit-network/comit-rs/issues/601) cargo make build fails
- [(602)](https://github.com/comit-network/comit-rs/pull/602) Bob can decline post mortem
- [(610)](https://github.com/comit-network/comit-rs/issues/610) `cargo make` requires `libssl-dev`
- [(611)](https://github.com/comit-network/comit-rs/pull/611) Moving to GPLv3
- [(615)](https://github.com/comit-network/comit-rs/pull/615) Cargo make + emoji reviews
- [(618)](https://github.com/comit-network/comit-rs/pull/618) Add contributor license agreement
- [(619)](https://github.com/comit-network/comit-rs/pull/619) Fix typo in issue template
- [(620)](https://github.com/comit-network/comit-rs/issues/620) GET http API to list current node connections
- [(621)](https://github.com/comit-network/comit-rs/pull/621) Adds commonly used `cargo make` tasks
- [(624)](https://github.com/comit-network/comit-rs/issues/624) Meta: Race Condition in Hashed Time Lock Scheme
