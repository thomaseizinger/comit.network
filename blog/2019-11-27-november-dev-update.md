---
layout: post
title:  "November, 2019 - Dev Update"
author: tobin
categories: [ ]
image: assets/images/2019-11/dev_update_11.png
featured: false
hidden: false
comments: true
tags: [dev-update]
---

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
>
> — Antoine de Saint-Exupery

Tomorrow the team takes off for Singapore (we are an Australian company and work out of Sydney but our parent company TenX is based in Singapore).
We get together with everyone from TenX twice a year, its a lot of fun.
There are late night hacking sessions and serious amounts of quality food.

<!--truncate-->

Our late night hacking this trip will be done together with a bunch of local developers, we are hosting a [COMIT hackathon](https://www.hackathon.com/event/comit-hackathon---atomic-swaps-for-your-application-79280691683).
Places are limited but still available, please [sign up](https://www.eventbrite.com/e/comit-hackathon-atomic-swaps-for-your-application-tickets-79280691683) and join us if you are in Singapore next week.
Let's connect all the blockchains, together.

This month we have had a strong push to improve the usability of our software.
This can be seen in work done to simplify and improve the configuration of the cnd node.
We are attempting to understand the pain points during configuration and implementing strategies to improve them.
We no longer require a configuration file to start cnd, startup will happen with sane defaults if no config file is present.
We add a command line option to dump the running config file to stdout so developers can easily see how their node is currently configured.

Another exciting area of development this month has been the negotiation phase of an atomic swap.
We are in the process of designing a negotiation protocol, this is a protocol describing how two applications can negotiate the details of an atomic swap with the intent of using cnd to execute the swap.
Currently the negotiation protocol is being implemented at the [SDK](https://github.com/comit-network/comit-js-sdk) level (SDK for Javascript applications built on top of COMIT).
Depending on how the protocol is received by the COMIT community we may move it into the COMIT reference implementation ([comit-rs](https://github.com/comit-network/comit-rs)).

We have been focusing of late on improving the experience of developing Javascript applications on top of COMIT.
With this in mind, we have stopped serving the [comit-i](https://github.com/comit-network/comit-i) web interface from the running cnd instance.
This is in favour of developing applications that use the SDK to interact with the cnd node instead of interacting with cnd directly.
We have continued work on our example applications and the infrastructure that supports them [create-comit-app](https://github.com/comit-network/create-comit-app).
If you have `yarn` installed you can take a quick look using `yarn create comit-app --help`.

Up until now we have been testing our work primarily using local blockchain nodes (i.e., regtest for Bitcoin, private network for Ethereum), we are now pushing to facilitate easy testing of COMIT based applications on testnet.
Much of the configuration simplification has been a result of this, also we have had some issues with CORS which have been resolved this month.
More bugs will surely shake out as we continue this effort.

Last but not least; this month we merged into cnd an implementation of persistent storage by way of an SQLite database.
We now store swaps, for both parties, from when the swap is first initiated.
This gives us a few niceties immediately as well as setting a foundation for some serious improvements to come.
As it stands, cnd can now expose to client applications the full swap history for swaps past and present.
Obviously the database file can easily be migrated to another machine, or container, and this history will be present.
Re-start of the cnd node is now supported with one major caveat - if any events, for in-progress swaps, occur on a ledger while cnd is being re-started we will miss them, the solution to this problem is well understood and currently under development.

All in all this has been an awesome month, the team here at CoBloX, developing COMIT, is super psyched at the moment - we hope you are as excited as we are.
Simple, safe, trustless, fully decentralized, atomic swaps, across multiple blockchains, repeatedly, on mainnet, is so close its palpable.


Happy hacking,  
Tobin Harding.
