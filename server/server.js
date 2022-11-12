const express = require("express");
const db = require("../db/knex");

function setupServer() {
  const app = express();

  //middleware
  app.use(express.json());

  app.get("/hello", (req, res) => {
    res.status(200).send("Hello world");
  });

  app.get("food", async (req, res) => {
    const food = await db("food");
  });

  return app;
}

module.exports = setupServer;
