const express = require("express");
const app = express();

const bodyParser = require("body-parser");
bodyParser.urlencoded({ extended: true });

app.listen(8000);
