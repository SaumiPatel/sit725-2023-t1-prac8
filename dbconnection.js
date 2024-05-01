const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://admin:admin@cluster0.wh5bwpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function runDBConnection() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    collection = client.db().collection("Cat");
    console.log("database connected");
  } catch (ex) {
    console.error(ex);
  }
}
runDBConnection();
module.exports = client;
