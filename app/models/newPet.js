// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
const newPET = sequelize.define("newPets", {
  // api route in case some pets have full names... mine does
  route: Sequelize.STRING,
  // Pet type
  type: Sequelize.STRING,
  // pet breed
  breed: Sequelize.STRING,
  // the name of pet (a string)
  name: Sequelize.STRING,
  // pet's age (a string)
  age: Sequelize.INTEGER,
  // pet gender
  gender: Sequelize.STRING,
  // Pet is nutered of not (an int)
  fixed: Sequelize.BOOLEAN
}, {
  timestamps: false
});

// Syncs with DB
newPet.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = newPET;