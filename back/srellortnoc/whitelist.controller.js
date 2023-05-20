const WhiteListDB = require("../ledom/ipwhitelist.model");

const { Validator } = require("node-input-validator");
var os = require("os");

exports.addManualIp = (req, res) => {

  let whitelistData = new WhiteListDB({
    ipAddress: req.connection.remoteAddress,
  });
  WhiteListDB.findOne({ ipAddress: req.connection.remoteAddress }, (err, whitelist) => {
    if (err) {
      res.json({ status: false, message: "Error in find" });


    }
    else if (whitelist) {
      res.json({ status: true, message: "Already in whitelist" });

    }
    else {
      whitelistData.save((err, whiteSaveResult) => {
        if (err) {
          res.json({ status: false, message: "Unable to add Ip to whitelist" });
          res.end();
        } else {
          res.json({ status: true, message: "Added to Whitelist" });
          res.end();
        }
      });



    }


  })

};

exports.addWhiteList = (req, res) => {
  try {
    const v = new Validator(req.body, {
      ipAddress: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: false,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        let whitelistData = new WhiteListDB({
          ipAddress: req.body.ipAddress,
        });

        whitelistData.save((err, whiteSaveResult) => {
          if (err) {
            res.json({ status: false, message: "Unable to add Ip to whitelist" });
            res.end();
          } else if (whiteSaveResult) {
            res.json({ status: true, message: "Added to Whitelist" });
            res.end();
          }
          else {
            res.json({ status: false, message: "Unable to add Ip to whitelist" });
            res.end();
          }
        });
      }
    });
  } catch (error) {
    res.json({ status: false, message: "Something went Wrong..." });
    res.end();
  }
};

exports.listWhiteList = async (req, res) => {

  WhiteListDB.find(
    {},
    (err, WhiteFindResult) => {

      if (err) {
        res.json({ status: false, message: "Error in finding ip whitelist" });
        res.end();
      } else if (WhiteFindResult) {
        res.json({
          status: true,
          message: "Whitelist Result",
          result: WhiteFindResult,
        });
        res.end();
      } else {
        res.json({ status: false, message: "Your Ip is Blocked" });
        res.end();
      }
    }
  );
};

exports.listIpTable = (req, res) => {
  WhiteListDB.find({}, (err, whiteList) => {
    if (err) {
      res.json({ status: false, message: "Error in finding ip list" });
      res.end();
    } else {
      res.json({
        status: true,
        message: "Ip Whitelist Table",
        result: whiteList,
      });
      res.end();
    }
  });
};

exports.deleteIpwhite = (req, res) => {
  WhiteListDB.findByIdAndRemove({ _id: req.body.id }, (err, delIpRes) => {
    if (err) {
      res.json({ status: false, message: "Unable to delete" });
      res.end();
    } else {
      res.json({ status: true, message: "Deleted Successfully" });
      res.end();
    }
  });
};
