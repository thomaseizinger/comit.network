---
title:  "Setting up a ☁️ Bitcoin Full Node"
author: daniel
author_url: https://github.com/da-kami
author_image_url: https://avatars1.githubusercontent.com/u/5557790
tags: [bitcoin, full-node, setup]
---

> Just do it!
>
> Shia LaBeouf

In 2020 it is still tough to find quality instructions on how to run a bitcoin full node in the cloud.

In this tutorial we want to share how it can be done in a fast and efficient way.

<!--truncate-->

## Google Cloud Setup bitcoind

For this tutorial we assume basic understanding of the Google Cloud platform. If you never used it before, but have e.g. AWS experience it should be easiy to follow.
If you don't have cloud platform experience you might have to consult the Google Cloud documentation on the way.

### Setup Recommendations

Instance recommendations: 

- Use a `e2-standard-4 (4 vCPUs, 16 GB memory)` instance for installation and initial sync. **This machine will only be used for the first 12-24 hours with costs less than 4$ in total.**
- Use a `e2-small` instance (at least 2GB RAM) for running the node AFTER the initial sync. This costs about 14$ per month given 24/7 uptime.

Why we recommend this?

We want to be economical, but we cannot wait forever. Syncing with a node < 4GB takes significant time, we are talking weeks here not days. Running the strong machine for 12ish hours is actually cheaper than running a small machine for 1.5+ weeks.
For more details on machine costs feel free to play with Google's [pricing calculator](https://cloud.google.com/products/calculator).

More tutorial specs & quirks:

- We use `Debian` for our machine. Feel free to use a different distribution, but be aware that you might have to adapt tutorial-steps on the way.
- We use an `additional HDD` that we attach to the instance instead of upping the instance's SSD. It's not vital to have SSD storage for syncing the blockchain, RAM and CPU power are far more important.

Notes on costs:

Total cost point is about 33$ per month for the e2-small instance and HDD when running 24/7.
To give this a try for a month you should calculate with about 40$ of costs, assuming that you only run the e2-standard machine for the first 12-24h and then run an e2 machine.
We feel these costs are not really a big deal for the sake of trying something awesome, but you should be aware that there are costs. 
If you want to go for a cheaper option you can sync on e.g. an external harddisk at home or on a Raspy.

Some more notes:

Note that response time can be quite slow on an e2-small machine. You might want to congifure a higher accepted latency when running your node as e2-small machine. 

Note that we refer to Bitcoin Core as bitcoind, as in bitcoin daemon, throughout this tutorial.

### Initial Google Instance Setup

#### Instance setup

Create a `e2-standard-4 (4 vCPUs, 16 GB memory)` instance, provision it with `Debian`.

#### Add harddisk

Add a 500GB harddisk to the instance.

TODO: Add details

#### Static IP address

Configure a static IP address for the machine.

TODO: Add details

#### Configure the Google Cloud firewall

This tutorial assumes, that your bitcoin node exposes the RPC interface and should thus be available on standard port 8333 (and 8332).

You will have to configure a `New Firewall` within the Network -> Firewall settings of the Google Comupte Engine. 

1. In your instance detail view you should see `Network interfaces`, click on the `default` link under `Network`.
2. Chose `Firewall` in the left hand menu
3. Click `Create Firewall` on the top
4. Define whatever name
5. Change `Targets` to `All instances in the network` (or see Google Cloud docu)
6. Set `Source IP ranges` to `0.0.0.0/0` (or see Google Cloud docu)
7. Specify port under `tsc` to `8332-8333`
8. Click `Create`

The rule will automatically be applied to your instance (due to 5.).


### Getting bitcoind installed

Prerequisits:

Install git.

Installation:

1. Make sure git is installed.
2. checkout https://github.com/bitcoin/bitcoin
3. Checkout branch with latest tag (check tags on repo)
4. Install all dependencies (QT/UI not needed): https://github.com/bitcoin/bitcoin/blob/master/doc/build-unix.md#dependency-build-instructions
5. run `./autogen.sh`
6. Install Berkly DB deps: https://github.com/bitcoin/bitcoin/blob/master/doc/build-unix.md#berkeley-db
7. Run `./configure` with command:

