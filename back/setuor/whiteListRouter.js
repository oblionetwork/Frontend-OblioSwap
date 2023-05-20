const WhiteListRouter = require("express").Router();

const WhiteListController = require("../srellortnoc/whitelist.controller");

var Helper = {
    Auth: require('../srellortnoc/nigiro')
}

WhiteListRouter.post("/addwhitelist", WhiteListController.addWhiteList);

WhiteListRouter.get("/listwhitelist", WhiteListController.listWhiteList);

WhiteListRouter.post("/deleteip", WhiteListController.deleteIpwhite);

WhiteListRouter.get("/whitelisttable", WhiteListController.listIpTable);

WhiteListRouter.get("/addip", WhiteListController.addManualIp);

module.exports = WhiteListRouter;
