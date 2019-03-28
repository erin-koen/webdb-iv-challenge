const db = require('../dbConfig.js');


module.exports = {
    getRecipes,
    addRecipe
}

function getRecipes() {
    return db('recipes');
};

function addRecipe(recipe){
    
}