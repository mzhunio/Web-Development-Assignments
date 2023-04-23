const data = require("../data/users.json");
const { ObjectId, connect } = require("");

const COLLECTION_NAME = "user";

async function collection() {
  const db = await connect();
  return db.collection(COLLECTION_NAME);
}

module.exports = {
 
};