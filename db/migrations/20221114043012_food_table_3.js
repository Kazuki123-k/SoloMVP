/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable("mcdonald", (table) => {
    table.increments("id");
    table.string("meal_name", 255);
    table.integer("calorie", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema.dropTable("mcdonald");
};
