const fetch = require('node-fetch');
const mongoClient = require('mongodb').MongoClient;

const assert = require('assert');
const MongoClient = require('mongodb/lib/mongo_client');

const url = 'mongodb://localhost:27017/';
const dbname = 'crypto';

fetch('https://api.wazirx.com/api/v2/tickers')
    .then(res => res.json())
    .then(json => {
        let jsonFile = {}
        let myArr = []
        let i = 0;
        for (var key in json) {
          jsonFile.id = (i + 1);
          jsonFile.id = json[key].name;
          jsonFile.last = parseInt(json[key].last);
          jsonFile.buy = parseInt(json[key].buy);
          jsonFile.sell = parseInt(json[key].sell);
          jsonFile.volume = parseInt(json[key].volume);
          jsonFile.base_unit = json[key].base_unit;
            myArr.push({...jsonFile});
            i = i + 1;
            if (i >= 10) {
                break;
            }
        }
        connectServer(myArr);
})
function connectServer(params) {
    MongoClient.connect(url, (err, client) => {
        assert.equal(err,null);
        console.log('Connected to Server');

        const db = client.db(dbname);
        const collection = db.collection('crytos');

        for (let i = 0; i < params.length; i++) {
            collection.insertOne(params[i], (err, result) => {
                assert.equal(err, null);
                console.log('After Insertion:\n');
                console.log(result.ops);
            });
        }
        client.close();
    });

}