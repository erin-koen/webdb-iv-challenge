
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipeingredients").insert([
    { id: 0, recipe_id: 1, ingredient_id: 2, amount:2332, unit_of_measure: "gallon" },
    { id: 1, recipe_id: 6, ingredient_id: 4, amount:2332, unit_of_measure: "gallon" },
    { id: 2, recipe_id: 5, ingredient_id: 2, amount:2332, unit_of_measure: "gallon" },
    { id: 3, recipe_id: 4, ingredient_id: 1, amount:2332, unit_of_measure: "gallon" },
    { id: 4, recipe_id: 3, ingredient_id: 3, amount:2332, unit_of_measure: "gallon" },
    { id: 5, recipe_id: 2, ingredient_id: 1, amount:2332, unit_of_measure: "gallon" },
    { id: 6, recipe_id: 1, ingredient_id: 4, amount:2332, unit_of_measure: "gallon" },
    { id: 7, recipe_id: 6, ingredient_id: 6, amount:2332, unit_of_measure: "gallon" },
    { id: 8, recipe_id: 5, ingredient_id: 10, amount:2332, unit_of_measure: "gallon" },
    { id: 9, recipe_id: 4, ingredient_id: 9, amount:2332, unit_of_measure: "gallon" },
    { id: 10, recipe_id: 3, ingredient_id: 8, amount:2332, unit_of_measure: "gallon" },
    { id: 11, recipe_id: 2, ingredient_id: 7, amount:2332, unit_of_measure: "gallon" },
    { id: 12, recipe_id: 1, ingredient_id: 6, amount:2332, unit_of_measure: "gallon" },
  ]);
};

