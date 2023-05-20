const liquidityRouter = require("express").Router();

const liquidityController = require("../srellortnoc/liquidity.controller");

var Helper = {
  Auth: require('../srellortnoc/nigiro')
}

liquidityRouter.post("/addliquidity",liquidityController.addLiquidity);
liquidityRouter.get("/listallliquidity",liquidityController.listAllLiquidity);
liquidityRouter.get(
  "/listuserliquidity/:userAddress",
  liquidityController.listUserLiquidity
);

liquidityRouter.post("/listliquidity",liquidityController.listLiquidity);


module.exports = liquidityRouter;
