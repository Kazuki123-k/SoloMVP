/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("fruit").del();
  await knex("fruit").insert([{ fruit_name: "test1", calorie: "100" }]);
};
