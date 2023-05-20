const securityRouter = require("express").Router();

const security_controller = require("./../srellortnoc/security.controller");

var Helper = {
    Auth: require('../srellortnoc/nigiro')
}



// securityRouter.post("/changepassword",Helper.Auth.verify_origin, security_controller.changePassword);

// securityRouter.post("/changepattern", Helper.Auth.verify_origin, security_controller.changePattern);

// securityRouter.post("/twofactorauth", security_controller.twoFactorAuth);

// securityRouter.post("/verifyotp", Helper.Auth.verify_origin, security_controller.verifyOTP);
securityRouter.post("/changepassword", security_controller.changePassword);

securityRouter.post("/changepattern", security_controller.changePattern);

securityRouter.post("/twofactorauth", security_controller.twoFactorAuth);

securityRouter.post("/verifyotp",  security_controller.verifyOTP);

module.exports = securityRouter;
