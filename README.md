# cli-cold-wallet

Make a cold storage for your coins right in terminal, offline.

* Super tiny - 20 lines. See for yourself that there's no backdoors, leaks etc (OBLIGATORY: don't trust - verify!)
* Makes random cold wallet each run
* Offline
* Print (now it's a paper wallet!) or save to file
* Bitcoin (SegWit suported) or Ethereum
* Password-encrypted (BIP38)

## Installation

```bash
$ git clone git@github.com:Overtorment/cli-cold-wallet.git
$ cd cli-cold-wallet
$ npm install
```

## Usage

```bash
$ nodejs cli-cold-wallet.js 
```
![cli cold wallet](https://user-images.githubusercontent.com/1913337/31740872-41a05660-b45b-11e7-88a9-2dcd3890b437.png "Screenshot")

OR

```bash
$ nodejs cli-cold-wallet-ethereum.js 
```

OR

```bash
$ nodejs cli-cold-wallet.js > my-bitcoin-wallet.txt # save to file
```

OR

```bash
$ nodejs cli-cold-wallet-with-password.js # will prompt for password
```

## Licence

WTFPL

## Author

* [Igor Korsakov](http://igorkorsakov.com)
