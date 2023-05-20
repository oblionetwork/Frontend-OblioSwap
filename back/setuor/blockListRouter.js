const BlockListRouter = require("express").Router();

const BlockListController = require("../srellortnoc/blocklist.controller");

var Helper = {
    Auth: require('../srellortnoc/nigiro')
}
BlockListRouter.post("/addblocklist",
    BlockListController.addBlocklist);

BlockListRouter.get("/listblocklist", BlockListController.listBlockList);

BlockListRouter.post("/deleteip", BlockListController.deleteIpBlock);

BlockListRouter.get("/checkmyip",BlockListController.checkMyIp);

module.exports = BlockListRouter;
