---
layout: post
title:  "September, 2019 - Dev Update"
author: daniel
categories: [ ]
image: assets/images/2019-09/dev_update_9.png
featured: false
hidden: false
comments: true
tags: [dev-update]
---

> Don't tell me the sky is the limit when there are footprints on the moon!
>
> — _Paul Brandt_

In September we invested a great deal of our brainpower into building the C( )MIT developer community. 

<!--truncate-->

Our first achievement on the road to success was the release of [C( )MIT 0.1.0](https://github.com/comit-network/comit-rs/releases/tag/0.1.0) 🥳🎉. 
Over the course of the month two more releases followed - check out the [latest release](https://github.com/comit-network/comit-rs/releases) on Github!
We got several cool features merged on [comit-rs](https://github.com/comit-network/comit-rs), such as replacing ZMQ with using the bitcoind HTTP interface. 
This resulted in a big refactoring of btsieve, which allowed us to integrate it into cnd!
For the next release you can expect only one binary, which will be cnd.

Besides improving our Rust reference implementation we focused on creating tools that allow developers to easily get started with C( )MIT.
In order to be able to present how C( )MIT works in a simple and understandable manner we created two new projects in September:
1. [hello-swap](https://github.com/comit-network/hello-swap): A "Hello World" example for C( )MIT that shows you how to do an atomic swap using HTLCs.
2. [create-comit-app](https://github.com/comit-network/create-comit-app): A simple CLI inspired by create-react-app that allows you to spin up a development environment.

The [create-comit-app](https://github.com/comit-network/create-comit-app) project is especially cool.
It manages the configuration and startup of the complete environment for you.
The steps to get everything up and running for your atomic swap are not to be underestimated. 
With [create-comit-app](https://github.com/comit-network/create-comit-app) you get all of this out of the box: 
  * Bitcoin regtest node,
  * Ethereum dev node,
  * 2x cnd (comit network daemon) so you can do a swap on your local machine.

With [hello-swap](https://github.com/comit-network/hello-swap) and [create-comit-app](https://github.com/comit-network/create-comit-app) it is wonderfully simple to get started building on top of C( )MIT - we really recommend you take a look.

Already sounds good? There is more!
We did not just stop at [hello-swap](https://github.com/comit-network/hello-swap) and [create-comit-app](https://github.com/comit-network/create-comit-app) but also created [comit-js-sdk](https://github.com/comit-network/comit-js-sdk) a JavaScript SDK that enables you to interact with the cnd API in the easiest manner. 
Using the [comit-js-sdk](https://github.com/comit-network/comit-js-sdk) it becomes fairly simple to integrate C( )MIT into your JavaScript application. [hello-swap](https://github.com/comit-network/hello-swap) uses the [comit-js-sdk](https://github.com/comit-network/comit-js-sdk) under the hood, it is a great starting point to get to know the SDK!

In September our most important goal was to spread the word about C( )MIT as much as possible - and we did. 
We organised several [meetups](https://www.meetup.com/Cross-Blockchain-Developers/) and delivered our first workshop at [BokkyPooBah's Ethereum Workshop](https://www.meetup.com/BokkyPooBahs-Ethereum-Workshop/events/264682620).
First, that was a great deal of fun! Second, we had several key learnings about our users and could validate several of our assumptions. 
One immediate result of the learnings from our first meetup was the creation of the three new projects [hello-swap](https://github.com/comit-network/hello-swap), [create-comit-app](https://github.com/comit-network/create-comit-app) and [comit-js-sdk](https://github.com/comit-network/comit-js-sdk). 
We are planning to continuously extend these tools with e.g. adding testnet and mainnet features for [create-comit-app](https://github.com/comit-network/create-comit-app) and adding extensions to [hello-swap](https://github.com/comit-network/hello-swap) that show what can be built on top of C( )MIT.

Building a local community is great - building a community around the world is even greater! Thus, we put three items into our planning pipeline:
1. Hackathon in Singapore between 06-08 December 2019
2. Workshop in Zurich between 10-13 December 2019
3. Workshop in Vienna between 16-18 December 2019

If you would like to learn more about C( )MIT you are very welcome to join us at one of our meetups and upcoming events - or check out our relaunched website at [comit.network](https://www.comit.network/)!

Stay tuned,

— Daniel

---

If you want to take a closer look at what we did last month, here are the GitHub issues closed in September from our main repositories:

- [comit-rs](https://github.com/comit-network/comit-rs/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-09-01..2019-09-30)
- [hello-swap](https://github.com/comit-network/hello-swap/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-09-01..2019-09-30)
- [create-comit-app](https://github.com/comit-network/create-comit-app/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-09-01..2019-09-30)
- [comit-js-sdk](https://github.com/comit-network/comit-js-sdk/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-09-01..2019-09-30)
- [bobtimus](https://github.com/coblox/bobtimus/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-09-01..2019-09-30)
