const poolRouter = require("express").Router();

const poolController = require("../srellortnoc/pool.controller");

var Helper = {
    Auth: require('../srellortnoc/nigiro')
}

poolRouter.post("/addpool/:chain_id", Helper.Auth.verify_origin, poolController.addPoolData);

poolRouter.get("/listpooldata/:chain_id", Helper.Auth.verify_origin, poolController.listPoolData);

poolRouter.post("/updatepoolstatus", Helper.Auth.verify_origin, poolController.updatePoolStatus);

module.exports = poolRouter;
