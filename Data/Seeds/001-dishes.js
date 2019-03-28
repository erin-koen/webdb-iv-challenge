exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name").insert([
    { name: "Pork Chops" },
    { name: "Tofu" },
    { name: "Salad" },
    { name: "Pizza" }
  ]);
};
