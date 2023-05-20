const { request } = require("express");
const { Validator } = require("node-input-validator");
const { aggregate } = require("../ledom/liquidity.model");

const LiquidityDB = require("../ledom/liquidity.model");
const common = require("../xlyvayh/nommoc")


exports.addLiquidity = (req, res) => {
  try {
    const v = new Validator(req.body, {
      user_address: "required",
      from_currency: "required",
      to_currency: "required",
      from_address: "required",
      to_address: "required",
      from_amount: "required",
      to_amount: "required",
      tx_id: "required",
      pair_address: "required",
      pairInfo: "required",
      type: "required",
      lp_value: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {

        let token0_currency = req.body.from_address < req.body.to_address ? req.body.from_currency : req.body.to_currency
        let token1_currency = req.body.from_address < req.body.to_address ? req.body.to_currency : req.body.from_currency
        let token0_address = req.body.from_address < req.body.to_address ? req.body.from_address : req.body.to_address
        let token1_address = req.body.from_address < req.body.to_address ? req.body.to_address : req.body.from_address
        let token0_amount = req.body.from_address < req.body.to_address ? req.body.from_amount : req.body.to_amount
        let token1_amount = req.body.from_address < req.body.to_address ? req.body.to_amount : req.body.from_amount

        if (req.body.type == "add") {

          LiquidityDB.findOne({ user_address: req.body.user_address, pair_address: req.body.pair_address }, (err, findResultsss) => {



            if (findResultsss == null) {
              let liquidityData = new LiquidityDB({
                user_address: req.body.user_address,
                from_currency: token0_currency,
                to_currency: token1_currency,
                from_address: token0_address,
                to_address: token1_address,
                from_amount: token0_amount,
                to_amount: token1_amount,
                tx_id: req.body.tx_id,
                pair_address: req.body.pair_address,
                pairInfo: req.body.pairInfo,
                type: req.body.type,
                lp_value: req.body.lp_value,
                from_img: req.body.from_img,
                to_img: req.body.to_img
              });

              liquidityData.save((err, liqSaveRes) => {


                if (err) {
                  res.json({ status: 404, message: "Unable to add Liquidity", liquidityData });
                  res.end();
                } else {
                  res.json({ status: 200, message: "Liquidity Added Successfully" });
                  res.end();
                }
              });
            }
            else {
              res.json({ status: 200, message: "successs" });

              let obj = {
                from_amount: parseFloat(findResultsss.from_amount) + parseFloat(token0_amount),
                to_amount: parseFloat(findResultsss.to_amount) + parseFloat(token1_amount),
                lp_value: parseFloat(findResultsss.lp_value) + parseFloat(req.body.lp_value),
              }

              LiquidityDB.updateOne({ user_address: req.body.user_address, pair_address: req.body.pair_address },
                {
                  "$set": {
                    from_amount: obj.from_amount,
                    to_amount: obj.to_amount,
                    lp_value: obj.lp_value,
                  }
                }, function (err, data) {

                })

            }


          })

        }
        else {

          LiquidityDB.findOne({ user_address: req.body.user_address, pair_address: req.body.pair_address }, (err, findResultsss) => {
            if (findResultsss) {

              let obj = {
                from_amount: parseFloat(findResultsss.from_amount) - parseFloat(token0_amount),
                to_amount: parseFloat(findResultsss.to_amount) - parseFloat(token1_amount),
                lp_value: parseFloat(findResultsss.lp_value) - parseFloat(req.body.lp_value),

              }
              LiquidityDB.updateOne({ user_address: req.body.user_address, pair_address: req.body.pair_address }, {
                "$set": {
                  from_amount: obj.from_amount,
                  to_amount: obj.to_amount,
                  lp_value: obj.lp_value,
                }
              }, function (err, data) {
                res.json({ status: 200, msg: "Updated Successfully" })
              })

            }
          })

        }

      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};

exports.listLiquidity = (req, res) => {
  LiquidityDB.find({ user_address: req.body.user_address, }, (err, liqFindResult) => {
    if (err) {
      res.json({ status: 404, message: "Error in finding liquidity Results" });
      res.end();
    } else {
      res.json({
        status: 200,
        message: "Liquidity Results",
        result: liqFindResult,
      });
      res.end();
    }
  });
};

exports.listAllLiquidity = (req, res) => {
  LiquidityDB.find({}, (err, liqFindResult) => {
    if (err) {
      res.json({ status: 404, message: "Error in finding liquidity Results" });
      res.end();
    } else {
      res.json({
        status: 200,
        message: "Liquidity Results",
        result: liqFindResult,
      });
      res.end();
    }
  });
};


exports.listUserLiquidity = async (req, res) => {


  LiquidityDB.find({ $and: [{ user_address: req.params.userAddress }, { from_amount: { $gt: 0 } }, { to_amount: { $gt: 0 } }] }, (err, findResultsss) => {

    if (err) {
      res.json({
        status: false,
        message: "Error in finding user liquidity",
      });
      res.end();
    }
    else if (findResultsss == null) {
      res.json({ status: false, message: "Liquidity Data Not found" });
      res.end();
    }

    else {
      res.json({
        status: 200,
        message: "User Liquidity Data",
        result: findResultsss,
      });
      res.end();
      // LiquidityDB.aggregate([
      //   { $sort: { _id: -1 } },
      //   {
      //     "$match": {
      //       "user_address": req.params.userAddress,
      //       "chain_id": req.params.chain_id
      //     }
      //   },
      //   {
      //     $group: {
      //       _id: "$pair_address",
      //       chain_id: { $last: "$chain_id" },
      //       user_address: { $last: "$user_address" },
      //       from_currency: { $last: "$from_currency" },
      //       to_currency: { $last: "$to_currency" },
      //       from_address: { $last: "$from_address" },
      //       to_address: { $last: "$to_address" },
      //       from_amount: { $last: "$from_amount" },
      //       to_amount: { $last: "$to_amount" },
      //       tx_id: { $last: "$tx_id" },
      //       pair_address: { $last: "$pair_address" },
      //       pairInfo: { $last: "$pairInfo" },
      //       type: { $last: "$type" },
      //       lp_value: { $last: "$lp_value" },
      //       from_img: { $last: "$from_img" },
      //       to_img: { $last: "$to_img" }
      //     },
      //   },
      // ]).then((aggregateResults) => {
      //   res.json({
      //     status: true,
      //     message: "User Liquidity Data",
      //     result: aggregateResults,
      //   });
      //   res.end();
      // })
      //   .catch((err) => {
      //     
      //   });
    }
  })



};




