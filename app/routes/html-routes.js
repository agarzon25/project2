const path = require("path");

module.exports = function(app) {
	app.get("/", function (req,res){
		res.sendFile(path.join(__dirname, "../public/view.html")); 
	});

	app.get("/add", function (req,res) {
		res.sendFile(path.join(__dirname, "../public/addPet.html"))
	});

	app.get("/search", function (req,res) {
		// res.sendFile(path.join(__dirname, "../views/layouts/search.html"))
		res.render("allPets")
	});
	
};
