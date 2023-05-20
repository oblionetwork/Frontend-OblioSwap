const { Validator } = require("node-input-validator");

const PoolDB = require("../ledom/pool.model");
const FarmPairDB = require("../ledom/stake.model");

exports.addPoolData = (req, res) => {
  try {
    const v = new Validator(req.body, {
      fromTokenSymbol: "required",
      fromTokenImg: "required",
      APR: "required",
      fromAddress: "required",
      pairId: "required",
      fromDecimal: "required",
      rewardToken: "required",
      allocationPoint: "required",
      poolStatus: "required"
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        let poolAddData = new PoolDB({
          chain_id: req.params.chain_id,
          fromTokenSymbol: req.body.fromTokenSymbol,
          fromTokenImg: req.body.fromTokenImg,
          APR: req.body.APR,
          fromAddress: req.body.fromAddress,
          pairId: req.body.pairId,
          fromDecimal: req.body.fromDecimal,
          RewardToken: req.body.rewardToken,
          allocationPoint: req.body.allocationPoint,
          poolStatus: req.body.poolStatus
        });

        poolAddData.save((err, savedPoolResult) => {
          if (err) {
            res.json({ status: 404, message: "Unable to add pool data" });
            res.end();
          } else {
            res.json({ status: 200, message: "Added Successfully" });
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
exports.listPoolData = async (req, res) => {
  let farmRes = await FarmPairDB.find({chain_id: req.params.chain_id}, { pairId: 1 });
  PoolDB.find({chain_id: req.params.chain_id}, (err, poolResult) => {
    if (err) {
      res.json({ status: 404, message: "Unable to find PoolResult" });
      res.end();
    } else {
      res.json({
        status: 200,
        message: "pool result",
        result: poolResult,
        farmpairId: farmRes,
      });
      res.end();
    }
  });
};

exports.updatePoolStatus = (req, res) => {
  try {
    const v = new Validator(req.body, {
      poolStatus: "required"
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        PoolDB.findOne({ _id: req.body.id }, (err, poolFindData) => {
          if (err) {
            res.json({ status: 404, message: "Unable to update pool Status" });
            res.end();
          }
          else {
            resu = poolFindData.poolStatus;
            if (resu === "Live") {
              PoolDB.update(
                { _id: req.body.id },
                {
                  $set: {

                    poolStatus: "Closed"
                  },
                },
                (err, poolUpdateResult) => {
                  if (err) {
                    res.json({ status: 404, message: "Unable to update" });
                    res.end();
                  } else {
                    res.json({ status: 200, message: "Updated Successfully" });
                    res.end();
                  }
                }
              );
            }
            else {
              PoolDB.update(
                { _id: req.body.id },
                {
                  $set: {

                    poolStatus: "Live"
                  },
                },
                (err, poolUpdateResult) => {
                  if (err) {
                    res.json({ status: 404, message: "Unable to update" });
                    res.end();
                  } else {
                    res.json({ status: 200, message: "Updated Successfully" });
                    res.end();
                  }
                }
              );
            }
          }
        })

      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};


