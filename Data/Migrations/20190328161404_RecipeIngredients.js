exports.up = function(knex) {
  return knex.schema.createTable("RecipeIngredients", function(tbl) {
    //pk - ID
    tbl.increments();
    //FK - from recipes
    tbl
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    //FK - from ingredients
    tbl
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    //amount of ingredient required in this specific recipe
    tbl.integer("amount").notNullable();
    tbl.string("unit_of_measure", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("RecipeIngredients");
};
