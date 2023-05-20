const cmsRouter = require("express").Router();

const cmsController = require("./../srellortnoc/cms.controller");
const multer = require('multer');
const path = require("path");

var Helper = {
  Auth: require('../srellortnoc/nigiro')
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads/"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

cmsRouter.post("/addcms", upload.single('myImage'), cmsController.addCms);
cmsRouter.post("/cmsadd",cmsController.Cmsadd);
cmsRouter.get("/listallcms",cmsController.getCmsSettings);
cmsRouter.post("/getonecms",cmsController.getOneCmsSettings);
cmsRouter.post("/deletecms",cmsController.deleteCms);
cmsRouter.post("/updatecms", upload.single('myImage'), cmsController.updateCms);


// currencyRouter.get("/listcurrency",currencyController.listCurrency);

// currencyRouter.get("/listallcurrency", currencyController.listAllCurrency);

// currencyRouter.get("/getcurrency/:id", currencyController.getSpecificCurrency);

// currencyRouter.post("/updatecurrency", upload.single('myImage'), currencyController.updateCurrency);

module.exports = cmsRouter;

// Helper.Auth.verify_origin,