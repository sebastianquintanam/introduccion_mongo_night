const { MongoClient } = require("mongodb");
const appConfig = require("../config");

var clientMongo = new MongoClient(appConfig.connectionString);

let promiseConnect = clientMongo.connect();

promiseConnect
    .then(function (client) {
        clientMongo = client;
        console.log("Connected to Mongo DB service");
    })
    .catch(function (err) {
        console.log(err);
        console.log("Error connecting with Mongo DB service");
    });

module.exports = clientMongo;