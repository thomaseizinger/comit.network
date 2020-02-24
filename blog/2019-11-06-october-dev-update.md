---
title:  "October, 2019 - Dev Update"
author: thomas
author_url: https://github.com/thomaseizinger
author_image_url: https://avatars2.githubusercontent.com/u/5486389
tags: [dev-update]
---

> Dance like no one's watching
>
> — Clark & Leigh

In October we had two main focus areas:

1. Extending and improving the ["getting started"](https://github.com/comit-network/create-comit-app) projects we started in September,
2. Making cnd (comit network daemon) more robust by adding recovery after a shutdown.

<!--truncate-->

Additionally we did quite a lot of community work.
We started the month by spontaneously sending [Daniel](https://twitter.com/dakarzel) to the Ethereum Devcon5 in Osaka.
A great opportunity to speak Japanese for a week, network at the many fun parties, get insights into the Ethereum community and advances on e.g. eth2.0.
Thanks to [Bokkypoobah](https://twitter.com/bokkypoobah) we were able to present COMIT to get the work out to the community.
The feedback we got from Devcon5 was great and encouraged us to move further with COMIT, as well as it showed us where we can improve parts.
Some results and findings:
* Focus on the negotiation phase of swap, not only the execution,
* More advanced default expiry handling in cnd,
* Making cnd mainnet ready.

Findings learned at the conference are reflected in the [negotiation and execution spike](https://github.com/comit-network/spikes/blob/master/0017-negotiation-and-execution-protocol.adoc), which creates a clear separation between negotiation and execution and introduces a fist simple negotiation protocol.

While Daniel was partying in Osaka, the team in Sydney was extending [create-comit-app](https://github.com/comit-network/create-comit-app) to integrate ERC20 swaps, which resulted in another local workshop meetup mid of October.
The extension of [create-comit-app](https://github.com/comit-network/create-comit-app) did not stop at adding ERC20 support, we also:
* integrated the examples in create-comit-app and removed hello-swap as repository,
* simplified the examples by improving the [comit-js-sdk](https://github.com/comit-network/comit-js-sdk),
* creating an example where the maker and taker can be run in separate terminals to simulate a more real-world use-case.

We want to give a big shout-out to [Franck](https://twitter.com/dantounet) who's face was all over the tickets in sprint-reviews for the last few weeks (even more than usual 😁).
Great work on advancing [create-comit-app](https://github.com/comit-network/create-comit-app) so fast!

Of course we also got work done on [comit-rs](https://github.com/comit-network/comit-rs).
The main focus in October was on adding a database to cnd to allow for restarts mid-swap.
This proved to be a lot more difficult than we initially thought it would.
However, Tobin did some fantastic work in refactoring how we handle incoming and outgoing messages.
This paves the way for storing those messages which in turn allows us to simply restart all processes in case cnd is restarted mid-swap!

Last but not least the December event planning went into the next round and we are proud to announce:
 
1. The first [COMIT hackathon](https://www.eventbrite.com/e/comit-hackathon-atomic-swaps-for-your-application-tickets-79280691683), 06.12. - 08.12. @ TenX Office Singapore
2. COMIT workshop, 17.12. 9:00-11:00am @ technical university Vienna, lecture hall 6, main building (Karlsplatz 13)
3. COMIT workshop, 18.12. 7:00-8:30pm, @ Bitcoin Austria Vienna (meetup event to be created shortly)

Already looking forward to meeting some of our readers in Singapore and Europe! 
Cheers,

— Thomas

---

If you want to take a closer look at what we did last month, here are the GitHub issues closed in October from our main repositories:

- [comit-rs](https://github.com/comit-network/comit-rs/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-10-01..2019-10-31)
- [create-comit-app](https://github.com/comit-network/create-comit-app/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-10-01..2019-10-31)
- [comit-js-sdk](https://github.com/comit-network/comit-js-sdk/issues?utf8=%E2%9C%93&q=is%3Aissue+sort%3Aupdated-desc+closed%3A2019-10-01..2019-10-31)
