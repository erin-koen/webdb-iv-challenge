const express = require("express");
const helmet = require("helmet");
const server = express();
//bring in routers when wired up
const dishRouter=require('./Data/Routers/DishRouter')

//declare server


//add middleware
server.use(helmet());
server.use(express.json());

//assign routing when wired up
server.use("/api/dishes", dishRouter);

server.get("/", (req,res) => {
    res.send(`<h1>It's working.</h1>`)
})

module.exports = server;
