const swapRouter = require("express").Router();

const swapController = require("../srellortnoc/swap.controller");

var Helper = {
    Auth: require('../srellortnoc/nigiro')
}

swapRouter.post("/addswap",  swapController.addSwapData);

swapRouter.post("/listswapdata",  swapController.listSwapData);
swapRouter.get("/listallswapdata",  swapController.listAllSwapData);

module.exports = swapRouter;
