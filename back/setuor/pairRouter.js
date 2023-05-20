const pairRouter = require("express").Router();

const pairController = require("./../srellortnoc/pairs.controller");


var Helper = {
    Auth: require('../srellortnoc/nigiro')
}

pairRouter.post("/addpair/:chain_id", Helper.Auth.verify_origin, pairController.addPair);

pairRouter.get("/getallpairs/:chain_id", Helper.Auth.verify_origin, pairController.getAllPairs);

pairRouter.post("/changepairstatus", Helper.Auth.verify_origin, pairController.changePairStatus);

module.exports = pairRouter;
