const currencyRouter = require("express").Router();

const currencyController = require("./../srellortnoc/currency.controller");
const multer = require('multer');
const path = require("path");

var Helper = {
  Auth: require('../srellortnoc/nigiro')
}

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../public/uploads/"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });



const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

currencyRouter.post("/addcurrency", upload.single('myImage'), currencyController.addCurrency);

 currencyRouter.get("/listcurrency",currencyController.listCurrency);

currencyRouter.get("/listallcurrency", currencyController.listAllCurrency);

currencyRouter.get("/getcurrency/:id", currencyController.getSpecificCurrency);

currencyRouter.post("/updatecurrency", upload.single('myImage'), currencyController.updateCurrency);

currencyRouter.post("/delete", currencyController.removeCurrency);

module.exports = currencyRouter;

// Helper.Auth.verify_origin,