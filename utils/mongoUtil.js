const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://hrushikesh:KToYTxOvXpCEOd4K@cluster0.my37y.mongodb.net/pro_resmue?retryWrites=true&w=majority";
let _db;

const connectDB = async (callback) => {
  try {
    MongoClient.connect(
      uri,
      { useUnifiedTopology: true, useNewUrlParser: true },
      (err, client) => {
        _db = client.db("pro_resume");
        return callback(err);
      }
    );
  } catch (e) {
    throw e;
  }
};

const getDB = () => _db;

const disconnectDB = () => _db.close();

module.exports = { connectDB, getDB, disconnectDB };
