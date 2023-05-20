const { Validator } = require("node-input-validator");

const PairDB = require("../ledom/pair.model");

exports.addPair = (req, res) => {
  try {
    const v = new Validator(req.body, {
      tokenA: "required",
      tokenB: "required",
      tokenAAddress: "required",
      tokenBAddress: "required",
      tokenAAmount: "required",
      tokenBAmount: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {

        let pair = req.body.token + "_" + req.body.oppositeToken;

        PairDB.findOne({chain_id:req.params.chain_id, pair: pair }, (err, uniquePairResult) => {
          if (err) {
            res.json({ status: 404, message: "Unable to find pair" });
            res.end();
          } else if (uniquePairResult != null) {
            res.json({ status: 404, message: "Pair Already Exists" });
            res.end();
          } else {
            let pairAddData = new PairDB({
              chain_id: req.params.chain_id,
              tokenA: req.body.tokenA,
              tokenB: req.body.tokenB,
              tokenAAddress: req.body.tokenAAddress,
              tokenBAddress: req.body.tokenBAddress,
              tokenAAmount: req.body.tokenAAmount,
              tokenBAmount: req.body.tokenBAmount,
            });

            pairAddData.save((err, pairAddResult) => {
              if (err) {
                res.json({ status: 404, message: "Unable to add pair" });
                res.end();
              } else {
                res.json({ status: 200, message: "Pair Added" });
                res.end();
              }
            });
          }
        });
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};

exports.getAllPairs = (req, res) => {
  PairDB.find({chain_id:req.params.chain_id}, (err, pairResult) => {
    if (err) {
      res.json({ status: 404, message: "Unable to fetch pair results" });
      res.end();
    } else {
      res.json({ status: 200, message: "Results Fetched", result: pairResult });
      res.end();
    }
  });
};

exports.changePairStatus = (req, res) => {
  try {
    const v = new Validator(req.body, {
      pairId: "required",
      status: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        PairDB.findOne({ _id: req.body.pairId }, (err, pairFindResult) => {
          if (err) {
            res.json({ status: 404, message: "Error in Finding Pair" });
            res.end();
          } else {
            PairDB.update(
              { _id: req.body.pairId },
              { $set: { status: !req.body.status } },
              (err, pairStatusUpdate) => {
                if (err) {
                  res.json({ status: 404, message: "Unable to update Status" });
                  res.end();
                } else {
                  res.json({ status: 200, message: "Status Updated" });
                  res.end();
                }
              }
            );
          }
        });
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};
