const setupServer = require("./server");
const PORT = process.env.PORT || 4000;
const server = setupServer();
const db = require("../db/knex");

(async () => {
  try {
    await db.migrate.latest();
    server.listen(PORT, () => {
      console.log("app is listening to http://localhost" + PORT);
    });
  } catch (err) {
    console.error(err);
  }
})();
