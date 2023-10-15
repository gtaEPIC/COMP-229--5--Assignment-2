const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connectDB() {
    mongoose.connect(process.env.ATLASDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then();
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection Error: "));
    db.once("open", () => {
        console.log("====> Connected to MongoDB.");
    });
    return db;
}

module.exports = connectDB;