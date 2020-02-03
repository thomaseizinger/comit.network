---
id: create-comit-app
title: Getting Started
sidebar_label: Create-comit-app
---

[`create-comit-app`](https://github.com/comit-network/create-comit-app/) is a project to help COMIT App developers setup an environment.

While mainly written in Rust, it is actually shipped on [npmjs.com](https://npmjs.com) as two packages:
- [`create-comit-app`](https://www.npmjs.com/package/create-comit-app)
- [`comit-scripts`](https://www.npmjs.com/package/comit-scripts)

While you can build your app in JavaScript, examples and the [SDK](TODO) are written in TypeScript,
allowing you to also build in TypeScript.

To use either packages, you need to have [`yarn`](https://yarnpkg.com/) or [`npm`](https://www.npmjs.com/get-npm) installed.
In this tutorial we will use `yarn` but it can be replaced by `npm` in any command below. 

Line starting with `▶` indicates the command to type in your terminal.
Other lines are the output that you should expect.

## create-comit-app

The `create-comit-app` allows you to create a template COMIT App which includes working examples.
To create your template app in the `my-app` directory, just do:

```
▶ yarn create comit-app my-app
yarn create v1.21.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > tscodeshift@0.4.1" has incorrect peer dependency "typescript@^2.3.2".
warning "tscodeshift > ts-emitter@0.3.1" has incorrect peer dependency "typescript@^2.3.2".
[4/4] 🔨  Building fresh packages...
success Installed "create-comit-app@0.8.3" with binaries:
      - create-comit-app
First time execution, downloading create-comit-app 0.8.3...✓
Your project `my-app` has been created!
✨  Done in 7.09s.
``` 

Let's have a look at what we have here:

```
▶ cd my-app
▶ tree # You can alternatively use `ls -R`
.
├── README.md
├── demos
│   ├── btc_eth
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   ├── tslint.json
│   │   └── yarn.lock
│   └── erc20_btc
│       ├── README.md
│       ├── package.json
│       ├── src
│       │   └── index.ts
│       ├── tsconfig.json
│       ├── tslint.json
│       └── yarn.lock
├── examples
│   ├── README.md
│   └── btc_eth
│       ├── README.md
│       ├── package.json
│       ├── src
│       │   ├── lib.ts
│       │   ├── maker.ts
│       │   └── taker.ts
│       ├── tsconfig.json
│       ├── tslint.json
│       └── yarn.lock
├── package.json
└── src
    └── index.js

9 directories, 24 files
```

- `.` is where you can start writing your app, see [write your app tuto](TODO) 
- `./package.json` contains some useful dependencies for your app
- `./examples` contains projects that are made to inspire developers such as yourself to build their app
- `./demos` contains projects which are catered for workshops demonstration. They do not have a conventional structure but have verbose output.
 
 Let's have a look at [comit-scripts](#comit-scripts) before [running an example](TODO) together.

## comit-scripts

The `comit-scripts` package helps you run a development environment to build a COMIT App.

Let's install it from the template folder to play with it.

```
▶ cd my-app # Not needed if you are already in the `my-app` directory
▶ yarn install
yarn install v1.21.1
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 92.81s.
```

Let's check out the provided `package.json` for any useful scripts:

```
▶ cat package.json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "main": "index.js",
  "scripts": {
    "start": "node ./src/index.js",
    "start-env": "comit-scripts start-env",
    "force-clean-env": "comit-scripts force-clean-env"
  },
  "dependencies": {
    "comit-sdk": "^0.10.0"
  },
  "devDependencies": {
    "comit-scripts": "^0.8.3"
  }
}
```

As you can see, two scripts are using `comit-scripts`, let's run `start-env`:

```
▶ yarn run start-env
yarn run v1.21.1
$ comit-scripts start-env
Creating Docker network (create-comit-app)...✓
Starting Ethereum node...✓
Starting Bitcoin node...✓
Starting two cnds...✓
Writing configuration in env file...✓
🎉 Environment is ready, time to create a COMIT app!
✓
```

So, what does it do?

`Creating Docker network (create-comit-app)...✓`: creates a docker network to allow several docker containers to communicate with each others. The network is named `create-comit-app`. TODO: Should we rename it?


`Starting Ethereum node...✓`:
- Starts a parity node in a docker container,
- Deploys an ERC20 token contract
- Creates two accounts,
- Funds each account with 1000 Ethers and 100 ERC20 tokens.

`Starting Bitcoin node...✓`"
- Starts a bitcoind node in a docker container,
- Create two HD wallet,
- Funds each wallet with 10 Bitcoin,
- Run `generate` every second to mine a new block.

`Starting two cnds...✓`: Starts 2 cnd (COMIT Network Daemon) in docker containers.

`Writing configuration in env file...✓`: Write useful information to `~/.create-comit-app/env`

Let's check out the result:

```
▶ docker ps
CONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS              PORTS                                                                                                  NAMES
207bdd00d103        comitnetwork/cnd:0.4.0            "tini -- cnd --confi…"   26 minutes ago      Up 26 minutes       8000/tcp, 9939/tcp, 0.0.0.0:58249->8080/tcp                                                            cnd_1
e72b5910e530        comitnetwork/cnd:0.4.0            "tini -- cnd --confi…"   26 minutes ago      Up 26 minutes       8000/tcp, 9939/tcp, 0.0.0.0:58248->8080/tcp                                                            cnd_0
7c9855e6f3c0        coblox/bitcoin-core:0.17.0        "/usr/bin/bitcoind -…"   26 minutes ago      Up 26 minutes       8332-8333/tcp, 18332-18333/tcp, 0.0.0.0:58234->18443/tcp, 0.0.0.0:58233->18444/tcp                     bitcoin
66a52568666d        coblox/parity-poa:v2.5.9-stable   "/bin/parity"            26 minutes ago      Up 26 minutes       5001/tcp, 8080/tcp, 8082-8083/tcp, 8180/tcp, 8546/tcp, 30303/tcp, 30303/udp, 0.0.0.0:58176->8545/tcp   ethereum
```
Indeed we have bitcoind, parity and cnds running.

Let's have a look at this `env` file:

```
▶ cat ~/.create-comit-app/env  
BITCOIN_HD_KEY_0=tprv8ZgxMBicQKsPf8tkuTQ3eftSjgnE17mEaoNbDz8r7N9TQdVJujs5yaoYpPR3HqetuD8g5hV3Ziqby4x6KB6yTcUyXBLDpqYv6we3etu9g5t
BITCOIN_HD_KEY_1=tprv8ZgxMBicQKsPfCW2nYxkfxMnb49PyTYFCF7sdkHdNWBgm89dPii9vtZXfd6dJVwi95NCq9DpoAwLioWvdzVTtmGt2MLR39R9giGscJBsF9H
BITCOIN_P2P_URI=127.0.0.1:58233
ERC20_CONTRACT_ADDRESS=0x62d69f6867a0a084c6d313943dc22023bc263691
ETHEREUM_KEY_0=77914ef506f41277bd62c9296143c68bbb8006d7c66619af42a626aced947654
ETHEREUM_KEY_1=f8ce18c1bf5c586ef2f89ed04d0296c49bf915483d2866decddd487dc83488c9
ETHEREUM_NODE_HTTP_URL=http://127.0.0.1:58176
HTTP_URL_CND_0=http://127.0.0.1:58248
HTTP_URL_CND_1=http://127.0.0.1:58249
```

We have here the private keys of the funded accounts on Ethereum and Bitcoin and the endpoint to the various services.
This can be used to be imported in my-app so that you can test it with funded accounts.

To stop the environment, just hit `CTRL+C` and wait few seconds:

```
▶ yarn run start-env
yarn run v1.21.1
$ comit-scripts start-env
Creating Docker network (create-comit-app)...✓
Starting Ethereum node...✓
Starting Bitcoin node...✓
Starting two cnds...✓
Writing configuration in env file...✓
🎉 Environment is ready, time to create a COMIT app!
✓
^C🧹 Cleaning up...
✓
```

## Run a demo

Let's run one of the demo to see how an atomic swap run looks like:

```
▶ cd demos/btc_eth
my-app/demos/btc_eth
▶ yarn install
yarn install v1.21.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 72.77s.
```

If `start-env` from the previous section is still running, leave it. If not, you need to start it:
```
▶ yarn run start-env
yarn run v1.21.1
$ comit-scripts start-env
First time execution, downloading comit-scripts 0.8.3...✓
Creating Docker network (create-comit-app)...✓
Starting Ethereum node...✓
Starting Bitcoin node...✓
Starting two cnds...✓
Writing configuration in env file...✓
🎉 Environment is ready, time to create a COMIT app!
✓
```

Then, from a new terminal:
```
▶ cd my-app/demos/btc_eth
▶ yarn run swap
yarn run v1.21.1
$ ts-node ./src/index.ts
Maker Ethereum address:  0x04FEB54612cFA5A048c2195a1A0Fb60a47b546a4
Taker Ethereum address:  0x97b69c5348A43215dCA5e0580bFc830F1c0CF5aE
Maker Bitcoin balance: 10. Ether balance: 1000
Taker Bitcoin balance: 10. Ether balance: 1000
Swap started! Swapping 0.1 bitcoin for 5 ether
Ethereum HTLC funded! TXID:  b4b1b53ab505bb3b1bed27dcf4eca243c749851786a43e2cea0fd70d0e1f003a
Bitcoin HTLC funded! TXID:  0x43824c555b1d350ac573caecf4ad4b6536d607e19c1cd4092adacfdc6dba4f24
Bitcoin HTLC redeemed! TXID:  0x221fa7d8d89c5ae1b1804ff2db7a4ed62fe9c88f9278d6e9ba802093425be820
Ethereum HTLC redeemed! TXID:  c1f5c4abd2408d5a123848279638a84f86454a77d9e87bb5f865bfa10874ff40
Swapped!
Maker Bitcoin balance: 10. Ether balance: 995
Taker Bitcoin balance: 9.9. Ether balance: 1005
✨  Done in 19.63s.
```

Congratulations, you have ran a swap!