const cleaner = require('knex-cleaner');
exports.seed = function(knex) {
  return cleaner.clean(knex);
};

//will prevent any foreign key errors
//when trying to truncate tables that have FK tables pointing to them.
//after this command, all tables are empty and all primary keys are reset.