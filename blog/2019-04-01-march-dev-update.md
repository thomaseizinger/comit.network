---
layout: post
title:  "March, 2019 - Dev Update"
author: oetzn
categories: [ ]
image: assets/images/2019-03/dev_update_3.png
featured: false
hidden: false
comments: true
tags: [dev-update]
---

> RIP Google Inbox - 31st March, 2019
>
> The only tool that lastingly changed the way I do emails.

It feels like we just started the quarter and here is already the 3rd dev update of this year, meaning Q1 is already over.

[Lloyd](https://twitter.com/LLFOURN) spent quite some time on writing [RFCs](https://github.com/comit-network/RFCs) in the last two sprints.
In short, he managed to put down an initial version for all the supported ledgers and assets that we currently have in COMIT, which are Bitcoin & Ethereum with the Bitcoin, Ether and ERC20 assets.
The exciting part about this is that we can now change our reference implementation of COMIT, [comit-rs](https://github.com/comit-network/comit-rs), to refer to the RFCs for the smart contract templates of the HTLCs instead of compiling them as part of the build.
This moves us one step closer to a heterogeneous network of COMIT nodes where all implementations follow the same specification.

Other, quite exciting work has been done by [Franck](https://twitter.com/d4nte) who refactored our e2e test suite for comit-rs from a sea of duplication to a declarative framework that simply executes swaps.
At the same time, the whole test suite was converted to typescript which gives us even more confidence in its results.

[Lloyd](https://twitter.com/LLFOURN) also did some exciting work on our e2e test suite by revising the implementation so that the docker containers of the blockchain nodes are not restarted between the tests.
This gives us a great speed-up of the whole test suite.
Faster tests are always welcome!

Talking about testing: This month, I gave a talk at the Rust-Syndey meetup about the [testcontainers-rs](https://github.com/testcontainers/testcontainers-rs) library.
It has been very helpful to us in testing the smart contracts used for our atomic swaps.
If you are in the need of integration testing Rust code against a docker container, give it a shot!

We've also finally enabled [Dependabot](https://dependabot.com/) for comit-rs after fighting a bug that in the end was caused by an outdated dependency.
I am a firm believer in the automation of repetitive and boring tasks.
I've been pushing for this for quite some time now, that is why this is a particularly exciting change for me.

Apart from all this, we've also spent a lot of time on something that is not quite ready yet to be shown to the public ;)
Stay tuned!

Cheers,

— Thomas ([@oetzn](https://twitter.com/oetzn))

## We are hiring!

Do you think the mentioned topics are interesting and challenging? You are in luck:

[![Job Opening](/assets/images/2019-03/were-hiring.jpeg)](https://tenx.tech/en/job-openings)

## Interesting happenings

If you are interested in the Lightning network, give [this podcast](https://stephanlivera.com/episode/59) a try.
Christian Decker explains how lightning channel factories work.

Also, just as we got used to waffle.io for managing our sprints, [it is closing down](https://waffle.io/closing-its-doors).
This will thereby probably be last time we can refer to the [throughput page](https://waffle.io/comit-network/comit-rs/metrics/throughput?groupSize=2&start=2019-02-26T13:00:00.000Z&timeUnit=week) for the issues we have completed in the last sprints.
