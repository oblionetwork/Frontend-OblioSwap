const { Validator } = require("node-input-validator");
const speakeasy = require("speakeasy");
const jwt = require("jsonwebtoken");
const QRcode = require('qrcode');

const { encrypt, decrypt } = require("../xlyvayh/tLDH2FhJJhtgIpBq");

const AdminDB = require("../ledom/admin.model");



exports.changePassword = (req, res) => {
  try {
    const v = new Validator(req.body, {
      currentpassword: "required",
      newpassword: "required",
      confirmpassword: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        AdminDB.findOne({}, (err, adminFindResult) => {
          if (err) {
            res.json({ status: 404, message: "Unable to find Admin" });
            res.end();
          } else {

            let dec_cur_password = decrypt(adminFindResult.password);

            if (dec_cur_password === req.body.currentpassword) {

              let check = adminFindResult.password_array;
              let checkResult = check.includes(encrypt(req.body.newpassword));
              if (checkResult) {
                res.json({
                  status: 404,
                  message: "Please Choose a Different Password",
                });
                res.end();
              } else {
                if (adminFindResult.password_array.length == 5) {
                  adminFindResult.password_array.shift();
                  adminFindResult.password_array.push(
                    encrypt(req.body.newpassword)
                  );
                } else {
                  adminFindResult.password_array.push(
                    encrypt(req.body.newpassword)
                  );
                }
                if (req.body.newpassword == req.body.confirmpassword) {
                  let enc_new_pass = encrypt(req.body.newpassword);
                  AdminDB.updateOne(
                    { email: adminFindResult.email },
                    {
                      $set: {
                        password_array: adminFindResult.password_array,
                        password: enc_new_pass,
                      },
                    },
                    (err, PasswordUpdateResult) => {
                      if (err) {
                        res.json({
                          status: 404,
                          message: "Unable to update Password",
                        });
                        res.end();
                      } else {
                        res.json({ status: 200, message: "Password Updated" });
                        res.end();
                      }
                    }
                  );
                } else {
                  res.json({
                    status: 404,
                    message: "New and Confirm Passwords Mismatch",
                  });
                  res.end();
                }
              }
            } else {
              res.json({
                status: 404,
                message: "Your Current password is Incorrect",
              });
              res.end();
            }
          }
        });
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};

// exports.changePattern = (req, res) => {
//   try {
//     const v = new Validator(req.body, {
//       currentpattern: "required",
//       newpattern: "required",
//       confirmpattern: "required",
//     });

//     v.check().then((matched) => {
//       if (!matched) {
//         res.json({
//           status: 404,
//           message: "Please Fill All the Required Fields...",
//         });
//         res.end();
//       } else {
//         AdminDB.findOne({}, (err, patternFindResult) => {
//           if (err) {
//             res.json({ status: 404, message: "Unable to find Admin" });
//             res.end();
//           } else {
//             if (req.body.currentpattern == decrypt(patternFindResult.pattern)) {
//               if (req.body.newpattern == req.body.confirmpattern) {
//                 let checkpattern = patternFindResult.pattern_array;
//                 let checkPatternResult = checkpattern.includes(
//                   req.body.newpattern
//                 );
//                 if (checkPatternResult) {
//                   res.json({
//                     status: 404,
//                     message: "Please choose a Different Pattern",
//                   });
//                   res.end();
//                 } else {
//                   if (patternFindResult.pattern_array.length == 5) {
//                     patternFindResult.pattern_array.shift();
//                     patternFindResult.pattern_array.push(req.body.newpattern); //new pass given by user
//                   } else {
//                     patternFindResult.pattern_array.push(req.body.newpattern);
//                   }

//                   AdminDB.updateOne(
//                     { email: patternFindResult.email },
//                     {
//                       $set: {
//                         pattern_array: encrypt(patternFindResult.pattern_array),
//                         pattern: encrypt(req.body.newpattern),
//                       },
//                     },
//                     (err, patternUpdateResult) => {
//                       if (err) {
//                         res.json({
//                           status: 404,
//                           message: "Unable to Update Pattern",
//                         });
//                         res.end();
//                       } else {
//                         res.json({ status: 200, message: "Pattern Updated" });
//                         res.end();
//                       }
//                     }
//                   );
//                 }
//               } else {
//                 res.json({
//                   status: 404,
//                   message: "New and Confirm patterns Not Matching",
//                 });
//                 res.end();
//               }
//             } else {
//               res.json({
//                 status: 404,
//                 message: "Your Current Pattern is wrong",
//               });
//               res.end();
//             }
//           }
//         });
//       }
//     });
//   } catch (error) {
//     res.json({ status: 404, message: "Something went Wrong..." });
//     res.end();
//   }
// };




exports.changePattern = (req, res) => {
  try {
    const v = new Validator(req.body, {
      currentpattern: "required",
      newpattern: "required",
      confirmpattern: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        AdminDB.findOne({}, (err, adminFindResult) => {
          if (err) {
            res.json({ status: 404, message: "Unable to find Admin" });
            res.end();
          } else {

            let dec_cur_pattern = decrypt(adminFindResult.pattern);

            if (dec_cur_pattern === req.body.currentpattern) {

              let check = adminFindResult.pattern_array;
              let checkResult = check.includes(encrypt(req.body.newpattern));
              if (checkResult) {
                res.json({
                  status: 404,
                  message: "Please Choose a Different Pattern",
                });
                res.end();
              } else {
                if (adminFindResult.pattern_array.length == 5) {
                  adminFindResult.pattern_array.shift();
                  adminFindResult.pattern_array.push(
                    encrypt(req.body.newpattern)
                  );
                } else {
                  adminFindResult.pattern_array.push(
                    encrypt(req.body.newpattern)
                  );
                }
                if (req.body.newpattern == req.body.confirmpattern) {
                  let enc_new_pass = encrypt(req.body.newpattern);
                  AdminDB.updateOne(
                    { email: adminFindResult.email },
                    {
                      $set: {
                        pattern_array: adminFindResult.pattern_array,
                        pattern: enc_new_pass,
                      },
                    },
                    (err, PasswordUpdateResult) => {
                      if (err) {
                        res.json({
                          status: 404,
                          message: "Unable to update Pattern",
                        });
                        res.end();
                      } else {
                        res.json({ status: 200, message: "Pattern Updated" });
                        res.end();
                      }
                    }
                  );
                } else {
                  res.json({
                    status: 404,
                    message: "New and Confirm Pattern Mismatch",
                  });
                  res.end();
                }
              }
            } else {
              res.json({
                status: 404,
                message: "Your Current pattern is Incorrect",
              });
              res.end();
            }
          }
        });
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};


// exports.twoFactorAuth = (req, res) => {
//   try {
//     const v = new Validator(req.body, {
//       sixDigitCode: "required",
//     });

//     v.check().then((matched) => {
//       if (!matched) {
//         res.json({
//           status: 404,
//           message: "Please Fill All the Required Fields...",
//         });
//         res.end();
//       } 
//       else {
//         if (req.body.tfa_status == true) {
//           AdminDB.find({}, (err, findResult) => {
//             
//             if (err) {
//               res.json({ status: 404, message: "Error in finding admin" });
//               res.end();
//             } else if (findResult[0] == null || findResult[0] == "") {
//               res.json({ status: 404, message: "Admin Not Found" });
//               res.end();
//             } else {
//               var verified = speakeasy.totp.verify({
//                 secret: findResult[0].secreturl, 
//                 encoding: "base32",
//                 token: req.body.sixDigitCode,
//               });
//               if (verified) {
//                 AdminDB.update(
//                   {},
//                   { $set: { tfa_status: false } },
//                   (err, disableResult) => {
//                     if (err) {
//                       res.json({
//                         status: 404,
//                         message: "Unable to disable TFA",
//                       });
//                       res.end();
//                     } else {
//                       var secret = speakeasy.generateSecret({
//                         length: 10,
//                         name: "Xpocket Admin"
//                       });

//                       AdminDB.update(
//                         {},
//                         {
//                           $set: {
//                             secreturl: secret.base32,
//                             secretotpauthurl:
//                               "https://chart.googleapis.com/chart?chs=168x168&chld=M|0&cht=qr&chl=" +
//                               secret.otpauth_url +
//                               "",
//                           },
//                         },
//                         (err, newTfaResult) => {
//                           if (err) {
//                             res.json({
//                               status: 404,
//                               message: "Error in Generating New TwoFa",
//                             });
//                             res.end();
//                           } else {
//                             res.json({
//                               status: 200,
//                               message: "TFA Disabled Successfully",
//                             });
//                             res.end();
//                           }
//                         }
//                       );
//                     }
//                   }
//                 );
//               } else {
//                 res.json({ status: 404, message: "Invalid TFA Code" });
//                 res.end();
//               }
//             }
//           });
//         } else {

//           AdminDB.find({ _id: req.body.userId }, (err, adminFind) => {

//             if (err) {
//               res.json({ status: 404, message: "Error in finding admin" });
//               res.end();
//             } else if (adminFind == null || adminFind == "") {
//               res.json({ status: 404, message: "Admin Not Found" });
//               res.end();
//             } else {
//               var verified = speakeasy.totp.verify({
//                 secret: req.body.secretKey,
//                 encoding: "base32",
//                 token: req.body.sixDigitCode,
//               });

//               

//               if (verified) {
//                 AdminDB.update(
//                   { _id:(req.body.userId) },
//                   { $set: { tfa_status: true } },
//                   (err, updateTfaResult) => {
//                     if (err) {
//                       res.json({
//                         status: 404,
//                         message: "Error in Updating TFA",
//                       });
//                       res.end();
//                     } else {
//                       res.json({
//                         status: 200,
//                         message: "TFA Enabled Successfully",
//                       });
//                       res.end();
//                     }
//                   }
//                 );
//               } else {
//                 res.json({ status: 404, message: "Invalid TFA Code" });
//                 res.end();
//               }
//             }
//           });
//         }
//       }
//     });
//   } catch (error) {
//     res.json({ status: 404, message: "Something went Wrong..." });
//     res.end();
//   }
// };




exports.twoFactorAuth = (req, res) => {
  try {
    const v = new Validator(req.body, {
      sixDigitCode: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      }
      else {
        if (req.body.tfa_status == true) {
          AdminDB.find({}, (err, findResult) => {

            if (err) {
              res.json({ status: 404, message: "Error in finding admin" });
              res.end();
            } else if (findResult[0] == null || findResult[0] == "") {
              res.json({ status: 404, message: "Admin Not Found" });
              res.end();
            } else {
              var verified = speakeasy.totp.verify({
                secret: findResult[0].secreturl,
                encoding: "base32",
                token: req.body.sixDigitCode,
                window:4
              });
              if (verified) {
                AdminDB.update(
                  {},
                  { $set: { tfa_status: false } },
                  (err, disableResult) => {
                    if (err) {
                      res.json({
                        status: 404,
                        message: "Unable to disable TFA",
                      });
                      res.end();
                    } else {
                      var secret = speakeasy.generateSecret({
                        length: 10,
                        name: "Xpocket Admin"
                      });

                      AdminDB.update(
                        {},
                        {
                          $set: {
                            secreturl: secret.base32,
                            secretotpauthurl:
                              "https://chart.googleapis.com/chart?chs=168x168&chld=M|0&cht=qr&chl=" +
                              secret.otpauth_url +
                              "",
                          },
                        },
                        (err, newTfaResult) => {
                          if (err) {
                            res.json({
                              status: 404,
                              message: "Error in Generating New TwoFa",
                            });
                            res.end();
                          } else {
                            res.json({
                              status: 200,
                              message: "TFA Disabled Successfully",
                            });
                            res.end();
                          }
                        }
                      );
                    }
                  }
                );
              } else {
                res.json({ status: 404, message: "Invalid TFA Code" });
                res.end();
              }
            }
          });
        }
        else if (req.body.tfa_status == false) {

          AdminDB.findOne({}, (err, adminFind) => {

            if (err) {
              res.json({ status: 404, message: "Error in finding admin" });
              res.end();
            } else if (adminFind == null || adminFind == "") {
              res.json({ status: 404, message: "Admin Not Found" });
              res.end();
            } else {
              var verified = speakeasy.totp.verify({
                secret: req.body.secretKey,
                encoding: "base32",
                token: req.body.sixDigitCode,
              });



              if (verified) {
                AdminDB.update(
                  { $set: { tfa_status: true } },
                  (err, updateTfaResult) => {
                    if (err) {
                      res.json({
                        status: 404,
                        message: "Error in Updating TFA",
                      });
                      res.end();
                    } else {
                      res.json({
                        status: 200,
                        message: "TFA Enabled Successfully",
                      });
                      res.end();
                    }
                  }
                );
              } else {
                res.json({ status: 404, message: "Invalid TFA Code" });
                res.end();
              }
            }
          });
        }
        else {

        }
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};

// exports.tfasetup = (req, res) => {
//   try {
//       let data = req.body;
//       AdminDB.findOne({ _id: req.body.userId }, (err, getadmin) => {
//         
//         
//       // AdminDB.findone({ "_id": mongoose.Types.ObjectId(req.userId)}, {}, (getadmin) => {
//           if (getadmin) {
//               // if (getadmin.status == 1) {
//                   if (getadmin.tfa_status == false) {
//                     
//                       if (data.tfaenablekey != undefined && typeof data.tfaenablekey != 'undefined' && data.tfaenablekey != " " && data.token != undefined && data.token != " "&& typeof data.token != 'undefined') {
//                         
//                           let enable = speakeasy.totp.verify({
//                               secret: data.tfaenablekey,
//                               encoding: 'base32',
//                               token: data.token
//                           });
//                           
//                           if (enable) {
//                               let enckey = encrypt(data.tfaenablekey);
//                               AdminDB.update(
//                                 {},
//                                 { $set: { tfa_status: true,secreturl:enckey} },
//                                 (err, tfaenable) => {
//                               // queryhelper.updateData('owner', 'one', { "_id": mongoose.Types.ObjectId(getadmin._id) }, { "tfastatus": 1, "tfasecret": enckey }, (tfaenable) => {
//                                   if (tfaenable) {
//                                       res.json({ "status": true, "message": "TFA enabled successfully" })
//                                   } else {
//                                       res.json({ "status": false, "message": "Error occurred in tfa enable. Please try again later" })
//                                   }
//                               })
//                           } else {
//                               res.json({ "status": false, "message": "Invalid tfa code" })
//                           }
//                       } else {
//                           let secretname = getadmin.name + "@" + "Xpocket";
//                           let secret = speakeasy.generateSecret({ "length": 20, "name": secretname });
//                           secret.otpauth_url = secret.otpauth_url + "&issuer=Xpocket";
//                           QRcode.toDataURL(secret.otpauth_url, (err, data_url) => {
//                               secret.dataUrl = data_url;
//                               res.json({ "status": true, "message": "successdata", "data": secret })
//                           })
//                       }
//                   }
//                    else {
//                       let deckey = decrypt(getadmin.secreturl);
//                       let disable = speakeasy.totp.verify({
//                           secret: deckey,
//                           encoding: 'base32',
//                           token: data.token
//                       });
//                       if (disable) {
//                         AdminDB.update(
//                           {},
//                           { $set: { tfa_status: false,secreturl:""} },
//                           (err, tfadisable) => {

//                           // queryhelper.updateData('owner', 'one', { "_id": mongoose.Types.ObjectId(getadmin._id) }, { "tfastatus": 0, "tfasecret": "" }, (tfadisable) => {
//                               if (tfadisable) {
//                                   res.json({ "status": true, "message": "TFA disabled successfully" })
//                               } else {
//                                   res.json({ "status": false, "message": "Error occurred in tfa disable. Please try again later" })
//                               }
//                           })
//                       } else {
//                           res.json({ "status": false, "message": "Invalid tfa code" })
//                       }
//                   }
//               // } 
//               // else {
//               //     res.json({ "status": false, "message": "Your account has been de-activated by admin" })
//               // }
//           } else {
//               res.json({ "status": false, "message": "Unauthorized person" })
//           }
//       })
//   } catch (e) {
//       
//       res.json({ "status": false, "message": "Oops! Something went wrong. Please try again later" })
//   }
// }





















exports.verifyOTP = (req, res) => {
  try {
    const v = new Validator(req.body, {
      sixDigitCode: "required",
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {

        AdminDB.findOne({}, async (err, OTPFindResult) => {
          if (err) {
            res.json({ status: 404, message: "Error in Verifying OTP" });
            res.end();
          } else if (OTPFindResult == null || OTPFindResult == "") {
            res.json({ status: 200, message: "Admin Not Found" });
            res.end();
          } else {
            var verified = speakeasy.totp.verify({
              secret: OTPFindResult.secreturl, //secret of the logged in user
              encoding: "base32",
              token: req.body.sixDigitCode,
              window:4
            });
            if (verified) {
              let adminFindData = await AdminDB.find({});

              let enc_id = adminFindData._id;
              var token = jwt.sign({ id: adminFindData._id }, "authtoken", {

              });

              res.json({
                status: 200,
                message: "Logged in Successfully",
                auth: token,
                id: encrypt(enc_id),
              });
              res.end();
            } else {
              res.json({ status: 404, message: "Invalid TFA Code" });
              res.end();
            }
          }
        });
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};
