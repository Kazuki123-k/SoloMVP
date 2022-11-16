const express = require("express");
const db = require("../db/knex");
const path = require("path");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

function setupServer() {
  const app = express();

  //middleware
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(express.json());

  app.post("/submitFruit", async (req, res) => {
    let payload = req.body;
    try {
      payload.map(async (fruit) => {
        await db("alternative_db").select("*").from("fruit").insert(fruit);
      });
      return res.status(200).send(req.body);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get("/getFruit", async (req, res) => {
    let responseArr = [];
    const url = "https://fruityvice.com/api/fruit/all";
    const options = {
      method: "GET",
    };
    const result = await fetch(url, options).then((res) => {
      return res.json();
    });
    res.send(result).status(200);
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
