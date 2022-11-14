/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  if (knex("mcdonald")) {
    await knex("mcdonald").del();
  }
  await knex("mcdonald").insert([
    { id: 1, meal_name: "BigMac", calorie: 550 },
    { id: 2, meal_name: "Double Cheeseburger", calorie: 457 },
    { id: 3, meal_name: "5 piece Chicken Nuggets", calorie: 270 },
    { id: 4, meal_name: "L French Fries", calorie: 517 },
    { id: 5, meal_name: "Sausage Egg McMuffin", calorie: 474 },
    { id: 6, meal_name: "Triangle Chocolate Pie", calorie: 339 },
    { id: 7, meal_name: "McFlurry Oreo", calorie: 337 },
    { id: 8, meal_name: "Chicken Fillet Burger", calorie: 467 },
    { id: 9, meal_name: "Hamburger", calorie: 256 },
    { id: 10, meal_name: "Chicken Krisp Burger", calorie: 344 },
  ]);
};
