const siteSettingsRouter = require("express").Router();

const siteSettingsController = require("./../srellortnoc/sitesettings.controller");

var Helper = {
  Auth: require('../srellortnoc/nigiro')
}

siteSettingsRouter.post("/sitesettings" ,siteSettingsController.siteSettings);

siteSettingsRouter.get(
  "/getsitesettings",
  siteSettingsController.getSiteSettings
);

// siteSettingsRouter.post("/add", Helper.Auth.verify_origin, siteSettingsController.addSiteSettings)

module.exports = siteSettingsRouter;
