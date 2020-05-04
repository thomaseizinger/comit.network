---
title:  "April, 2020 - Dev Update"
author: daniel
author_url: https://github.com/da-kami
author_image_url: https://avatars1.githubusercontent.com/u/5557790
tags: [dev-update]
---

> It’s difficult to make predictions, especially about the future.
>
> Niels Bohr

Are we on the verge of plummeting into the biggest recession since the big crash of 1929? 
And if so, are cryptocurrencies the answer, a safe haven to put your money in?

While we cannot look into the future and don't dare to predict it, we are inclined to believe that we are *likely* to see a high demand for crypto in the future, and an even higher one in the next few months. 
Time to get COMIT out there so you don't have to trust those central exchanges, but keep your private keys where they should be: in your wallet.
Verify, don't trust!

Join us for a discussion around advances in crypto, trustless trading and - as usual - various tech related topics in [next week Thursday's COMIT Community ☕️](https://calendar.google.com/event?action=TEMPLATE&tmeid=NHEzb2tkNDJtcXFzdnNyNG9oM2UzNGhpc3MgdGVueC50ZWNoX202dWp2OXQ4cGluajAxYmI2NXV0aHRmcnM0QGc&tmsrc=tenx.tech_m6ujv9t8pinj01bb65uthtfrs4%40group.calendar.google.com) - 7pm Sydney time!

<!--truncate-->

It would be an understatement to say that the COMIT team is quite tech-focused.
We breath tech, usually focusing on discussions around protocol implementations rather than philosophising about the global financial system.
However, with the recent turmoil caused by COVID-19, we had a noticeable trend towards discussing topics outside the tech sphere.

While some plans, like filling up your bathtub with crude oil and getting paid for it, were fun but not the most practical, other questions, like should I invest now? - and if yes into what? - were interesting to the team.
And we don't seem to be the only ones.
We are used to the cryptocurrency market being volatile - but recently the traditional stock market has been even less predicatable.
Making quick money might, however, be a shallow tactic, given that we might just be at the start of the biggest bear market to date.
By looking at [statistics of previous historical crashes](https://todaytrader.com/blog/stock-market-crash-preparation/) it becomes clear that we might not have reached the bottom yet, and the time to break-even could be decades away.
We love statistics, but as the quote at the top of this post says - predicting the future is a bet.
It can be an educated bet, but nonetheless a bet.
In the end it's up to each individual to come to a conclusion on how to handle this financial crisis.
Let's end this excursion with a second quote I really like: 

> 49% losses, 51% wins, and lived well from the difference.
>
> André Kostolany

Back to the tech - let's have a look on what happened in COMIT last month!
With the beginning of the new quarter we started tackling new challenges while still finishing some issues from the previous quarter.

In the first week of April the Lightning squad - Thomas, Franck and Tobin - [successfully integrated Ether-Lighting swaps](https://github.com/comit-network/comit-rs/pull/2426) into cnd.
With this milestone reached, Lightning is basically integrated into COMIT, leaving some improvements to be worked on.
Together with the [step](https://github.com/comit-network/comit-rs/pull/2283)-by-[step](https://github.com/comit-network/comit-rs/pull/2383/files) integration of the [new communication protocols](https://github.com/comit-network/spikes/blob/master/0023-communication-protocol.adoc) we steadily improve the Lightning integration in the core.
Another interesting piece of code to mention is Rishab's implementation of the [libp2p integration tests](https://github.com/comit-network/comit-rs/pull/2479), that allows us to integration-test the newly added [`NetworkBehaviour`s](https://docs.rs/libp2p/0.12.0/libp2p/swarm/trait.NetworkBehaviour.html) independent of our end-to-end tests.

By the second week of April Thomas and Lucas had joined forces with our ex-colleague Lloyd to implement a Bitcoin [PoC of A2L](https://github.com/comit-network/a2l-poc).
A2L is a payment-channel hub protocol which achieves atomicity and unlinkability between the channel updates by leveraging adaptor signatures and a homomorphic encryption scheme.
The [paper](https://eprint.iacr.org/2019/589.pdf) defines a protocol construction using 2-party ECDSA (and other signature schemes), but our implementation instead takes the more pragmatic route of using 2-of-2 multisigs, like we did in the Bitcoin-Grin swap PoC.
By the end of April some work remains to be done in terms of benchmarking and improving code quality, but the end-to-end test pass!

When it comes to the COMIT community the most noticeable change is the [new front-page of our website](https://comit.network/).
COMIT is an open protocol - we strongly encourage anybody out there to use it for building products that enable the trustless exchange of digital assets.
To make it easier to find your way into coding with COMIT we added [a detailed "write your first COMIT-app" tutorial](https://comit.network/docs/tutorials/write-your-first-comit-app/write-a-comit-app-setup) for using the [comit-js-sdk](https://github.com/comit-network/comit-js-sdk/) to integrate atomic swaps into your application.

In May we we are planning to start tackling decentral order-book research and the integration of the GRIN-BTC PoC into COMIT's core.

Not so sure about Happy Investing - Sure about: Happy Hacking,

— Daniel
