const stakeRouter = require("express").Router();

const stakeController = require("../srellortnoc/stake.controller");

var Helper = {
    Auth: require('../srellortnoc/nigiro')
}

stakeRouter.post("/addstake/:chain_id", Helper.Auth.verify_origin, stakeController.addStakeData);

stakeRouter.get("/liststakedata/:chain_id", Helper.Auth.verify_origin, stakeController.listStakeData);

stakeRouter.post("/updatestake", Helper.Auth.verify_origin, stakeController.updateStakeData);

stakeRouter.post("/poststakehistory/:chain_id", Helper.Auth.verify_origin, stakeController.postStakeHistory);

stakeRouter.get("/liststakehistory/:chain_id", Helper.Auth.verify_origin, stakeController.listStakeHistory)

module.exports = stakeRouter;
