var path = require('path')
var qrcode = require('qrcode-terminal')
var eth = require('ethereumjs-util')
var random = require('secure-random')
var Table = require('cli-table')

var privateKey = random(32, {type: 'Buffer'})
var displayPrivate = eth.bufferToHex(privateKey)
var displayAddress = eth.bufferToHex(eth.privateToAddress(privateKey))

qrcode.generate(displayPrivate, {small: true}, function (privateCode) {
  qrcode.generate(displayAddress, {small: true}, function (addressCode) {
    var table = new Table({head: ['ETHEREUM PUBLIC ADDRESS', '', 'ETHEREUM PRIVATE KEY']})
    table.push(
        [addressCode, require('fs').readFileSync(path.join(__dirname, 'asciiart-ethereum.txt'), 'utf8'), privateCode]
      , ['DEPOSIT / VERIFY', '', 'WITHDRAW']
      , [displayAddress, ' '.repeat(66), displayPrivate]
    )
    console.log(table.toString())
  })
})
