---
layout: post
title:  "April, 2019 - Dev Update"
author: bonomat
categories: [ ]
image: assets/images/2019-04/dev_update_4.png
featured: false
hidden: false
comments: true
tags: [dev-update]
---

> RIP Waffle.io - 16 May, 2019
>
> I hope it won't become a habit that good tools are closing down 😢

The first month of Q2/2019 is already over - it's fascinating how time flies when you're having fun.

First, an outlook to next week:
On Wednesday, May 8 2019 we are celebrating our 1st year anniversary as residents of [Stone & Chalk](https://www.stoneandchalk.com.au/),
1 year anniversary of having [Franck](https://twitter.com/d4nte) and [Lloyd](https://twitter.com/LLFOURN) with us;
and, since [last month](./2019-04-01-march-dev-update) did not mention it: [Thomas](https://twitter.com/oetzn) had his 1 year anniversary a few weeks ago.
It's been an amazing journey so far and I'm looking forward to what will come.

What happened last month:

As waffle.io is closing down as well, we have been actively looking for a new way to manage our GitHub issues.
It feels like our requirements are unique as hardly any project management tool out there supports cross-GitHub organization boards, i.e. a single board which shows GitHub issues from various organizations and repositories.
For now we will settle with [ZenHub](https://www.zenhub.com/). If you know a better/other tool, feel free to [let us know](https://twitter.com/cobloxlab).

[Last month](./2019-04-01-march-dev-update) we promised something new, did you see it already?
There was no press-release, tweet or whatsoever news report about it... we just quietly made [comit-i](https://github.com/comit-network/comit-i) open source.
Comit-i is a general-purpose web interface for comit-rs, it allows for sending, receiving, accepting, ... swap requests.
For now, it lacks a proper documentation which will follow 🔜™️ , but please, check it out and let us know what you think.


We have been busy creating a new [RFCs](https://github.com/comit-network/RFCs) for supporting OmniLayer tokens.
If you do not know [OmniLayer](https://en.bitcoinwiki.org/wiki/Omni_Layer): it's the first approach to have arbitrary non-native tokens on a blockchain. This was pre-ERC20, even pre-Ethereum ;)
After the success of Ethereum and its ERC20 tokens, it got relatively quiet around OmniLayer and its potential, nevertheless, one of the most traded tokens out there is on OmniLayer, i.e. [USDT (or Tether)](https://tether.to/).
Supporting OmniLayer tokens enriches COMIT with access to a tremendous amount of additional digital assets.
Additionally, we created a [new spike](https://github.com/comit-network/spikes/pull/6) to discuss a new integration of the [Lightning Network](https://lightning.network/). This is still in a draft stage, but the corresponding RFC and its implementation will follow soon ;)

Besides supporting new ledgers and assets, we have been busy improving [comit-rs](https://github.com/comit-network/comit-rs) - the reference implementation of COMIT:
Among others,
* we finally implemented refunding if a trade does not go through: [comit-network/comit-rs#411](https://github.com/comit-network/comit-rs/issues/411)
* we cleaned up our action implementations which reduced a lot of redundant code: [comit-network/comit-rs#838](https://github.com/comit-network/comit-rs/issues/838)
* we worked on replacing our custom network communication layer with [libp2p](https://libp2p.io/):[comit-network/comit-rs#800](https://github.com/comit-network/comit-rs/pull/800)
* ... and many many more :)

I hope you are as excited about our progress as we are.
And as usual, if you want to reach out to us, just drop us a [message or mention us in a tweet](https://twitter.com/cobloxlab).

Cheers,

— Philipp ([@bonomat](https://twitter.com/bonomat))
