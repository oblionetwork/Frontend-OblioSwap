const { Validator } = require("node-input-validator");

const SwapDB = require("../ledom/swap.model");

exports.addSwapData = (req, res) => {
  try {
    const v = new Validator(req.body, {
      hash: "required",
      userAddress: "required",
      fromToken: "required",
      toToken: "required",
      toAmount: "required",
      fromAmount: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: false,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        let swapData = new SwapDB({
          hash: req.body.hash,
          // chain_id:req.params.chain_id,
          userAddress: req.body.userAddress,
          fromToken: req.body.fromToken,
          toToken: req.body.toToken,
          toAmount: req.body.toAmount,
          fromAmount: req.body.fromAmount,
        });

        swapData.save((err, addedSwapData) => {
          if (err) {
            res.json({ status: false, message: "Error in adding swap data" });
            res.end();
          } else {
            res.json({ status: true, message: "Data added" });
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

exports.listSwapData = (req, res) => {
  SwapDB.find({ userAddress:req.body.userAddress,}, (err, findedSwapData) => {
    if (err) {
      res.json({ status: false, message: "Error in Finding swap Data" });
      res.end();
    } else {
      res.json({
        status: true,
        message: "Swap History Results",
        result: findedSwapData,
      });
      res.end();
    }
  });
};

exports.listAllSwapData = (req, res) => {
  SwapDB.find({ }, (err, findedSwapData) => {
    if (err) {
      res.json({ status: false, message: "Error in Finding swap Data" });
      res.end();
    } else {
      res.json({
        status: true,
        message: "Swap History Results",
        result: findedSwapData,
      });
      res.end();
    }
  });
};
