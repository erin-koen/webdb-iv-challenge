exports.up = function(knex) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments();
    tbl.string("name", 256).notNullable();
    tbl
      .integer("dish_id")
      .unsigned() //??
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
