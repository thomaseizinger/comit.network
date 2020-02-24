---
title:  "Connect all the Blockchains!!!"
author: philipp
author_url: https://github.com/bonomat
author_image_url: https://avatars2.githubusercontent.com/u/224613
tags: [announcement, connect-all-the-blockchains]
---

> TL;DR:
  We did the (first) Atomic Swap between Ethereum and Bitcoin (using SegWit) on both Mainnets:
  BTC funding transaction: [https://btc.com/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024](https://btc.com/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024)
  ETH contract creation: [https://etherscan.io/tx/0xab28552e19ccd3d5c0701d4a7fa471c4e99a88a270df75c9af126b39f3d14200](https://etherscan.io/tx/0xab28552e19ccd3d5c0701d4a7fa471c4e99a88a270df75c9af126b39f3d14200)
  ETH redemption: [https://etherscan.io/tx/0xd90ae78006c04b944b44a8949cc487de33f01210d127f6b4efcb2d6e1b13b03c](https://etherscan.io/tx/0xd90ae78006c04b944b44a8949cc487de33f01210d127f6b4efcb2d6e1b13b03c)
  BTC redemption: [https://btc.com/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637](https://btc.com/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637)

Since [Bitcoin](https://bitcoin.org/bitcoin.pdf)’s genesis block in 2009 a multitude of different blockchains have emerged.
Each serving different purposes, from providing the means of payment, smart contract execution, identity management, logistic tracking or securing IoT.

<!--truncate-->

We at [TenX](https://www.tenx.tech/) believe in decentralisation and sometimes we wonder why there are centralised exchanges when blockchains were created with decentralisation as a core principle.
This is why we strive to connecting all the blockchains, no matter what purpose they serve, in a decentralised manner.
Hence we recently founded the R&D Lab CoBloX in Sydney, who develops the [COMIT](http://www.comit.network/) protocol.

In this blog post we present one of the simplest ways to connect two blockchains: an Atomic Swap using HTLC (Hashed Time-Lock Contracts).
Atomic Swaps are a trustless and safe way for two parties to trade assets across different chains.
Atomic Swaps are atomic in a way that they either go through, or not at all and HTLCs provide the means to achieve this.
The idea of [Atomic Swap](https://en.wikipedia.org/wiki/Atomic_swap) is not new.
In fact, it was proposed as far back as 2013 in this [Bitcointalk thread](https://bitcointalk.org/index.php?topic=193281.msg2003765#msg2003765), yet there aren’t many clear and detailed explanations of how to do one.
So we thought it would be useful to publish a step-by-step walk-through of our proof of concept Atomic Swap across the Bitcoin and Ethereum blockchains.

// TODO: FIX-LINK
![Connect all the blockchains]({{ site.github.url }}/assets/images/2018-06/0_Kf2JbMQlRA_hhNH2.jpeg)

# Initial Communication
The approach presented below is based on the assumption that Alice and Bob want to exchange funds.
Alice wants to buy **Ethereum** for **Bitcoin** and she knows Bob who wants to receive some **Bitcoin** for his **Ethereum**.

Before sending any transactions to the blockchain, Alice and Bob have to agree on a few things:

1. The **ETH:BTC price**: a definite exchange rate between Bitcoin and Ethereum.
In this example they have agreed on 0.0785771 Bitcoin per Ethereum.
2. The **addresses** they want to receive funds to on success or failure.
These cannot be the same as on success Alice receives Ethereum but on failure she gets her Bitcoin back and vice versa for Bob.
3. The **hash** of the locking secret.
Alice generates the secret and sends the hash of it to Bob.
4. The **expiry time** of the exchange.
In this case we chose Bitcoin as 24 hours and Ethereum as 12 hours.
The particular numbers aren’t as important as their relative length.
Ethereum has to be shorter because that’s the one that Alice is redeeming.
After she reveals the secret by redeeming the Ethereum Bob needs enough time to redeem on the Bitcoin blockchain.

After agreeing to the above values, Alice and Bob will not need to communicate any more.
The rest of the protocol is carried out on the Bitcoin and Ethereum blockchain, meaning Alice and Bob can monitor both blockchains for the other party’s actions.

# Getting Started

To start the Atomic Swap, Alice needs to create the Bitcoin HTLC using the information received from Bob. Specifically, she needs:

* **Bob’s** success **pubkey-hash**: Bob will need to hold the private key of this pubkey-hash in order to redeem this HTLC.
* **Her own** refund **pubkey-hash**: in case something goes wrong, or if Alice aborts the trade, she will need this key to refund herself with the locked funds.
* The expiry time of the Bitcoin HTLC (24 hours expressed as 144 blocks).
* The **hash** of the **secret** she chose.

```
OP_IF
  OP_SHA256 [91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e]
  OP_EQUALVERIFY OP_DUP OP_HASH160 [9f4a0cf348b478336cb1d87ea4c8313a7ca3de19]
OP_ELSE
  [9000] OP_CHECKSEQUENCEVERIFY OP_DROP
  OP_DUP OP_HASH160 [65252e57f727a27f32c77098e14d88d8dbec0181]
OP_ENDIF
OP_EQUALVERIFY OP_CHECKSIG
```

Note: This HTLC is relatively simple and has been explained in detail in various other blog posts.
Hence, we do not go further in detail but refer to the original [Lightning Network](https://lightning.network/lightning-network-paper.pdf) paper and this [blog post](https://captainaltcoin.com/hashed-timelock-contract-htlc/).

Using this information, Alice can deterministically generate a P2SH address (we already moved to SegWit, hence it’s a bech32 Pay-to-Witness-Script-Hash address — **P2WSH**).

```
bc1q9szt96cq4vulpqu5m96sspcu0mt3rvv0qmwl5rxvyxejlw08zp7qnnyg3c
```

After generating the P2WSH address, Alice needs to fund it by sending the required amount on-chain.
In our case Alice sends 0.00785771 BTC and by doing, kicks off the trade.


> [https://btc.com/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024](https://btc.com/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024)


As soon as this transaction is confirmed to Bob’s satisfaction, he will need to fund his part of the trade.
It means he has to lock up funds in an Ethereum HTLC.
However, if Bob does not proceed, Alice can take her funds back in 24 hours.

# The Counterpart of the Exchange

After some time has passed (Alice’s funding transaction has enough confirmations) Bob creates an HTLC on Ethereum. He does so by taking the agreed data from Alice, in particular:

* **Alice’s** success **address**: Alice will need to hold the private key of this address in order to redeem the Ethereum HTLC later on.
* **His own** refund **address**: in case something goes wrong, or if Alice does not go through with the trade, he will receive his funds back to this address.
* The expiry timestamp of the Ethereum HTLC (12 hours in the future from the time the HTLC is constructed). The Ethereum HTLC uses an absolute timelock and not a relative one because there is no native support for relative time calculations in the EVM.
* And the **hash** of the **secret**: only known by Alice for now.

The following link shows Bob’s transaction:


> [https://etherscan.io/tx/0xab28552e19ccd3d5c0701d4a7fa471c4e99a88a270df75c9af126b39f3d14200](https://etherscan.io/tx/0xab28552e19ccd3d5c0701d4a7fa471c4e99a88a270df75c9af126b39f3d14200)



There are two important aspects about this transaction:

1. The transaction deploys a new contract.
2. The transaction transfers 0.1 ETH to the contract.

In order to understand how Alice can redeem the funds, we need to take a look at Bob’s smart contract.
Bob is a very cautious person and he doesn’t like Solidity very much.
He has heard too many stories about bugs and exploits in Solidity contracts in order to trust them (MultiSig Hack [1](https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7) and [2](https://blog.zeppelinos.org/parity-wallet-hack-reloaded/)).
For this reason, Bob decided to write his smart contract directly in [EVM Assembly](https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md) instead of Solidity.
Note that Solidity code does get compiled to EVM (Ethereum Virtual Machine) Assembly.

Through the nature of blockchain, smart contracts cannot be changed after their deployment.
Thus, patching them is very hard if not impossible.
As a result, even small bugs can have severe consequences.
In order to mitigate this risk, our Atomic Swap uses disposable contracts:

* For each trade, a new smart contract is deployed.
* Our smart contracts are not and cannot be shared between trades.
* Once a trade is completed, the associated smart contract self-destructs and thus, its lifetime ends.

These design decisions imply interesting and, in our opinion, very desirable properties.


## 1. We can patch our contracts
If we discover a bug in our smart contract, we can simply release a new version of our software with an updated version of the contract template:

* Trades completed before the introduction of the bug are not affected as their smart contracts would already be self-destructed.
* Newly created trades use the new version of the contract and are thus also not affected.
* Only trades made when the buggy software is deployed would be affected.
Moreover, as each trade has their own smart contract, they would have to be exploited one by one.

## 2. The contracts are simple, cost-effective and secure

Through the short life time and one-time use of the contracts, their code gets much simpler. This allows us to completely avoid Solidity and write the contracts purely in EVM assembly code. In addition, we can optimise gas usage of the contract. Finally, simpler code is easier to understand and debug, limiting the risk of bugs and exploits.

These properties makes Bob’s smart contract quite atypical as Ethereum smart contracts are usually written in Solidity and carry state over a longer period of time.

***

Let’s dive into the contract code to figure out how it actually works. [In Bob’s first transaction](https://etherscan.io/tx/0xab28552e19ccd3d5c0701d4a7fa471c4e99a88a270df75c9af126b39f3d14200), we can see that the following EVM code is executed:

```
0x607c600c600039607c6000f3602060006000376020602160206000600060026048f17f91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e6021511416604e57635b2e7d47421160655760006000f35b735acbf79d0cf4139a6c3eca85b41ce2bd23ced04fff5b730a81e8be41b21f651a71aab1a85c6813b8bbccf8ff
```

[This repository](https://github.com/CoinCulture/evm-tools) contains some very useful tools for inspecting and debugging EVM code along with a comprehensive [guide](https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md) on how to use them.
For this blogpost though, we will only use disasm to decode the code back into opcodes:

```bash
➜ ~ echo "607c600c600039607c6000f3602060006000376020602160206000600060026048f17f91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e6021511416604e57635b2e7d47421160655760006000f35b735acbf79d0cf4139a6c3eca85b41ce2bd23ced04fff5b730a81e8be41b21f651a71aab1a85c6813b8bbccf8ff" | disasm
0      PUSH1  => 7c
2      PUSH1  => 0c
4      PUSH1  => 00
6      CODECOPY
7      PUSH1  => 7c
9      PUSH1  => 00
11     RETURN
12     PUSH1  => 20
14     PUSH1  => 00
16     PUSH1  => 00
18     CALLDATACOPY
19     PUSH1  => 20
21     PUSH1  => 21
23     PUSH1  => 20
25     PUSH1  => 00
27     PUSH1  => 00
29     PUSH1  => 02
31     PUSH1  => 48
33     CALL
34     PUSH32  => 91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e
67     PUSH1  => 21
69     MLOAD
70     EQ
71     AND
72     PUSH1  => 4e
74     JUMPI
75     PUSH4  => 5b2e7d47
80     TIMESTAMP
81     GT
82     PUSH1  => 65
84     JUMPI
85     PUSH1  => 00
87     PUSH1  => 00
89     RETURN
90     JUMPDEST
91     PUSH20  => 5acbf79d0cf4139a6c3eca85b41ce2bd23ced04f
112    SUICIDE
113    JUMPDEST
114    PUSH20  => 0a81e8be41b21f651a71aab1a85c6813b8bbccf8
135    SUICIDE
```

The instructions `0` to `11` should look familiar to any smart contract developer. They represent the so-called deploy-header of the contract.
It specifies that code-block `0x0c` to `0x7c` is copied into memory and then returned from the function. The returned code block contains the code of the smart contract.

Thus, the code of the actual HTLC starts at position `12` (or `0x0c` in hex).
Let’s look at the code of the deployed smart contract:

```
0      PUSH1  => 20
2      PUSH1  => 00
4      PUSH1  => 00
6      CALLDATACOPY
7      PUSH1  => 20
9      PUSH1  => 21
11     PUSH1  => 20
13     PUSH1  => 00
15     PUSH1  => 00
17     PUSH1  => 02
19     PUSH1  => 48
21     CALL
22     PUSH32  => 91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e
55     PUSH1  => 21
57     MLOAD
58     EQ
59     AND
60     PUSH1  => 4e
62     JUMPI
63     PUSH4  => 5b2e7d47
68     TIMESTAMP
69     GT
70     PUSH1  => 65
72     JUMPI
73     PUSH1  => 00
75     PUSH1  => 00
77     RETURN
78     JUMPDEST
79     PUSH20  => 5acbf79d0cf4139a6c3eca85b41ce2bd23ced04f
100    SUICIDE
101    JUMPDEST
102    PUSH20  => 0a81e8be41b21f651a71aab1a85c6813b8bbccf8
123    SUICIDE
```

For Solidity smart contracts, the compiler will generate an ABI ([Application Binary Interface](http://solidity.readthedocs.io/en/v0.4.24/abi-spec.html) which is essentially a big switch statement that determines which function should be called.
As our smart contract is only a single function, we can skip the ABI and directly write the code we want to execute.

Here is the pseudo-code of deployed contract:

```
IF hash(‘preimage_candidate’) == stored_hash_value
  PAY ALICE
ELSE IF current_time > expiry_timestamp
  PAY BOB
```

Let’s see how this translates to EVM assembly.

In order to compare the preimage that is provided by the caller to the hash-value that is embedded in the contract, we first need to load it.
For this, we use the `CALLDATACOPY` instruction.
It copies data from the input into the memory of the smart contract execution environment.
The three `PUSH`  instructions are the arguments to `CALLDATACOPY` in reversed order (remember that EVM-assembly is a stack-based language).

```
0      PUSH1  => 20
2      PUSH1  => 00
4      PUSH1  => 00
6      CALLDATACOPY
```

As you can see [here](http://solidity.readthedocs.io/en/v0.4.24/assembly.html#opcodes), the three arguments to `CALLDATACOPY` describe the following:

1. How many bytes to read from the calldata (`0x20` = `32)
2. Where to read from in the calldata (0x00 = 0, i.e. from the start)
3. Where in memory to store the read data (0x00 = 0)

Therefore, `CALLDATACOPY` will read 32 bytes from the calldata and copy them to the memory position `0x00` to `0x20`.

Next, we need to hash the provided preimage.
Unfortunately, the version of SHA256 that is provided natively in EVM assembly [is not the official one](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub) but one that is known as keccak256.
In order for the Atomic Swap to work, we need to use the same hash function on both blockchains.
On Bitcoin, we used the official SHA256.
This one is provided as a pre-compiled contract on Ethereum under this address:

```
0x0000000000000000000000000000000000000002
```

_For more information on pre-compiled contracts, see the [yellow paper](https://ethereum.github.io/yellowpaper/paper.pdf,), Chapter 8._

Because of the leading zeros, we don’t have to push the full 20 bytes of the address to the stack but can just push the value `0x02`.
Again, all the `PUSH` instructions are arguments to the `CALL` function.
See the [documentation](http://solidity.readthedocs.io/en/v0.4.24/assembly.html#opcodes) for a detailed explanation of the arguments.

```
7      PUSH1  => 20
9      PUSH1  => 21
11     PUSH1  => 20
13     PUSH1  => 00
15     PUSH1  => 00
17     PUSH1  => 02
19     PUSH1  => 48
21     CALL
```

`CALL` either pushes `1` or `0` onto the stack, depending on whether or not the execution of the smart contract function was successful.

The next instruction is where it gets interesting:


```
22     PUSH32  => 91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e
```

This pushes the hash-value onto the stack that the given preimage will be compared to.
This is the same hash-value that Alice used in the BTC HTLC.
The hashed value of the preimage has been written to the memory by the `CALL` instruction, so in order to compare it to this one, we need to read it from memory.

```
55     PUSH1  => 21
57     MLOAD
```

`MLOAD` reads exactly `32` bytes (how convenient!) and puts them on the stack. `0x21` is the position in memory that `MLOAD` will read.
This is the same position that we provided to `CALL` as the return buffer.
If this call is successful, our stack looks like this:

```
91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e
91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e
1
```

The first value is what `MLOAD` loaded from memory. The second one was pushed to the stack by our instruction on position `22`.
The third one is the return value of the `CALL` instruction: 1 represents a successful invocation.

Now that we have both values on our stack, we simply call the `EQ` instruction to compare them. `EQ, similar to `CALL`, pushes either `1` or `0` onto the stack as the result of the execution.
If the value provided to the contract is actually the preimage of the embedded hash, the stack looks like this after the execution:


```
1 # result of EQ instruction
1 # result of CALL instruction
```

In order to be sure that we only proceed if the call to the pre-compiled contract was also successful, we apply the `AND` instruction next.
If any of the two instructions failed (i.e. any of them yielded `0`), this will result in `0` being pushed to the stack.

If the resulting value on the stack is `1`, the caller provided the correct preimage. In this case, the funds stored in the contract should be transferred to Alice. Because EVM assembly is a stack-based language, we need to make use of a conditional jump to execute alternative code paths.

```
60     PUSH1  => 4e
62     JUMPI
```

`JUMPI` consumes two values from the stack: a code position and a condition.
If the condition is `1`, execution will continue at the designated code position, otherwise the execution continues with the next instruction after the `JUMPI` instruction.
For our smart contract, this means that if the comparison was successful (i.e. `EQ` yielded `1`), execution will be continued at code position `0x4e` (`79` in decimal).

_Sidenote: The EVM does not allow arbitrary jumps but only to `JUMPDEST` instructions._

```
78     JUMPDEST
79     PUSH20  => 5acbf79d0cf4139a6c3eca85b41ce2bd23ced04f
100    SUICIDE
```

The code path from there is very simple. All we do is push an address to the stack and call `SUICIDE`.
This transfers all the money that is currently stored in the contract to the address that we just pushed and destroys the contract.

It is important to note that Alice’s address is hard-coded in the smart contract. This means no matter who calls the contract with the correct preimage, the money will always be transferred to Alice.

That was only one of three possible code paths of the contract. Let’s jump (pun intended) back to the instruction at position 62. If the comparison between the hashed and the embedded value fails, the EQ instruction pushes `0` to the stack.
If `JUMPI` encounters a `0`, it simply does nothing and execution continues with the next instruction after the `JUMPI` instruction.

Now, if the comparison was not successful, we need to check if the time-lock has already expired in order to refund the locked up money.

```
63     PUSH4  => 5b2e7d47
68     TIMESTAMP
69     GT
```

The `GT` instruction then pops two items from the stack and compares if the first one is greater than the second one.
In our case, the current timestamp is compared against the value `0x5b2e7d47`. In decimal: `1529773383` (epoch), which gives us `2018–06–23T17:03:03+00:00`.

The `GT` instruction pushes `1` to the stack if the value is actually greater and `0` if it is not.
This means that after *17:03* on the *June, 23rd 2018*, Bob would be able to re-claim the money in the smart contract.

Similar to the comparison of the hashed preimage, we push an address to the stack and perform a conditional jump.

```
70     PUSH1  => 65
72     JUMPI
```
This time, we jump to instruction at code position 0x65 or in decimal: 101.

```
101    JUMPDEST
102    PUSH20  => 0a81e8be41b21f651a71aab1a85c6813b8bbccf8
123    SUICIDE
```

The resulting code path pushes Bob’s address to the stack and performs a `SUICIDE`.

If the `GT` instruction yields `0` instead of `1`, meaning the time-lock has not yet expired, execution continues with the instructions followed by the `JUMPI` instruction:

```
73     PUSH1  => 00
75     PUSH1  => 00
77     RETURN
```

In this case, we simply return and therefore stop the execution of the contract.

In the transaction that is [linked above](https://etherscan.io/tx/0xab28552e19ccd3d5c0701d4a7fa471c4e99a88a270df75c9af126b39f3d14200), all that happens is that this contract is deployed.
This contract will be executed when a (redeem) transaction is sent to it.
It is the next step of the Atomic Swap, explained below.

# Redeeming the HTLCs
Once Alice has funded the Bitcoin HTLC, she monitors the Ethereum blockchain for the deployment of the smart contract. Once she sees Bob deploys it, all she has to do is send a transaction to the contract, passing the secret in the transaction data. The following link shows this transaction:


> [https://etherscan.io/tx/0xd90ae78006c04b944b44a8949cc487de33f01210d127f6b4efcb2d6e1b13b03c](https://etherscan.io/tx/0xd90ae78006c04b944b44a8949cc487de33f01210d127f6b4efcb2d6e1b13b03c)


The important part of this transaction is that it publicly reveals the secret that Alice chose at the start of the Atomic Swap. Alice has to pass the secret to redeem her ETH. Otherwise, the code path that transfers money to her account will not be executed.

As Bob is also monitoring the Ethereum Blockchain, he will learn the secret as soon as Alice redeems her funds from the Ethereum HTLC.

Bob sees Alice’s redeem transaction and extracts the secret from it:

```
ec9e9fb3c669b2354ea026ab3da82968a2e7ab9398d5cbed4e78e47246f2423e
```
With this information, and his public key, he can now redeem the Bitcoin HTLC. This can be seen in the following transaction:


> [https://btc.com/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637](https://btc.com/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637)

More specifically, Bob sends a transaction with the following witness:

```
3045022100d780139514f39ed943179e4638a519101bae875ec1220b226002bcbcb147830b0220273d1efb1514a77ee3dd4adee0e896b7e76be56c6d8e73470ae9bd91c91d700c01
0344f8f459494f74ebb87464de9b74cdba3709692df4661159857988966f94262f
ec9e9fb3c669b2354ea026ab3da82968a2e7ab9398d5cbed4e78e47246f2423e
01
63a82091d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e8876a9149f4a0cf348b478336cb1d87ea4c8313a7ca3de1967029000b27576a91465252e57f727a27f32c77098e14d88d8dbec01816888ac
```
The first two lines are his signature and public key. The third line is the secret followed by `01` to execute the correct `if` branch in the HTLC.

The trade is now complete: Alice received the ETH funds and Bob received the BTC funds.

Here is the list of all the transactions forming the Atomic Swap:

1. BTC funding transaction: [ad067ee417...6fe024](https://btc.com/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024)
2. ETH contract creation transaction: [0xab28552e19...14200](https://etherscan.io/tx/0xab28552e19ccd3d5c0701d4a7fa471c4e99a88a270df75c9af126b39f3d14200)
3. ETH redemption transaction: [0xd90ae78006...3b03c](https://etherscan.io/tx/0xd90ae78006c04b944b44a8949cc487de33f01210d127f6b4efcb2d6e1b13b03c)
4. BTC redemption transaction: [5800c704f1...a4637](https://btc.com/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637)


# Summary & Next Steps

In this blog post we shortly talked about an on-chain Atomic Swap between ETH and BTC (using SegWit). While it allows the implementation of various use cases, it is only a simplified version of what we want to achieve with COMIT.

This blog post marks the beginning of a series of publications. Next, we will open source our code for the on-chain Atomic Swap and describe in details the challenges we encountered. So watch this space ;)

You can also expect more blog posts about layer-2 channels and [COMIT](http://www.comit.network/) itself: The *Cryptographically-secure Off-chain Multi-asset Instant Transaction* protocol.

# Who are we?
Well done for reading this far! You deserve to know who we are: CoBloX is the TenX Research and Development Lab. Our name stands for *CO*MIT, *Bl*ockchain and Ten*X*.

Our mission is to develop the COMIT protocol and perform cutting edge research in the area of Blockchain technologies. The team is located in Sydney, Australia and loves to tackle research challenges, produce high quality code and enjoy Sydney’s craft beer scene.

With love from [Franck Royer](https://www.twitter/dantounet), [Lloyd Fournier](https://twitter.com/LLFOURN)
, [Thomas Eizinger](https://twitter.com/oetzn) and [Philipp Hoenisch](https://twitter.com/bonomat) → the CoBloX Team
