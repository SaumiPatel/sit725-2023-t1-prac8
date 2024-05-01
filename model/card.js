let client = require("../dbconnection");
let collection = client.db().collection("Cat");
client.connect();

function postcards(cat, callback) {
  collection.insertOne(cat, callback);
}

function getAllCards(callback) {
  collection.find({}).toArray(callback);
}

module.exports = { postcards, getAllCards };
