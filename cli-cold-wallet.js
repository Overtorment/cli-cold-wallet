var qrcode = require('qrcode-terminal')
var bitcore = require('bitcore-lib')
var Table = require('cli-table')

var privateKey = new bitcore.PrivateKey()
var address = new bitcore.Address(privateKey.toPublicKey())
var displayWif = privateKey.toWIF()
var displayAddress = address.toString()

qrcode.generate(displayWif, {small: true}, function (wifCode) {
  qrcode.generate(displayAddress, {small: true}, function (addressCode) {
    var table = new Table({head: ['BITCOIN PUBLIC ADDRESS', '', 'BITCOIN PRIVATE KEY (WIF)']})
    table.push(
        [addressCode, require('fs').readFileSync('asciiart.txt', 'utf8'), wifCode]
      , ['DEPOSIT / VERIFY', '', 'WITHDRAW']
      , [displayAddress, '', displayWif]
    )
    console.log(table.toString())
  })
})
