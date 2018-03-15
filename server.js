const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Port = process.env.PORT || 8889;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);

require("./app/routes/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

