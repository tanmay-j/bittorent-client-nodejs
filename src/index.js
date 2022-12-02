'user strict';

const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const torrentParser = require('./torrent-parser')

// const torrent = bencode.decode(fs.readFileSync('big-buck-bunny.torrent'));
const torrent = torrentParser.open('../torrents/big-buck-bunny.torrent')

console.log("hi")
tracker.getPeers(torrent, peers => {
    console.log('list of peers: ', peers);
})
