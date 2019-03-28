const db = require("../dbConfig.js");

module.exports = {
  getDishes,
  getDish,
  addDish
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}
function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(([id]) => getDish(id));
    //insert returns an array, .then(([id] desctructures the id off of it to pass into getDish(id)
}
