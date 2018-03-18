// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
const Pal = sequelize.define("pal", {
  // api route in case some pets have full names... mine does
  palName: Sequelize.STRING,
  // Pet type
  palType: Sequelize.STRING,
  // pet breed
  breed: Sequelize.STRING,
  // pet gender
  gender: Sequelize.STRING,
  // Pet is nutered of not (an int)
  fixed: Sequelize.BOOLEAN,
  // Pet description
  description: Sequelize.STRING,
  // PET image
  image: Sequelize.STRING
}, {
  timestamps: false
});

// Syncs with DB
Pal.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Pal;
