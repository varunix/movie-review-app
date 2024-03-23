const mongoose = require('mongoose');

const DB_STRING = "mongodb+srv://varun:root%4011@cluster0.upxiv1a.mongodb.net/"
try {
    mongoose.connect(DB_STRING, {
        useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));