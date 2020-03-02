---
title:  "February, 2020 - Dev Update"
author: daniel
author_url: https://github.com/da-kami
author_image_url: https://avatars1.githubusercontent.com/u/5557790
tags: [dev-update]
---

> Trust starts with truth and ends with truth.
>
> — Santosh Kalvar

In this blogpost we first want to [HALight](https://github.com/comit-network/comit-rs/issues/1954) - ahm, highlight - the recent effort to design and integrate the new protocol that adds Lightning to COMIT. 
COMIT consists of [cryptographic protocols](https://comit.network/docs/comit-protocol/comit-protocol-stack#comit-cryptographic-protocols) and [communication protocols](https://comit.network/docs/comit-protocol/comit-protocol-stack#comit-communication-protocols).
Cryptographic protocols are currently defined as HAL, HErc20 and  HALight - where HALight is a new protocol that defines atomic swaps using the concept of hold-invoiced in lnd.
With the support of Lightning we come one step closer to supporting instant atomic swaps in COMIT.

<!--truncate-->

The second big thing we are working on, the [proof of concept for Grin-BTC swaps](https://github.com/comit-network/grin-btc-poc), is on track. 
The implementation of Alice on Grin and Bob on Bitcoin is already working.
Lucas is currently optimising the POC for bi-directional swaps. Stay tuned for the privacy-preserving swap update by the end of March!

As third big thing of February is the COMIT documentation. We kicked off the documentation on the homepage and invested quite some time of February in adding the [Getting Started](https://comit.network/docs/getting-started/create-comit-app), [Core Concepts](https://comit.network/docs/core-concepts/atomic-swap-htlc), [COMIT Protocol](https://comit.network/docs/comit-protocol/comit-protocol-stack) and [Javascript SDK](https://comit.network/docs/comit-sdk/index) docs on the COMIT homepage.
Additionally we integrated the blog into the homepage.
We are happy to receive feedback, and help out if there are additional question - just [reach](https://twitter.com/comit_network) [out](mailto:hello@coblox.tech).

When it comes to events, Thomas and Philipp enjoyed their time at the [Advancing Bitcoin](https://advancingbitcoin.com) and [Financial Crypto conference](https://fc20.ifca.ai/).
The conferences were a great opportunity to strengthen old and start new knowledge exchanges.

Unfortunately [EDCON 2020 in Vienna](https://www.edcon.io/) was cancelled due to the Corona Virus outbreak, so our [cross-blockchain sub-conference](https://www.edcon.io/agenda?id=a17b8bbe08994c559218ca60426e2214) was cancelled subsequently.
We are looking forward to the upcoming conferences later this year and hope that the recent [world-wide finance-crises hick up](https://www.theguardian.com/business/2020/feb/28/coronavirus-leads-to-worst-week-for-markets-since-financial-crisis) won't affect them too much. 

We joined another [Bitcoin Sydney meetup](https://www.meetup.com/en-AU/Bitcoin_Sydney/events/268163844/) where [Rusty Russel](https://github.com/rustyrussell) answered questions about Lightning and gave insights into the development of [c-lightning](https://github.com/ElementsProject/lightning).
The discussion with Rusty lead us to the conclusion that it is worth taking another look at c-lightning as alternative to [lnd](https://github.com/lightningnetwork/lnd) for the Lightning integration.

Our next COMIT community coffee is being planned, date and time will be announced within the next two weeks.

— Daniel

If you want to take a closer look at what we did last month, here are the GitHub issues closed in January from our main repositories:

- [comit-rs](https://github.com/comit-network/comit-rs/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2020-02-01..2020-02-29)
- [create-comit-app](https://github.com/comit-network/create-comit-app/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2020-02-01..2020-02-29)
- [comit-js-sdk](https://github.com/comit-network/comit-js-sdk/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2020-02-01..2020-02-29)
- [blockchain-contracts](https://github.com/comit-network/blockchain-contracts/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2020-02-01..2020-02-29)
