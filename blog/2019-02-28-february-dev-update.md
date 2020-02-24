---
title:  "February, 2019 - Dev Update"
author: lloyd
author_url: https://github.com/LLFourn
author_image_url: https://avatars1.githubusercontent.com/u/3734083
tags: [dev-update]
---

> The goal of bitcoin is to get lots of utxos, earning a high score.
>
> — *[The lit documentation](https://github.com/mit-dci/lit/blob/master/uspv/README.md)*

This month, [Philipp](https://twitter.com/bonomat) and I attended 2019's [The Financial Cryptography and Data Security Conference](https://fc19.ifca.ai/) in St Kitts.
It was a fun, exciting and inspiring week.
The people I met were not only incredibly smart but also highly motivated to do real research and invent new things.

<!--truncate-->

Our humble contribution to the conference was [a poster](https://coblox.tech/docs/financial_crypto19.pdf) which demonstrates how you can do atomic swaps without the *option problem*.

The presentations that were most relevant to my interests were:
- [Surya Bakshi](https://twitter.com/suryabakshi) presenting [Sprites and State Channels: Payment Networks
that Go Faster than Lightning](https://fc19.ifca.ai/preproceedings/185-preproceedings.pdf)
- Rafael Dowsley presenting [ROYALE: A Framework for Universally
Composable Card Games with Financial Rewards
and Penalties Enforcement](https://fc19.ifca.ai/preproceedings/111-preproceedings.pdf)
- [Peter Wuille](https://twitter.com/pwuille) on the History of Schnorr Signatures in Bitcoin ([slides](https://t.co/yc1TzcO5y1))
- [Dionysis Zindros](https://twitter.com/dionyziz) on Proof of Work Side chains using [NIPoPoWs](https://nipopows.com/).
- Adithya Bhat on how to replicated credit networks like Ripple on Ethereum ([slides](https://transitive.network/docs/TransitiveNetworkFC19.pdf))

Back in Sydney, things were moving quickly as usual.
Most significantly, [Lucas](https://twitter.com/luckysori) made a [mega refactoring PR](https://github.com/comit-network/comit-rs/pull/752).
Its goal was to re-engineer the HTTP API so we expose more information and with a better structure.
Here's what it looks like now:

``` json
{
  "status": "IN_PROGRESS",
  "role": "Alice",
  "parameters": {
    "alpha_asset": {
      "name": "Bitcoin",
      "quantity": "100000000"
    },
    "alpha_ledger": {
      "name": "Bitcoin",
      "network": "regtest"
    },
    "beta_asset": {
      "name": "ERC20",
      "quantity": "5000000000000000000000",
      "token_contract": "0x54a3f6747a5dc5711c926bc94b0ec25499800882"
    },
    "beta_ledger": {
      "name": "Ethereum",
      "network": "regtest"
    }
  },
  "state": {
    "alpha_ledger": {
      "deploy_tx": "e65ec43fdadf30fd4dbee48511616be65bf7382b5880cbb0964dd71370e4093a",
      "fund_tx": "e65ec43fdadf30fd4dbee48511616be65bf7382b5880cbb0964dd71370e4093a",
      "htlc_location": {
        "txid": "e65ec43fdadf30fd4dbee48511616be65bf7382b5880cbb0964dd71370e4093a",
        "vout": 1
      },
      "redeem_tx": null,
      "refund_tx": null,
      "status": "Funded"
    },
    "beta_ledger": {
      "deploy_tx": "0xf96dc0fbccdfc7706c4f04bc3e01ba94a4bdf1d6f1c11b64018b436b022402ca",
      "fund_tx": "0xbe6cf4a78c3ab34bc1b102e9c0f33b8798666078b506c89d2664dac76eb5828a",
      "htlc_location": "0xf8eca237ef698ae03e3a45f08f60ad6f7d7b4c68",
      "redeem_tx": null,
      "refund_tx": null,
      "status": "Funded"
    },
    "communication": {
      "alpha_expiry": 3485372400,
      "alpha_redeem_identity": "32981835801f8925d9322cdaf043e47a83356398",
      "alpha_refund_identity": "36629960ad691d167d79083bccae1485a5ef7a5c",
      "beta_expiry": 3485336400,
      "beta_redeem_identity": "0x00a329c0648769a73afac7f9381e08fb43dbea72",
      "beta_refund_identity": "0x94f31aeaec1ecb61cae9688d1623d4be170dac73",
      "status": "ACCEPTED"
    }
  },
  "_links": {
    "redeem": {
      "href": "/swaps/rfc003/da697796-31a1-4007-af55-35d5d225dac4/redeem"
    }
  },
  "_embedded": null
}
```
But he ended up refactoring half the code base.
In the end, he managed to add the new feature while still deleting more lines of code than he added!

[Franck](https://twitter.com/dantounet) [did some investigation](https://github.com/comit-network/comit-rs/issues/691) on how we can add [Omnilayer](https://www.omnilayer.org/) tokens to COMIT.

[Thomas](https://twitter.com/oetzn) did the final work to use Ethereum transaction receipt logs to track events in our HTLC contracts on Ethereum rather than relying the raw transaction data.
This will hopefully secure our protocol to ensure that the secret is always recovered when a redeem happens.

In other news, we renamed our thing that watches the blockchains from Ledger Query Service to "BtSieve" (Block and Transaction Sieve)

Cheers,

— Lloyd ([@LLFourn](https://twitter.com/LLFOURN))

## Interesting Happenings
- [MIT DCI's Cryptocurrency Research Review #2](https://mitcryptocurrencyresearch.substack.com/p/mit-dcis-cryptocurrency-research-c31).
- Also from the DCI (in December) there was a [interview](https://medium.com/mit-media-lab-digital-currency-initiative/grey-mirror-1-tadge-dryja-digital-currency-initiative-utreexo-and-bootstrapping-bitcoin-upgrades-51975411002) with Tadge Dryja on [Utreexo](https://dci.mit.edu/research/2018/11/28/utreexo-a-dynamic-accumulator-for-bitcoin-state-a-description-of-research-by-thaddeus-dryja)
- [Simone](https://twitter.com/DareSimone) did a presentation on atomic swaps in COMIT at a Meetup in Vicenza, Italy. Photos can be found on [twitter](https://twitter.com/DareSimone/status/1100505729528709126)
- Thomas wrote a [blog post](https://blog.eizinger.io/4150/refactoring-is-a-developer-s-business) about refactoring code.
- [Scaling Bitcoin](https://telaviv2019.scalingbitcoin.org/) will be in Tel Aviv this year.

---

Here are the issues that were done during our sprints this month.
We've moved to two-week sprints so we have only two sprints per month.
You can see [waffle](https://waffle.io/comit-network/comit-rs/metrics/throughput?groupSize=2&start=2019-01-15T13:00:00.000Z&timeUnit=week) for crazy charts and more info.

##### Sprint 8
- [(27)](https://github.com/comit-network/RFCs/issues/27) Rename file `COMIT-registry.md` to `registry.md`
- [(26)](https://github.com/comit-network/RFCs/issues/26) ERC20 example in RFC002 is missing `address`
- [(24)](https://github.com/comit-network/RFCs/issues/24) Document RFC process (meeting notes)
- [(16)](https://github.com/comit-network/RFCs/issues/16) Revisit RFC001
- [(10)](https://github.com/comit-network/RFCs/issues/10) [RFC-001] Define semantics of unexpected body
- [(747)](https://github.com/comit-network/comit-rs/issues/747) ⚗️ Find a good name for LQS
- [(743)](https://github.com/comit-network/comit-rs/pull/743) Fix RLP encoding error
- [(740)](https://github.com/comit-network/comit-rs/issues/740) Random RLP encoding failure
- [(727)](https://github.com/comit-network/comit-rs/issues/727) LQS client test is not testing correctly
- [(717)](https://github.com/comit-network/comit-rs/issues/717) use bitcoin_support::Blocks type...
- [(711)](https://github.com/comit-network/comit-rs/issues/711) get level from config file once implemented with #136...
- [(697)](https://github.com/comit-network/comit-rs/issues/697) Install sccache from crates.io again
- [(694)](https://github.com/comit-network/comit-rs/issues/694) ⚗️ Minimalistic UI
- [(679)](https://github.com/comit-network/comit-rs/issues/679) Use absolute timelocks in HTLCs
- [(668)](https://github.com/comit-network/comit-rs/issues/668) Implement the noise handshake protocol
- [(609)](https://github.com/comit-network/comit-rs/issues/609) All swap parameters should be set by Alice
- [(593)](https://github.com/comit-network/comit-rs/issues/593) Dry test needs to be split up
- [(584)](https://github.com/comit-network/comit-rs/issues/584) Log 500 errors
- [(319)](https://github.com/comit-network/comit-rs/issues/319) Don't block thread when making new connection in BamClientPool

##### Sprint 9
- [(789)](https://github.com/comit-network/comit-rs/pull/789) Fix warning in build process
- [(781)](https://github.com/comit-network/comit-rs/issues/781) Get the actual asset out of response from btsieve...
- [(777)](https://github.com/comit-network/comit-rs/issues/777) GET /swaps/rfc003/:id does not return transaction IDs
- [(775)](https://github.com/comit-network/comit-rs/issues/775) Polish swap response in HTTP API
- [(770)](https://github.com/comit-network/comit-rs/issues/770) Fix up "WIP" for mergify/wafflebot
- [(768)](https://github.com/comit-network/comit-rs/issues/768) Remove "regtest" definition from JS test suite
- [(765)](https://github.com/comit-network/comit-rs/issues/765) Don't unwrap in constructor of `SwapDescription`
- [(763)](https://github.com/comit-network/comit-rs/issues/763) Deployment and funding transactions not always available
- [(756)](https://github.com/comit-network/comit-rs/pull/756) A significant Refactor of Ledger Query Service Client
- [(750)](https://github.com/comit-network/comit-rs/pull/750) Resolve TODO
- [(749)](https://github.com/comit-network/comit-rs/issues/749) Rename ledger_query_service to btsieve
- [(739)](https://github.com/comit-network/comit-rs/issues/739) ⚗️Libp2p to replace network layer?
- [(734)](https://github.com/comit-network/comit-rs/issues/734) Travis doesn't run Rust Doc-tests
- [(723)](https://github.com/comit-network/comit-rs/issues/723) return TransactionReceipt and not Transaction.
- [(700)](https://github.com/comit-network/comit-rs/issues/700) Decide what happens when response fails to deserialize...
- [(699)](https://github.com/comit-network/comit-rs/issues/699) All of this should be under #[cfg(test)]...
- [(693)](https://github.com/comit-network/comit-rs/issues/693) Extend response of HTTP GET for a single swap
- [(691)](https://github.com/comit-network/comit-rs/issues/691) Transfer omnicoins via HTLC or Multi-input Tx
- [(665)](https://github.com/comit-network/comit-rs/issues/665) ⚗️ How to realize same chain trades on Ethereum
- [(639)](https://github.com/comit-network/comit-rs/issues/639) Extract secret from transaction receipt
- [(638)](https://github.com/comit-network/comit-rs/issues/638) ERC20/ETH Htlc log needs to emit secret
- [(463)](https://github.com/comit-network/comit-rs/issues/463) Rename bitcoin/ethereum/secp256k1 crates
