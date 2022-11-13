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

  app.get("/getFood/:food?", async (req, res) => {
    const queryFood = req.params.food;
    if (queryFood) {
      try {
        const unhealthyFood = await db("alternative_db")
          .select("*")
          .from("mcdonald");
        for (const meal of unhealthyFood) {
          if (meal["meal_name"].toLowerCase() === queryFood.toLowerCase()) {
            res.status(200).send(meal);
          }
        }
      } catch (err) {
        res.send(500).send(err);
      }
    }
  });

  return app;
}

module.exports = setupServer;
