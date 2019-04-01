const express = require('express');
const Dishes = require('../Helpers/dishHelper.js');

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const dishList = await Dishes.getDishes();
        res.status(200).json(dishList);
    } catch(err){
        res.status(500).json({ message: "There was an error retrieving the dishes"})
    }
    
})

module.exports = router;