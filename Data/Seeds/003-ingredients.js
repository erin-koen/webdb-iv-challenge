exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    { name: "carrots" },
    { name: "kale" },
    { name: "pork chop" },
    { name: "salt" },
    { name: "sugar" },
    { name: "rep pepper" },
    { name: "butter" },
    { name: "olive oil" },
    { name: "doritos" },
    { name: "milk" },
    { name: "spinach" }
  ]);
};
