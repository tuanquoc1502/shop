const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const route = require("./routes");
const db = require("./config/db");

app.use(fileUpload({ useTempFiles: true }));

// Connect to DB
db.connect();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
