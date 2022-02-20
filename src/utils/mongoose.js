const mongoose = require("mongoose");

const conn = {
  isConnected: false,
};

// Function to connect to mongo database
async function dbConnect() {
  try {
    if (conn.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://juan:3VayQ5cSDIv3KrVg@cluster0.fwgds.mongodb.net/sauturus?retryWrites=true&w=majority"
    );
    conn.isConnected = db.connections[0].readyState;
    console.log("readyState --> ", db.connections[0].readyState);
  } catch (err) {
    console.log("Error connectiong -> ", err);
  }
}

mongoose.connection.on("connected", () => {
  console.log("MongoDb is now connected");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = dbConnect;
