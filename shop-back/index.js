const path = require("path");
const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())


const route = require("./routes");
const db = require('./config/db')

// Connect to DB
db.connect()

app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
