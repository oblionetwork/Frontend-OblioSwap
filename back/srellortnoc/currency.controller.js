const { Validator } = require("node-input-validator");

const currencyDB = require("../ledom/currency.model");
const { encrypt, decrypt } = require("../xlyvayh/tLDH2FhJJhtgIpBq");
const common = require("../xlyvayh/nommoc");

exports.addCurrency = (req, res) => {
  const file = req.file

  try {
    const v = new Validator(req.body, {
      tokenName: "required",
      tokenSymbol: "required",
      tokenAddress: "required",
      tokenDecimal: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        currencyDB.findOne(
          { tokenName: req.body.tokenName },
          (err, currencyFindResult) => {

            if (err) {
              res.json({ status: 404, message: "Unable to find Currency" });
              res.end();
            } else if (currencyFindResult != null) {
              res.json({ status: 404, message: "Currency Already Exists" });
              res.end();
            } else {
              var addr = req.body.tokenAddress + "/"
              common.imageUpload(req.file, addr, (uploadresult) => {

                let currencyData = new currencyDB({
                  tokenName: req.body.tokenName,
                  tokenSymbol: req.body.tokenSymbol,
                  tokenAddress: req.body.tokenAddress,
                  tokenDecimal: req.body.tokenDecimal,
                  tokenImg: uploadresult.url,
                });
                currencyData.save((err, currencySaveResult) => {
                  if (err) {
                    res.json({ status: 404, message: "Unable to add currency" });
                    res.end();
                  } else {
                    res.json({ status: 200, message: "Currency Added.", currencySaveResult });
                    res.end();
                  }
                });
              })
            }
          }
        );
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};



exports.listCurrency = (req, res) => {
  currencyDB.find({}, (err, currenciesList) => {
    if (err) {
      res.json({ status: 404, message: "Unable to Fetch Currency list" });
      res.end();
    } else {
      res.json({
        status: 200,
        message: "Currency List",
        result: currenciesList,
      });
      res.end();
    }
  });
};




exports.listAllCurrency = (req, res) => {
  currencyDB.find({}, (err, currenciesList) => {
    if (err) {
      res.json({ status: 404, message: "Unable to Fetch Currency list" });
      res.end();
    } else {
      res.json({
        status: 200,
        message: "Currency List",
        result: currenciesList,
      });
      res.end();
    }
  });
};

exports.getSpecificCurrency = (req, res) => {
  currencyDB.findOne({ _id: req.params.id }, (err, currenciesList) => {
    if (err) {
      res.json({ status: 404, message: "Unable to Fetch Currency list" });
      res.end();
    } else {
      res.json({
        status: 200,
        message: "Currency List",
        result: currenciesList,
      });
      res.end();
    }
  });
};

exports.updateCurrency = (req, res) => {
  try {

    common.imageUpload(req.file, (updatedTokenImg) => {
      currencyDB.update(
        { _id: req.body.id },
        {
          $set: {
            tokenName: req.body.tokenName,
            tokenSymbol: req.body.tokenSymbol,
            tokenAddress: req.body.tokenAddress,
            tokenDecimal: req.body.tokenDecimal,
            tokenImg: updatedTokenImg.url,
          }
        }, { omitUndefined: true },
        (err, updateCurrResponse) => {
          if (err) {
            res.json({ status: 404, message: "Unable to update Currency" });
            res.end();
          } else {
            res.json({ status: 200, message: "Updated Successfully" });
            res.end();
          }
        }
      );
    })


  } catch (error) {

    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};


exports.removeCurrency = (req, res) => {

  currencyDB.deleteOne({ _id: req.body.id }, (err, data) => {
    if (err) {
      res.json({ status: 404, message: "something went wrong" })
      res.end()
    }
    else {
      res.json({ status: 200, message: "Deleted Successfully" })

    }
  })
}
