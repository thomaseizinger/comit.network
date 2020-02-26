---
title:  "July, 2019 - Dev Update"
author: franck
author_url: https://github.com/d4nte
author_image_url: https://avatars1.githubusercontent.com/u/300805
tags: [dev-update]
---

> Step by step walk the thousand-mile road. 
>
> — _Miyamoto Musashi_, The Book of Five Rings

July has been intense, our main focus was to make [Bobtimus](https://github.com/coblox/bobtimus) ready for Testnet.
We implemented a custom algorithm for the rates, based on the wallet balances to ensure that (or at least help with) Bobtimus' wallets does not get drained.
This is of course not to be used for mainnet but it was a good exercise to test the modularity of Bobtimus rate service.
Ultimately, we want to make it possible for everyone to implement their own trading algorithm using Bobtimus.

<!--truncate-->

Then, we deployed [Bobtimus in the cloud](2019-07-16-comit-goes-testnet.md)
to allow you to have a go and try it out.
You need to have full nodes running to use [comit-rs](https://github.com/comit-network/comit-rs) at this stage.
We know it is not ideal as you would have to sync Bitcoin testnet and Ethereum ropsten chains but we are working toward usability as part of our quaterly goals.

We have also published a [blog post](2019-07-11-a-closer-look-on-bitcoin.md) that explains our Bitcoin HTLC in more details.

Cheers,

— Franck

---

If you want to check out in more details the work done, here are the GitHub issues closed in July:

- [comit-rs](https://github.com/comit-network/comit-rs/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-07-01..2019-07-31)
- [comit-i](https://github.com/comit-network/comit-i/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-07-01..2019-07-31)
- [bobtimus](https://github.com/coblox/bobtimus/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-07-01..2019-07-31)
