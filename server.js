const express = require("express");
const helmet = require("helmet");

//bring in routers when wired up

//declare server
const server = express();

//add middleware
server.use(helmet());
server.use(express.json());

//assign routing when wired up



module.exports = server;
