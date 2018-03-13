// Dependencies
const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
const sequelize = new Sequelize("ourPets", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 8889,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;