const BlockListDB = require("../ledom/ipblocklist.model");
const { Validator } = require("node-input-validator");

exports.addBlocklist = (req, res) => {
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
        let blocklistData = new BlockListDB({
          ipAddress: req.body.ipAddress,
        });

        blocklistData.save((err, blockSaveResult) => {
          if (err) {
            res.json({ status: false, message: "Unable to add Ip to blocklist" });
            res.end();
          } else {
            res.json({ status: true, message: "Added to Blocklist" });
            res.end();
          }
        });
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};


exports.listBlockList = (req, res) => {
  BlockListDB.find({}, (err, blockFindResult) => {
    if (err) {
      res.json({ status: false, message: "Unable to find Blocklist" });
      res.end();
    } else {
      res.json({
        status: true,
        message: "Blocklist Result",
        result: blockFindResult,
      });
      res.end();
    }
  });
};


exports.checkMyIp = (req, res) => {

  BlockListDB.findOne(
    { ipAddress: req.connection.remoteAddress },
    (err, ipResult) => {

      if (err) {
        res.json({ status: false, message: "Unable to find Blocklist" });
        res.end();
      } else if (ipResult != null) {
        res.json({ status: true, message: "Your Ip is Blocked" });
        res.end();
      }
      else {
        res.json({ status: false, message: "List is empty" });
        res.end();
      }
    }
  );
};


exports.deleteIpBlock = (req, res) => {
  BlockListDB.findByIdAndRemove({ _id: req.body.id }, (err, delIpRes) => {
    if (err) {
      res.json({ status: false, message: "Unable to delete" });
      res.end();
    } else if (delIpRes) {
      res.json({ status: true, message: "Deleted Successfully" });
      res.end();
    }
    else {
      res.json({ status: false, message: "No Data Found" });
      res.end();

    }
  });
};
