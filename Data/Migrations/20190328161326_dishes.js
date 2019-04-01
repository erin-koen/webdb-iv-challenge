
exports.up = function(knex) {
    return knex.schema.createTable('dishes', function(tbl){
        tbl.increments();
        tbl.string('name', 256)
        .notNullable()
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
