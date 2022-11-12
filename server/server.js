const express = require("express");
const db = require("../db/knex");
const path = require("path");

function setupServer() {
  const app = express();

  //middleware
  app.use(express.static(path.resolve(__dirname, "../client/build")));
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
