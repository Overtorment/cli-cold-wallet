var path = require('path')
var qrcode = require('qrcode-terminal')
var bitcoin = require('bitcoinjs-lib')
var Table = require('cli-table')

var keyPair = bitcoin.ECPair.makeRandom()
var pubKey = keyPair.getPublicKeyBuffer()
var redeemScript = bitcoin.script.witnessPubKeyHash.output.encode(bitcoin.crypto.hash160(pubKey))
var scriptPubKey = bitcoin.script.scriptHash.output.encode(bitcoin.crypto.hash160(redeemScript))
var displayAddress = bitcoin.address.fromOutputScript(scriptPubKey)
var displayWif = keyPair.toWIF()

qrcode.generate(displayWif, {small: true}, function (wifCode) {
  qrcode.generate(displayAddress, {small: true}, function (addressCode) {
    var table = new Table({head: ['BITCOIN PUBLIC ADDRESS', '', 'BITCOIN PRIVATE KEY (WIF)']})
    table.push(
        [addressCode, require('fs').readFileSync(path.join(__dirname, 'asciiart.txt'), 'utf8'), wifCode]
      , ['DEPOSIT / VERIFY', '', 'WITHDRAW']
      , [displayAddress, ' '.repeat(52), displayWif]
    )
    console.log(table.toString())
  })
})
