---
layout: post
title:  "A closer look on Bitcoin scripts"
author: daniel
categories: [ ]
image: assets/images/2019-07/BlogPost-LetsTalkStack.png
featured: false
hidden: false
comments: true
---

> sknab rof tuoliab dnoces fo knirb no rollecnahC 9002/naJ/30 semiT ehT
>
> — *[Satoshi Nakamoto](https://github.com/trottier/original-bitcoin/blob/master/src/main.cpp#L1442)*

When I started at CoBloX a few weeks back, I faced a steep learning curve to master the [RFC documenting the SWAP-Basic protocol](https://github.com/comit-network/RFCs/blob/master/RFC-005-SWAP-Basic-Bitcoin.md).
It's been almost a year that we published our [original blog post]({% post_url 2018-06-23-connect-all-the-blockchains %}).
It described how HTLCs work and how they can be facilitated for atomic swaps between two blockchains.
However, this blog post lacks the explanation of the Bitcoin HTLC, i.e. how the stack-based scripting language allows us to create HTLCs on the Bitcoin blockchain.
Within this blog post I want to follow up on CoBloX's original promise:

> To bring back knowledge and learnings back to the community.

<!--truncate-->

For the sake of completion I will use the script of the [original blogpost by Philipp]({% post_url 2018-06-23-connect-all-the-blockchains %}) as example for my explanations here.
Note, that this script has slightly changed.
The changes will shortly be explained in the last section of this post.

This blog post does assume a basic understanding of Bitcoin's input/output transaction system.
If you are not familiar with this you may like to read up on [Bitcoin transactions](https://en.bitcoin.it/wiki/Transaction) before reading on.

### Some general notes on Bitcoin scripts

In short _Bitcoin Script_ is a turing-incomplete stack-based language of op-codes that allows to specify instructions on how the output of a transaction can be unlocked.

The first location to look for information on Bitcoin Script should be the [Bitcoin Script documentation](https://en.bitcoin.it/wiki/Script), the section on op-codes is especially helpful to get an overview on what is possible.

In order to get a quick but thorough introduction into Bitcoin scripting I can recommend [Blockgeek's tutorial](https://blockgeeks.com/guides/best-bitcoin-script-guide/).
If you want to dive deep and really get to the guts of it, I strongly recommend looking at ChistopherA's [Learning-Bitcoin-from-the-Command-Line](https://github.com/ChristopherA/Learning-Bitcoin-from-the-Command-Line) repository.
It is a wonderful fountain of knowledge.

Besides this, two other really helpful tools are:
1. [libbitcoin explorer](https://github.com/libbitcoin/libbitcoin-explorer)'s [script-decode](https://github.com/libbitcoin/libbitcoin-explorer/wiki/bx-script-decode) function allows you to decode scripts extracted from a transaction into op-codes.
Note that [this website](http://chainquery.com/bitcoin-api/decodescript) offers similar functionality.
2. The [Bitcoin script debugger](https://github.com/kallewoof/btcdeb) allows you to actually step through script code step-by-step.
This is especially helpful if you are not used to stack-based languages.

### Where do we find scripts on chain?

Let's first do a very quick recap of how an atomic swap works in COMIT - Bitcoin and Ether will be used as examples:
1. Alice sends a swap request for exchanging 1 Bitcoin to 10 Ether to Bob
2. Bob accepts the swap request
3. Alice funds the HTLC on Bitcoin (she locks 1 Bitcoin in a transaction locked by the Bitcoin script)
4. Bob funds an HTLC on Ethereum (he locks 10 Ether in an Ethereum smart contract )
5. Alice redeems the 10 Ether and reveals the secret
6. Bob redeems the 1 Bitcoin using the secret revealed by Alice

This is just a very basic summary of a successful swap, you can find more details in the [SWAP-Basic protocol specification](https://github.com/comit-network/RFCs/blob/master/RFC-003-SWAP-Basic.md).

What is relevant for this blog post? - The fund and redeem transaction of the first COMIT atomic swap on Bitcoin.
The Ethereum fund and redeem transaction are not considered further in this blogpost, if you are interested you can take a look at the [original blogpost by Philipp]({% post_url 2018-06-23-connect-all-the-blockchains %}) were they are described in more detail.

From [Philipp's original blogpost]({% post_url 2018-06-23-connect-all-the-blockchains %}) we know the Bitcoin transaction hashes, so we can easily find the transactions using any Bitcoin block-explorer:

- Fund transaction: [https://btc.com/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024](https://btc.com/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024)
- Redeem transaction: [https://btc.com/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637](https://btc.com/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637)

In the links above the blockchain explorer already extracts a lot of information for us.
Since we want to really look into the guts, let's have a look at the raw transaction:

- Raw fund transaction: [https://blockchain.info/rawtx/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024](https://blockchain.info/rawtx/ad067ee417ee5518122374307d1fa494c67e30c75d38c7061d944b59e56fe024)
- Raw redeem transaction: [https://blockchain.info/rawtx/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637](https://blockchain.info/rawtx/5800c704f139e388d4146be7110294470c8c17b34488544863a535d2346a4637)

#### Fund transaction

The fund transaction has only one part that is of specific interest for this example.
It specifies the script-hash of the script that will unlock the output for redeeming the transaction:

```json
{
   ...
   "out":[
      ...
      {
         ...
         "script":"00202c04b2eb00ab39f08394d97508071c7ed711b18f06ddfa0ccc21b32fb9e7107c"
      }
   ],
   ...
}
```

This specifies the hash of the output script, henceforth referred to as the script-hash, that is used to spend from this transaction.
In order to spend from this transaction Bob has to provide a (un-hashed) script which, when hashed, matches the script-hash as specified in the fund transaction.
Thus Bob's redeem transaction must contain the script code.
The unlocked output of the fund transaction will then be the input for the redeem transaction (hence giving Bob access to the Bitcoins that Alice locked).

Note that Alice would have to provide the script in exactly the same way as Bob in order to redeem, because matching against the script-hash also applies to her upon refund.
However, the parameters she would provide in addition to the script would differ from the ones Bob provides.
The next section will add some details to that.

#### Redeem transaction

The redeem transaction has several parts that are of interest.
First, of course, we can find our script-hash from the output section of the fund transaction there; furthermore you can notice that the actual input script is empty:

```json
{
   ...
   "inputs":[
      {
         ...
         "prev_out":{
            ...
            "script":"00202c04b2eb00ab39f08394d97508071c7ed711b18f06ddfa0ccc21b32fb9e7107c"
         },
         "script":""
      }
   ],
   ...
}
```

The input script is empty because this is a [witness-transaction](https://en.bitcoin.it/wiki/Segregated_Witness), thus the script-parameters and the script itself are specified in the `witness` field:
```json
{
   ...
   "inputs":[
      {
         ...
         "witness":"05483045022100d780139514f39ed943179e4638a519101bae875ec1220b226002bcbcb147830b0220273d1efb1514a77ee3dd4adee0e896b7e76be56c6d8e73470ae9bd91c91d700c01210344f8f459494f74ebb87464de9b74cdba3709692df4661159857988966f94262f20ec9e9fb3c669b2354ea026ab3da82968a2e7ab9398d5cbed4e78e47246f2423e01015b63a82091d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e8876a9149f4a0cf348b478336cb1d87ea4c8313a7ca3de1967029000b27576a91465252e57f727a27f32c77098e14d88d8dbec01816888ac",
         "prev_out":{
            ...
            "script":"00202c04b2eb00ab39f08394d97508071c7ed711b18f06ddfa0ccc21b32fb9e7107c"
         },
         "script":""
      }
   ],
   ...
}
```

Isn't that quite a beautiful piece of HEX-encoded sausage?
But where actually is our script?
Let's cut that sausage into its delicious pieces!
But before we do so, let's remember which parameters Bob actually has to pass to the script to redeem his Bitcoin:
1. The redeem script itself
2. The byte to decide if we are redeeming or refunding ('01' for redeem).
3. The secret (that was revealed by Alice)
4. The pubkey that proves that the redeemer is Bob
5. The signature of the redeemer pubkey


Here is the breakdown of our HEX-sausage:
```text
// 5 parameters
05

	// length of 1st param (signature)
	48
		// signature
		3045022100d780139514f39ed943179e4638a519101bae875ec1220b226002bcbcb147830b0220273d1efb1514a77ee3dd4adee0e896b7e76be56c6d8e73470ae9bd91c91d700c01

	// length of 2nd param (pubkey)
	21
		// pubkey
		0344f8f459494f74ebb87464de9b74cdba3709692df4661159857988966f94262f

	// length of 3rd param (hash of secret)
	20
		// secret
		ec9e9fb3c669b2354ea026ab3da82968a2e7ab9398d5cbed4e78e47246f2423e

	// length of 4th param (byte, to defice OPIF redeem OP_ELSE refund)
	01
		// byte, set to redeem
		01

	// length of 5th param (script)
	5b
		// script
		63a82091d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e8876a9149f4a0cf348b478336cb1d87ea4c8313a7ca3de1967029000b27576a91465252e57f727a27f32c77098e14d88d8dbec01816888ac
```

Keep in mind that the `script` and `secret` parameters as provided in the redeem transaction above are HEX-encoded, but not hashed.
When we decode the `script` parameter we actually get the human-redable op-codes.
In the next section we decode and evaluate the script.

### Decode the script into something more readable

One way to decode the script code from HEX is [libbitcoin explorer](https://github.com/libbitcoin/libbitcoin-explorer)'s [script-decode](https://github.com/libbitcoin/libbitcoin-explorer/wiki/bx-script-decode) function:
```text
bx script-decode 63a82091d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e8876a9149f4a0cf348b478336cb1d87ea4c8313a7ca3de1967029000b27576a91465252e57f727a27f32c77098e14d88d8dbec01816888ac
```

The (properly formatted) result looks like this:
```text
if
    sha256 [91d6a24697ed31932537ae598d3de3131e1fcd0641b9ac4be7afcb376386d71e] equalverify
    dup hash160 [9f4a0cf348b478336cb1d87ea4c8313a7ca3de19]
else
    [9000] checksequenceverify drop
    dup hash160 [65252e57f727a27f32c77098e14d88d8dbec0181]
endif
equalverify
checksig
```

Readable, but what does it actually mean? Time to push ourselves on the stack train!

### Script evaluation - Let's talk stack!

We have to "think stack-language" in order to understand the script evaluation.
Stack based languages are, as the name suggests, based on the stack data structure.
A stack being defined as a First In Last Out (FILO) queue.
In order to remove an element from a stack you `pop` it off the top.
Adding an element is done by `push`ing onto the top.

Remember, we had 5 parameters in the witness block of the transaction:
1. The **script** itself.
2. The **byte** that decide if we are redeeming or refunding ('01' for redeem).
3. The **secret** (that was revealed by Alice).
4. The **pubkey** that proves that the redeemer is Bob.
5. The **signature** of the redeemer pubkey.

Quick recap on pubkey and signature: Bob has to prove that he actually is the redeem party of the swap that redeems.
The redeem and refund identity-hashes are exchanged between Alice and Bob prior to creating the HTLCs.
Both parties can reproduce the HTLC in exactly the same way.
Only Alice can provide the signature for the refund pubkey, only Bob can provide the signature for the redeem pubkey.
More details in the [SWAP-Basic protocol specification](https://github.com/comit-network/RFCs/blob/master/RFC-003-SWAP-Basic.md).

Assuming that we already popped the script as our top element, in order to evaluate it, we now have the remaining four parameters on the stack.
Note, that the script is also hashed and compared against the script hash that was put into the fund transaction.
Both Alice and Bob have to be able to produce the exact same script, but the parameters they provide to the script are different.

So we currently have the following concrete elements on the stack:

| Element | Value |
| :--- | :--- |
| byte | `01` |
| secret | `ec9e9fb3c669b2354ea026ab3da82968a2e7ab9398d5cbed4e78e47246f2423e` |
| pubkey | `0344f8f459494f74ebb87464de9b74cdba3709692df4661159857988966f94262f` |
| signature | `3045022100d780139514f39ed943179e4638a519101bae875ec1220b226002bcbcb147830b0220273d1efb1514a77ee3dd4adee0e896b7e76be56c6d8e73470ae9bd91c91d700c01` |

Let's step through the script as it is redeemed for Bob.
The current top element (we already popped the script-hash remember) is the byte that decides if we want to redeem or refund.
The following table shortens all values to 4 positions for readability.
The op-code `OP_EQUALVERIFY` is broken down to `OP_EQUAL` and `OP_VERIFY` for making the steps easier to understand.

<table border="1" rules="rows">
<thead>
<tr><th scope="col">script line</th><th scope="col">op-code</th><th scope="col">stack before </th><th scope="col" >stack vals</th><th scope="col">what's going on</th><th scope="col">stack change</th></tr>
</thead>
<tbody>
<tr valign="top"><td> <code>if</code></td><td> <code>OP_IF</code></td><td> byte<br></br>secret<br></br>pubkey<br></br>signature </td><td> <code>01</code><br></br><code>ec9e...</code><br></br><code>0344...</code><br></br><code>3045...</code> </td><td> top elem == <code>01</code><br></br>enter if block<br></br>pop</td><td><strike>byte</strike><br></br>secret<br></br>pubkey<br></br>signature  </td></tr>
<tr valign="top"><td > <code>sha256 [91d6...] equalverify</code> </td><td> <code>OP_SHA256</code>   </td><td> secret<br></br>pubkey<br></br>signature </td><td> <code>ec9e...</code><br></br><code>0344...</code><br></br><code>3045...</code>   </td><td> hash top elem</td><td><b>h(</b> secret<b>)</b><br></br>pubkey<br></br>signature</td></tr>
<tr valign="top"><td ></td><td> <code>[91d6...]</code>   </td><td> h(secret)<br></br>pubkey<br></br>signature   </td><td> <code>91d6...</code><br></br><code>0344...</code><br></br><code>3045...</code>   </td><td> push constant</td><td><b>secret-hash</b><br></br>h(secret)<br></br>pubkey<br></br>signature</td></tr>
<tr valign="top"><td ></td><td> <code>OP_EQUAL</code></td><td> secret-hash<br></br>h(secret)<br></br>pubkey<br></br>signature </td><td> <code>91d6...</code><br></br><code>91d6...</code><br></br><code>0344...</code><br></br><code>3045...</code>   </td><td> pop top 2 elems<br></br>compare<br></br>push result </td><td><b>equal-result</b><br></br><strike>secret-hash</strike><br></br><strike>h(secret)</strike><br></br>pubkey<br></br>signature</td></tr>
<tr valign="top"><td ></td><td> <code>OP_VERIFY</code>   </td><td> equal-result<br></br>pubkey<br></br>signature</td><td> <code>01</code><br></br><code>0344...</code><br></br><code>3045...</code></td><td> top elem != <code>0</code><br></br>pop</td><td><strike>equal-result</strike><br></br>pubkey<br></br>signature </td></tr>
<tr valign="top"><td > <code>dup hash160 [9f4a0...]</code></td><td> <code>OP_DUP</code></td><td> pubkey<br></br>signature </td><td> <code>0344...</code><br></br><code>3045...</code> </td><td> duplicate top elem<br></br>push on stack  </td><td><b>pubkey</b><br></br>pubkey<br></br>signature</td></tr>
<tr valign="top"><td ></td><td> <code>OP_HASH160</code>  </td><td> pubkey<br></br>pubkey<br></br>signature </td><td> <code>0344...</code><br></br><code>0344...</code><br></br><code>3045...</code>   </td><td> hash top elem twice</td><td><b>h</b> (pubkey<b>)</b><br></br>pubkey<br></br>signature</td></tr>
<tr valign="top"><td ></td><td> <code>[9f4a0...]</code>  </td><td> h(pubkey)<br></br>pubkey<br></br>signature   </td><td> <code>9f4a0...</code><br></br><code>0344...</code><br></br><code>3045...</code>  </td><td> push constant   </td><td><b>pubkey-hash</b><br></br>h(pubkey)<br></br>pubkey<br></br>signature</td></tr>
<tr valign="top"><td><code>equalverify</code></td><td> <code>OP_EQUAL</code></td><td> pubkey-hash<br></br>h(pubkey)<br></br>pubkey<br></br>signature </td><td> <code>9f4a0...</code><br></br><code>9f4a0...</code><br></br><code>0344...</code><br></br><code>3045...</code> </td><td> pop top 2 elems<br></br>compare<br></br>push result </td><td><b>equal-result</b><br></br><strike>pubkey-hash</strike><br></br><strike>h(pubkey)</strike><br></br>pubkey<br></br>signature  </td></tr>
<tr valign="top"><td ></td><td> <code>OP_VERIFY</code>   </td><td> equal-result<br></br>pubkey<br></br>signature</td><td> <code>01</code><br></br><code>0344...</code><br></br><code>3045...</code></td><td> top elem != <code>0</code><br></br>pop</td><td><strike>equal-result</strike><br></br>pubkey<br></br>signature </td></tr>
<tr valign="top"><td> <code>checksig</code></td><td > <code>OP_CHECKSIG</code> </td><td> pubkey<br></br>signature </td><td> <code>0344...</code><br></br><code>3045...</code> </td><td> <a href="https://en.bitcoin.it/wiki/OP_CHECKSIG">check signature</a></td><td><strike>pubkey</strike><br></br><strike>signature</strike> </td></tr>
</tbody>
</table>
<br></br>

Note that because Bob is redeeming the else block is ignored.
If Alice would trigger a refund the `byte` would be set to `00` and the `else` block would be executed.
Of course, the parameters for refund would be different; Alice just has to provide `pubkey` and `signature` in order to refund.
However, the contract would use `OP_CHECKLOCKTIMEVERIFY` to verify that the time sequence set in the contract (`[9000]`) has passed.

If you want to have an interactive step-through you may want to check out the [Bitcoin script debugger](https://github.com/kallewoof/btcdeb).
You can pass the complete transaction to it, it will automatically extract the script and you can then step through each op-code to understand what is going on.

### Quick recap and current version of the HTLC script

We took a look at the actual Bitcoin transactions of an atomic swap and were able to identify the HTLC and its parameters.
After decoding the script we stepped through the evaluation process of unlocking the fund transaction output for the redeem transaction input.

I hope you got a better understanding of how the Bitcoin HTLC script works under the hood and how to find it in a Bitcoin transaction.

A final note: Apart from the notation being a little bit more abstract, the current version of the HTLC, as defined in the [Bitcoin SWAP-Basic RFC](https://github.com/comit-network/RFCs/blob/master/RFC-005-SWAP-Basic-Bitcoin.md), is slightly different:

```text
OP_IF
    OP_SIZE 32 OP_EQUALVERIFY
    OP_SHA256 <secret_hash> OP_EQUALVERIFY
    OP_DUP OP_HASH160 <redeem_identity>
OP_ELSE
    <expiry> OP_CHECKLOCKTIMEVERIFY OP_DROP
    OP_DUP OP_HASH160 <refund_identity>
OP_ENDIF
OP_EQUALVERIFY
OP_CHECKSIG
```

It adds an evaluation of the secret's length of 32 bytes:
```text
   OP_SIZE 32 OP_EQUALVERIFY
```

The reason why it was added is a bit tricky.
It is related to how the Ethereum contract works.
Let's take a closer look.
[Philipp's original blogpost]({% post_url 2018-06-23-connect-all-the-blockchains %}) goes into detail with the Ethereum contract, the current version can be found in the [SWAP-Basic Ethereum RFC](https://github.com/comit-network/RFCs/blob/master/RFC-007-SWAP-Basic-Ether.md).
The way the secret is extracted from the call-stack in Ethereum is like this:
```text
    // Load secret into memory
    calldatacopy(0, 0, 32)
```

This means that exactly 32 bytes are taken off the call-stack.
Without the `OP_SIZE 32 OP_EQUALVERIFY` size-check on Bitcoin Alice could attack Bob.
For this attack Alice has to fund the Ethereum contract.
The scenario is that Alice has Ether and buys Bitcoin (reverse scenario of above).
Alice could attack Bob like this:

1. Alice creates a secret that is longer than 32 bytes.
2. Alice sends swap request (ETH->BTC)) as usual sending the hash of the secret to Bob.
3. From the hash of the secret Bob cannot know that the secret is actually longer than expected.
4. Bob accepts the request.
5. Alice funds the Ethereum contract. All looks legit.
6. Bob funds the Bitcoin contract.
7. Alice redeems the Bitcoin, revealing the actual secret.
8. Because the secret is longer than 32 bytes the Ethereum contract can never do a valid comparison. Bob cannot redeem his Ether, even though he knows the secret (!)
9. Alice waits until the time-lock is over and can refund (no secret needed for refund), so in the end she holds both assets.

By restricting the secret's size in the Bitcoin contract this attack vector is eliminated.
Kudos to [Johannes Zweng](https://medium.com/@johannes.zweng) who pointed us towards this attack vector [when commenting the June 2018 blogpost on medium](https://medium.com/@johannes.zweng/hi-28ed9fb81499).


Cheers,
Daniel
