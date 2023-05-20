
const { Validator } = require("node-input-validator");
const cmsDB = require("../ledom/cms.model");
const { encrypt, decrypt } = require("../xlyvayh/tLDH2FhJJhtgIpBq");
const common = require("../xlyvayh/nommoc");



exports.addCms = (req, res) => {
  const file = req.file

  try {
    const v = new Validator(req.body, {
      Heading: "required",
      Detail: "required",

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
        common.imageUpload(req.files, "CMS/", (uploadresult) => {

          let cmsData = new cmsDB({
            Heading: req.body.Heading,
            Detail: req.body.Detail,
            Img: uploadresult.url,
          });

          cmsData.save((err, cmsSaveResult) => {
            if (err) {
              res.json({ status: 404, message: "Unable to add cms" });
              res.end();
            } else {
              res.json({ status: 200, message: "Cms Added.", cmsSaveResult });
              res.end();
            }
          });

        })


        //   );
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};

//without image

exports.Cmsadd = (req, res) => {

  try {
    const v = new Validator(req.body, {
      Heading: "required",
      Detail: "required",

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

        let cmsData = new cmsDB({
          Heading: req.body.Heading,
          Detail: req.body.Detail,

        });

        cmsData.save((err, cmsSaveResult) => {
          if (err) {
            res.json({ status: 404, message: "Unable to add cms" });
            res.end();
          } else {
            res.json({ status: 200, message: "Cms Added.", cmsSaveResult });
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



// exports.addCms = (req, res) => {

//   try {
//     const v = new Validator(req.body, {
//       Heading: "required"

//     });

//     v.check().then((matched) => {
//       if (!matched) {
//         res.json({
//           status: false,
//           message: "Please Fill All the Required Fields...",
//         });
//         res.end();
//       } else {

//         cmsDB.findOne({_id:req.body.id}, (err, siteSettingsFindResult) => {
//           if (err) {
//             res.json({
//               status: false,
//               message: "Unable to Fetch Cms Results",
//             });
//             res.end();
//           } 

//           else if(siteSettingsFindResult){

//             common.imageUpload(req.file, (uploadresult) => {
//             cmsDB.update(
//               {_id:req.body.id},
//               {
//                 $set: {
//                   Heading: req.body.Heading,
//                   Detail: req.body.Detail,
//                   Img: uploadresult.url,

//                 },
//               },{omitUndefined:true},
//               (err, updateResult) => {
//                 if (err) {
//                   res.json({
//                     status: false,
//                     message: "Unable to Update Cms",
//                   });
//                   res.end();
//                 } else {
//                   res.json({ status: true, message: "Cms Updated" });
//                   res.end();
//                 }
//               }
//             );
//             })
//           }

//           else 
//           {
//             common.imageUpload(req.file, (uploadresult) => {
//             let addcmsData = new cmsDB({
//               Heading: req.body.Heading,
//               Detail: req.body.Detail,
//               Img: uploadresult.url

//             });
//             addcmsData.save((err, saveRes) => {
//               
//               if (err) {
//                 res.json({ status: false, message: "Unable to add Cms" });
//                 res.end()
//               }
//               else {
//                 res.json({ status: true, message: "Added Successfully" });
//                 res.end()
//               }
//             })
//           })

//           }

//         });

//       }
//     });
//   } catch (error) {
//     res.json({ status: 404, message: "Something went Wrong..." });
//     res.end();
//   }
// };


exports.getCmsSettings = (req, res) => {
  cmsDB.find({}, (err, result) => {
    if (err) {
      res.json({ status: false, message: "Unable to fetch Cms data" });
      res.end();
    } else {
      res.json({ status: true, message: "Results Fetched", result: result });
      res.end();
    }
  });
};


exports.getOneCmsSettings = (req, res) => {
  cmsDB.findOne({ _id: req.body.id }, (err, result) => {
    if (err) {
      res.json({ status: false, message: "Unable to fetch Cms data" });
      res.end();
    } else {
      res.json({ status: true, message: "Results Fetched", result: result });
      res.end();
    }
  });
};


exports.deleteCms = (req, res) => {
  cmsDB.findByIdAndRemove({ _id: req.body.id }, (err, delcmsRes) => {
    if (err) {
      res.json({ status: false, message: "Unable to delete" });
      res.end();
    } else if (delcmsRes) {
      res.json({ status: true, message: "Deleted Successfully" });
      res.end();
    }
    else {
      res.json({ status: false, message: "No Data Found" });
      res.end();

    }
  });
};


exports.updateCms = (req, res) => {
  try {

    // common.imageUpload(req.file, (updatedImg) => {
    cmsDB.update(
      { _id: req.body.id },
      {
        $set: {
          Heading: req.body.Heading,
          Detail: req.body.Detail,
          // Img: updatedImg.url,
        }
      }, { omitUndefined: true },
      (err, updateCmsResponse) => {
        if (err) {
          res.json({ status: 404, message: "Unable to update Cms" });
          res.end();
        } else {
          res.json({ status: 200, message: "Updated Successfully", data: updateCmsResponse });
          res.end();
        }
      }
    );
    // })


  } catch (error) {

    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};
