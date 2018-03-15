const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(express.static("app/public"));
