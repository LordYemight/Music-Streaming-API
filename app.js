const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('./db/db');
const router = require('./routes/router');
const port = process.env.port


app.use (express.json());
app.use ('/', router);

app.listen (port , async () => {
  await mongoose;
  console.log(`Server listening on ${port}`)
});


