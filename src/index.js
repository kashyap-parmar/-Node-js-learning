require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./database');
const router = require('./router');
const app = express();
const port = process.env.PORT || 3001

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, async () => {
    console.log(`Server listening on the port : ${port}`)
    await connectToDatabase();
})