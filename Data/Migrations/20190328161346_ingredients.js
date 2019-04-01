exports.up = function(knex) {
  return knex.schema.createTable("ingredients", function(tbl) {
    //PK -id
    tbl.increments();
    tbl.string("name", 256);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
