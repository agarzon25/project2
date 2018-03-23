const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars")
const path = require("path")

const app = express();

const PORT = process.env.PORT || 8888;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("app/public"));

app.engine("handlebars", exphbs({
	defaultLayout: "search", 
	layoutsDir: "app/views/layouts"
}))

app.set("view engine", "handlebars")

app.set("views", path.join(__dirname,"app/views"))

require("./app/routes/api-routes.js")(app);

require("./app/routes/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

