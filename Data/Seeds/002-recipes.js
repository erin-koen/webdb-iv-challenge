exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    { name: "grandma's", dish_id: "1" },
    { name: "grandpa's", dish_id: "2" },
    { name: "auntie's", dish_id: "2" },
    { name: "uncle's", dish_id: "3" },
    { name: "brother's", dish_id: "3" },
    { name: "sisters's", dish_id: "4" }
  ]);
};
