//consume knexfile.js, this will import knex and create an instance of knex connection
const knex = require("knex");
const config = require("../knexfile");

//a connection to export to any of the database
module.exports = knex(
  process.env.PORT ? config.production : config.development
);
