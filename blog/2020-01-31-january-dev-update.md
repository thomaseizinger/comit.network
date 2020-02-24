---
title:  "January, 2020 - Dev Update"
author: franck
author_url: https://github.com/d4nte
author_image_url: https://avatars1.githubusercontent.com/u/300805
tags: [dev-update]
---

> Seek First to Understand, Then to Be Understood
>
> — Stephen Covey

One could wonder at first how this quote applies to what we are doing at CoBloX.

While Stephen Covey's literature focuses on self-improvement with a justified emphasis on inter-personal relationships,
I believe anyone who builds a product, platform or protocol for others, should also live by this quote.

We, at CoBloX, are building COMIT as an open-source protocol for anyone to leverage the power of atomic swaps in their own software.
If we do not seek to understand first then how can we build something useful to you?

<!--truncate-->

To achieve our objective of better understanding COMIT App developers, we are putting a lot of efforts in reaching out to the community:

- Events in January:
  - [COMIT Community Coffee on 11Jan](https://youtube.com/watch?v=zo2-6XPB1M4)
  - Attended the [Bitcoin Sydney meetup](https://meetup.com/Bitcoin_Sydney/events/267743296/) on 22Jan
  - Philipp was part of the panel discussion at the [ETHSydney Meetup](https://meetup.com/ethsydney/events/267712163) on 23Jan
- Upcoming events:
  - [Advancing Bitcoin](https://advancingbitcoin.com) conference, London, 6-7Feb 
  - [Financial Crypto conference](https://fc20.ifca.ai/), Malaysia, 1-14Feb
  - [Bitcoin Sydney Meetup](https://meetup.com/Bitcoin_Sydney/events/268163844), 26Feb 

Our next COMIT community coffee is being planned, stay tune for date and time.
If you wish to meet the CoBloX team at any of these events, do not hesitate to [reach](https://twitter.com/comit_network) [out](mailto:hello@coblox.tech).

---

The CoBloX Team started the new year strong to progress on our [2020 Goals]({% post_url 2019-12-05-2020-COMIT-goals %}).

Thomas has been finalising a [plan of attack](https://github.com/comit-network/spikes/pull/50) to integrate Lightning Bitcoin in COMIT,
using [lnd](https://github.com/lightningnetwork/lnd/).
Lucas and Lloyd have been working hard to design and implement a [PoC for Grin-Bitcoin](https://github.com/comit-network/grin-btc-poc) atomic swaps,
this is done using scriptless-scripts (also called conditional signatures).

By taking feedback from COMIT App developers into account we have started revamping our website to include
a documentation section.
We are currently working on this section, it will include a mix of tutorials to build your own COMIT App and overall information on atomic swaps, HTLCs and COMIT.

We also have done a number of internal improvement on cnd, the COMIT client reference implementation:
- Use [tokio tracing](https://github.com/comit-network/comit-rs/pull/1957) for logging purposes
- [Use `revert`](https://github.com/comit-network/blockchain-contracts/pull/37) in case of failure in our Ethereum HTLCs to improve UX
- Clean up dependencies and move away from rust-web3

Finally, we improved our team organisation and Scrum process to ensure we stay focus on our goal: _Connect all the blockchains - without adding yet another one._

— Franck

If you want to take a closer look at what we did last month, here are the GitHub issues closed in January from our main repositories:

- [comit-rs](https://github.com/comit-network/comit-rs/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2020-01-01..2020-01-31)
- [create-comit-app](https://github.com/comit-network/create-comit-app/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2020-01-01..2020-01-31)
- [comit-js-sdk](https://github.com/comit-network/comit-js-sdk/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2020-01-01..2020-01-31)
- [blockchain-contracts](https://github.com/comit-network/blockchain-contracts/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2020-01-01..2020-01-31)
