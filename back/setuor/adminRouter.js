const adminRouter = require("express").Router();

const adminDB = require("../ledom/admin.model");
const mongoose = require("mongoose");

const BlockListDB = require("../ledom/ipblocklist.model");

const { encrypt, decrypt } = require("../xlyvayh/tLDH2FhJJhtgIpBq");

const { Validator } = require("node-input-validator");
const jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");

adminRouter.post("/createadmin", (req, res) => {
  try {
    const v = new Validator(req.body, {
      email: "required",
      password: "required",
      pattern: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        adminDB.findOne(
          { email: encrypt(req.body.email) },
          (err, adminFindResult) => {
            if (err) {
              res.json({ status: 404, message: "Unable to find AdminUser" });
              res.end();
            } else if (adminFindResult) {
              res.json({ status: 404, message: "AdminUser Already Exists" });
              res.end();
            } else {
              let passArray = [];
              let patternArray = [];
              passArray.push(encrypt(req.body.password));
              patternArray.push(encrypt(req.body.pattern));
              var secret = speakeasy.generateSecret({
                length: 10,
                name: "Xpocket Admin"
              });

              let adminSaveData = new adminDB({
                email: encrypt(req.body.email),
                password: encrypt(req.body.password),
                pattern: encrypt(req.body.pattern),
                pattern_array: patternArray,
                secreturl: secret.base32,
                password_array: passArray,
                secretotpauthurl:
                  "https://chart.googleapis.com/chart?chs=168x168&chld=M|0&cht=qr&chl=" +
                  secret.otpauth_url +
                  "",
                tfa_status: false,
                login_attempts: 0,
                blocked_status: false,
              });
              adminSaveData.save((err, adminSaveResult) => {
                if (err) {
                  res.json({ status: 404, message: "Unable to add Admin" });
                  res.end();
                } else {
                  res.json({
                    status: 200,
                    message: "Admin Created Successfully",
                  });
                  res.end();
                }
              });
            }
          }
        );
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
});

adminRouter.post("/login", (req, res) => {
  try {
    const v = new Validator(req.body, {
      email: "required",
      password: "required",
      pattern: "required",
    });
    let a = decrypt("zPSTyR6SOqwTjrKLWdZQ5xpIWbVT5utAksVff1Jfl0I=")
    let b = decrypt("J5yZmZVxlj/DXBcU1QxN3/7N1MCHFxDY6S+i+D7nCzQ=")
    let c = decrypt("8huPvhCTBqA2f07Td55NFw==")


    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {

        adminDB.findOne(
          { email: encrypt(req.body.email) },
          (err, adminResult) => {

            // 
            // 
            if (err) {
              res.json({ status: 404, message: "Unable to find Admin user" });
              res.end();
            } else if (adminResult == null) {
              res.json({ status: 404, message: "Admin Not Found" });
              res.end();
            } else {
              if (req.body.password === decrypt(adminResult.password)) {
                if (req.body.pattern == decrypt(adminResult.pattern)) {
                  let enc_id = adminResult._id;
                  var token = jwt.sign(
                    { id: adminResult._id },
                    "authtoken"
                  );

                  res.json({
                    status: 200,
                    message: "Logged in Successfully",
                    auth: token,
                    id: encrypt(enc_id.toString()),
                  });
                  res.end();
                } else {
                  res.json({ status: 404, message: "Incorrect Pattern" });
                  res.end();
                }
              } else {
                adminDB.findOne(
                  { email: encrypt(req.body.email) },
                  (err, adminsres) => {
                    if (!err) {
                      adminDB.updateOne(
                        { email: encrypt(req.body.email) },
                        { $inc: { login_attempts: 1 } },
                        (err, loginUpdateResult) => {
                          if (err) {
                            res.json({
                              status: 404,
                              message: "Unable to increase login attempts",
                            });
                            res.end();
                          } else if (adminsres.login_attempts >= 5) {
                            let ipAdd = new BlockListDB({
                              ipAddress: req.connection.remoteAddress,
                            });

                            ipAdd.save((err, saveResult) => {
                              if (err) {
                                res.json({
                                  status: 404,
                                  message: "Unable to add in blocklist",
                                });
                                res.end();
                              } else {
                                res.json({
                                  status: 404,
                                  message: "Blocked..Can't login",
                                });
                                res.end();
                              }
                            });
                          } else {
                            res.json({
                              status: 404,
                              message: "Incorrect Password",
                            });
                            res.end();
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          }
        );
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
});

adminRouter.get("/getadmindetails", (req, res) => {
  let a = decrypt("zPSTyR6SOqwTjrKLWdZQ5xpIWbVT5utAksVff1Jfl0I=")
  let b = decrypt("4OWp3G386Qk4gFZtC7QwDQ==")
  let c = decrypt("8huPvhCTBqA2f07Td55NFw==")

  adminDB.findOne({}, (err, result) => {
    if (err) {
      res.json({ status: 404, message: "Unable to find Admin Details" });
      res.end();
    } else {
      res.json({
        status: 200,
        message: "AdminResults Fetched",
        result: result,
      });
      res.end();
    }
  });
});

module.exports = adminRouter;
