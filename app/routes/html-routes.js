const path = require("path");

// const Pal = require ("api-routes.js")
const Pal = require("../models/newPet.js")

module.exports = function(app) {
	app.get("/", function (req,res){
		res.sendFile(path.join(__dirname, "../public/view.html")); 
	});

	app.get("/add", function (req,res) {
		res.sendFile(path.join(__dirname, "../public/addPet.html"))
	});

	app.get("/search", function (req,res) {
	 	res.render("allPets", {Pal: []})
	});

	app.get('/search/all-pets', function(req, res) {
		var data = ""
		Pal.findAll({}).then(function(data) {
      // var test = res.json(results);
      // res.render("allPets", {Pal: test})
      		 // data = res.json(data)
	 		res.render("allPets", {Pal: data})
    	});
	});


	app.get('/search/species/:species', function(req, res) {
		Pal.findAll({
			where: {
				palType: req.params.species
			}
		}).then(function(data) {
	 		res.render("allPets", {Pal: data})
    	});
	});

	app.get('/search/breed/:breed', function(req, res) {
		Pal.findAll({
			where: {
				breed: req.params.breed
			}
		}).then(function(data) {
	 		res.render("allPets", {Pal: data})
    	});
	});

	app.get('/search/gender/:gender', function(req, res) {
		Pal.findAll({
			where: {
				gender: req.params.gender
			}
		}).then(function(data) {
	 		res.render("allPets", {Pal: data})
    	});
	});

};