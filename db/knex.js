require("dotenv").config();
const knex = require("knex");
const knexConfig = require("../knexfile.js");
const config =
  process.env.NODE_ENV === "production"
    ? knexConfig.production
    : knexConfig.development;
module.exports = knex(config);
