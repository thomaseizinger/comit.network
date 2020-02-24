---
layout: post
title:  "August, 2019 - Dev Update"
author: lucas
categories: [ ]
image: assets/images/2019-08/dev_update_8.png
featured: false
hidden: false
comments: true
tags: [dev-update]
---

> Talk is cheap. Show me the code.
>
> — _Linus Torvalds_, linux-kernel mailing list

Last month we doubled down on our efforts to improve COMIT's accessibility and robustness. Among other things we:
- Came up with a [release strategy](https://github.com/comit-network/spikes/blob/master/0012-release-strategy.adoc) which will make Rust compilation optional for users.
- Investigated how we could use [Miniscript](http://bitcoin.sipa.be/miniscript/) to [model our HTLCs](https://github.com/comit-network/comit-rs/issues/1287).
- Took steps towards persisting swaps between restarts by starting work on [adding a database to cnd](https://github.com/comit-network/comit-rs/issues/1243) and [modifying btsieve accordingly](https://github.com/comit-network/spikes/blob/master/0014-resume-swaps-after-restart.adoc).

<!--truncate-->

We also got confirmation that, [once again](https://www.youtube.com/watch?time_continue=1025&v=FI9cwksTrQs), [Thomas](https://twitter.com/oetzn) will be presenting at Scaling Bitcoin.
This time around he will be conducting a WIP session in Tel Aviv on how to conditionally transfer tokens on top of Bitcoin.

Last but not least, we were very excited to announce the inception of our very own [meetup group](https://www.meetup.com/Cross-Blockchain-Developers/)!
We want it to be a space for developers to learn and discuss about cross-blockchain applications.
The [first event](https://www.meetup.com/Cross-Blockchain-Developers/events/263927820/) served as an introduction to atomic swaps and the COMIT protocol, but in following iterations we plan to get everyone's hands [dirty with code](https://www.meetup.com/Cross-Blockchain-Developers/events/264201658/).
Come meet us if you're in Sydney!

Thanks for reading,

— Lucas

---

If you want to take a closer look at what we did last month, here are the GitHub issues closed in August from our main repositories:

- [comit-rs](https://github.com/comit-network/comit-rs/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-08-01..2019-08-31)
- [comit-i](https://github.com/comit-network/comit-i/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-08-01..2019-08-31)
- [bobtimus](https://github.com/coblox/bobtimus/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-08-01..2019-08-31)
