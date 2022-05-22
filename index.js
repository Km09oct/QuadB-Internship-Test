const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID; 
const url = 'mongodb://localhost:27017/';
const bodyparser = require('body-parser')
const cors = require('cors');
let database;

const app = express();
app.use(bodyparser.json());
app.use(cors());
const port = process.env.port || 3000;

app.get('/:cryptoId', (req, res) => {
    const CryptoId = req.params.cryptoId;
    let objectId;
    if(CryptoId == 'BTC-INR') objectId = '6288a26fab81a3024476f717';
    if(CryptoId === 'XRP-INR') objectId = '6288a26fab81a3024476f718';
    if(CryptoId === 'ETH-INR') objectId = '6288a26fab81a3024476f719';
    if(CryptoId === 'TRX-INR') objectId = '6288a26fab81a3024476f71a';
    if(CryptoId === 'EOS-INR') objectId = '6288a26fab81a3024476f71b';
    if(CryptoId === 'ZIL-INR') objectId = '6288a26fab81a3024476f71c';
    if(CryptoId === 'BAT-INR') objectId = '6288a26fab81a3024476f71d';
    if(CryptoId === 'ZRX-INR') objectId = '6288a26fab81a3024476f71e';
    if(CryptoId === 'REQ-INR') objectId = '6288a26fab81a3024476f71f';
    if(CryptoId === 'NULS-INR') objectId = '6288a26fab81a3024476f720';
    database.collection('crytos').find({"_id": new ObjectID(objectId)})
    .toArray((err, result) => {
        if(err) throw err;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(result);
    })

});

app.listen(port, () => {
    console.log('Connecting to the server..');
    MongoClient.connect(url, {useNewUrlParser: true}, (err, result) =>{
        if(err) throw err;
        database = result.db('crypto');
        console.log('Connected Sucessfully');
    })
})
