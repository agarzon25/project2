const Pal = require("../models/NAMEOFJSFILEHERE.js")

module.exports = function(aoo) {

	app.get("/api/all", function(req, res) {

	});

// specific type of pet
  app.get("/api/type/:type", function(req, res) {
     Book.findAll ({
        where: {
          type: req.params.type
        }
        }).then(function(results) {
          return res.json(result);
        });

  });

}