const StakeDB = require("../ledom/stake.model");

const stakeHistoryDB = require("../ledom/stakehistory.model")

const { Validator } = require("node-input-validator");

exports.addStakeData = (req, res) => {
  try {
    const v = new Validator(req.body, {
      fromTokenSymbol: "required",
      fromTokenImg: "required",
      toTokenSymbol: "required",
      toTokenImg: "required",
      APR: "required",
      pairInfo: "required",
      pairAddress: "required",
      pairId: "required",
      allocationPoint: "required",
      stakeStatus: "required"

    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        StakeDB.findOne({chain_id:req.params.chain_id, pair: req.body.pair }, (err, stakeDataFind) => {
          if (err) {
            res.json({ status: 404, message: "Error in finding stake data" });
            res.end();
          } else if (stakeDataFind != null) {
            res.json({ status: 404, message: "Stake Data already added" });
            res.end();
          } else {
            let stakeAddData = new StakeDB({
              pair: req.body.pair,
              chain_id:req.params.chain_id,
              fromTokenSymbol: req.body.fromTokenSymbol,
              fromTokenImg: req.body.fromTokenImg,
              toTokenSymbol: req.body.toTokenSymbol,
              toTokenImg: req.body.toTokenImg,
              APR: req.body.APR,
              pairInfo: req.body.pairInfo,
              pairAddress: req.body.pairAddress,
              pairId: req.body.pairId,
              allocationPoint: req.body.allocationPoint,
              stakeStatus: req.body.stakeStatus
            });

            stakeAddData.save((err, savedStakeData) => {
              if (err) {
                res.json({ status: 404, message: "Unable to add Stake Data" });
                res.end();
              } else {
                res.json({ status: 200, message: "Stake Data Added" });
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

exports.listStakeData = (req, res) => {
  StakeDB.find({chain_id:req.params.chain_id,}, (err, stakeFindResult) => {
    if (err) {
      res.json({ status: 404, message: "Unable to find stake result" });
      res.end();
    } else {
      res.json({
        status: 200,
        message: "Stake Results",
        result: stakeFindResult,
      });
      res.end();
    }
  });
};

exports.updateStakeData = (req, res) => {
  try {
    const v = new Validator(req.body, {
      stakeStatus: "required"
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        StakeDB.findOne({ _id: req.body.id }, (err, stakeFindData) => {
          if (err) {
            res.json({ status: 404, message: "Unable to update Stake Status" });
            res.end();
          }
          else {
            resu = stakeFindData.stakeStatus;
            if (resu === "Live") {
              StakeDB.update(
                { _id: req.body.id },
                {
                  $set: {

                    stakeStatus: "Closed"
                  },
                },
                (err, stakeUpdateResult) => {
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
              StakeDB.update(
                { _id: req.body.id },
                {
                  $set: {

                    stakeStatus: "Live"
                  },
                },
                (err, stakeUpdateResult) => {
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

exports.postStakeHistory = (req, res) => {
  try {
    const v = new Validator(req.body, {
      hash: "required",
      userAddress: "required",
      stakeAmount: "required",
      pairName: "required",
      pairId: "required",
      pairAddress: "required"
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {

        let stakeHistoryData = new stakeHistoryDB({
              chain_id:req.params.chain_id,
          hash: req.body.hash,
          userAddress: req.body.userAddress,
          stakeAmount: req.body.stakeAmount,
          pairName: req.body.pairName,
          pairId: req.body.pairId,
          pairAddress: req.body.pairAddress
        });

        stakeHistoryData.save((err, stakeHistRes) => {
          if (err) {
            res.json({ status: 404, message: "Error in saving stake History" });
            res.end()
          }
          else {
            res.json({ status: 200, message: "Stake History Added" });
            res.end()
          }
        })
      }

    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};

exports.listStakeHistory = (req, res) => {
  stakeHistoryDB.find({chain_id:req.params.chain_id,}, (err, stakeHistoryResult) => {
    if (err) {
      res.json({ status: 404, message: "Error in fetching stake history" });
      res.end()
    }
    else if (stakeHistoryResult == null) {
      res.json({ status: 404, message: "History is empty" });
      res.end()
    }
    else {
      res.json({ status: 200, message: "stake history is fetched", result: stakeHistoryResult });
      res.end()
    }
  })
}