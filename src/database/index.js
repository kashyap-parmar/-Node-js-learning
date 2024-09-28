const mongoose = require('mongoose');

async function connectToDatabase() {
    const URL_String = process.env.MONGODB_COLLECTION_STRING || ''
    console.log('URL_String :',URL_String)
    try {
        console.log('connecting to mongodb...')
        // Connect to MongoDB using mongoose
        await mongoose.connect(URL_String);

        console.log("Connected successfully to the database");
    } catch (err) {
        console.error("Connection failed", err);
    } 

}

module.exports = connectToDatabase;