```
export BDB_PREFIX='/home/bitcoin/bitcoin/db4'
./configure --disable-tests --disable-bench --with-gui=no --disable-gui-tests BDB_LIBS="-L${BDB_PREFIX}/lib -ldb_cxx-4.8" BDB_CFLAGS="-I${BDB_PREFIX}/include"
```

8. run `make`

If you run the installation on a weak machine this step can take a while, you can consider [using `screen`](https://www.interserver.net/tips/kb/using-screen-to-attach-and-detach-console-sessions/) to run `make`:
`sudo apt-get install screen`
`screen`

detach: `ctrl` + `a` + `d`
re-attach: `screen -r` 
list sessions: `screen -ls`


9. Run `sudo make install`

### Mounting the harddisk as datadir for bitcoind

Configure the disk: https://www.cloudbooklet.com/attach-and-mount-disks-to-vm-instance-in-google-cloud/
Mount disk to directory: `/var/lib/bitcoind` - see: https://github.com/bitcoin/bitcoin/blob/master/doc/init.md

List disks:

```
sudo lsblk
```

Your disk should be named `/dev/sdb` in the list. If not change the following commands accordingly.

Init disk:

```
sudo mkfs.ext4 -m 0 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdb
```

Mount disk into bitcoind datadir:

```
echo UUID=`sudo blkid -s UUID -o value /dev/sdb` /var/lib/bitcoind ext4 discard,defaults,nofail 0 2 | sudo tee -a /etc/fstab
```

### Starting bitcoind

As per the [init instructions](https://github.com/bitcoin/bitcoin/blob/master/doc/init.md) for adding bitcoind as service started at instance startup:

Navigate to `contrib/init` dir within the bitcoin repo, you'll find the `bitcoind.service` file there.

Coy said file to register the default configuration of the bitcoin service with systemd:

```
sudo cp bitcoind.service /lib/systemd/system
```

Enable the service in systemctl:

```
sudo systemctl enable bitcoind
```

Bitcoind is now configured to start automatially at startup of the machine.

You can either restart the machine or just initially start the service manually:

```
sudo systemctl start bitcoind
```

The initial block sync will start automatically.

If you are syncing with a slow machine, and your sync seems to be stuck free to add some additional nodes to the configuration, you can find some on [bitnodes.io](https://bitnodes.io). Some nodes have block download limits that can cause this behavior.

Example how to add this to the `bitcoin.conf` (see next section for details):

```
addnode=34.220.102.44:8333
addnode=...
```

### Configure RPC server

Configuration is to be done in the `bitcoin.conf` file, which is to be put into `/etc/bitcoin`. 
This directory is to be owned by the bitcoin user.
Make sure to put the configuration file into `/etc/bitcoin/bitcoin.conf` - if file does not exist create it (as user `bitcoin`).

Official example bitcoin conf: https://github.com/bitcoin/bitcoin/blob/master/share/examples/bitcoin.conf

Make rpc server available and configure user and password for it:

```
rpcuser=...
rpcpassword=...
server=1
```

You have to restart bitcoind to make these changes happen. 
If you have not tested the bitcoind service startup yet it might be a good idea to restart the instance at this point to ensure bitcoind starts up properly.

### Validate your setup

Once the bitcoind server is configured you can use this page to check if your node is available:

https://bitnodes.io/#join-the-network

You should see a green `xxx.xxx.xxx.xxx:8333 /Satishi:0.yy.y` where `yy.y` is the version of the node you are running.

To see the current sync status:

```
bitcoin-cli -conf=/etc/bitcoin/bitcoin.conf -datadir=/var/lib/bitcoind getblockchaininfo
```

Should output:

```json
{
  "chain": "main",
  "blocks": 504098,
  "headers": 649370,
  "bestblockhash": "000000000000000000384bff3b141eb615c5d4e3143af99211dbe74d3720bab5",
  "difficulty": 2227847638503.628,
  "mediantime": 1515880570,
  "verificationprogress": 0.5158736258855465, 
  ...
}
```

In above example we are at `51.58736258855465%` sync.

### Don't forget!

**Don't forget to shutdown the Google Cloud instance after the initial sync, re-configure to an e2-small and then start it again!**

If you let the e2.standard machine run for longer you will have significant costs!

### Cleanup

If you want to trash everything, make sure you remove:

1. The Google Cloud instance
2. The Google Cloud harddisk(s) 
3. The static IP configuration
4. Potentially remove firewall settings (should not cause cost)
