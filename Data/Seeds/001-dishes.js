exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("dishes").insert([
    { name: "Pork Chops" },
    { name: "Tofu" },
    { name: "Salad" },
    { name: "Pizza" }
  ]);
};
