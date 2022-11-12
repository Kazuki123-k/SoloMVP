/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("food").del();
  await knex("food").insert([
    { id: 1, first_name: "test1", last_name: "test1" },
    { id: 2, first_name: "test2", last_name: "test2" },
    { id: 3, first_name: "test3", last_name: "test3" },
  ]);
};
