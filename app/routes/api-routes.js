const Pal = require("../models/newPet.js")

module.exports = function(app) {

//see all pals 
app.get("/api/all", function(req, res) {
    Pal.findAll({}).then(function(results) {
      res.json(results);
    });
  });


//look up by species 
  app.get("/api/palType/:palType", function(req, res) {
     Pal.findAll ({
        where: {
          palType: req.params.palType
        }
        }).then(function(results) {
          return res.json(result);
        });


  });

//look up by breed 
  app.get("/api/breed/:breed", function(req, res) {
     Pal.findAll ({
        where: {
          breed: req.params.breed
        }
        }).then(function(results) {
          return res.json(result);
        });


  });

 //look up by gender 

  app.get("/api/gender/:gender", function(req, res) {
     Pal.findAll ({
        where: {
          gender: req.params.gender
        }
        }).then(function(results) {
          return res.json(result);
        });


  });

 //create new pal 
 app.post("/api/new", function(req, res) {
    Pal.create({
      palName: req.body.palName,
      palType: req.body.palType,
      breed: req.body.breed,
      age: req.body.age,
      gender: req.body.gender,
      fixed: req.body.fixed,
    })

      .then(function(){
        res.end();
      })

  });

  // deletes pal 
  app.post("/api/delete", function(req, res) {
    Pal.destroy ({
      where: {
        id: req.body.id
      }
    })
    .then(function(){
        res.end();
      });

  });

}