const { Validator } = require("node-input-validator");

const siteSettingsDB = require("../ledom/sitesettings.model");

exports.addSiteSettings = (req, res) => {
  try {
    const v = new Validator(req.body, {
      siteName: "required",
      copyRightsText: "required",
      telegramURL: "required",
      twitterURL: "required",
      linkedinURL: "required",
      hackenURL: "required",
      gitURL: "required"
    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {
        let addSiteSettingsData = new siteSettingsDB({
          siteName: req.body.siteName,
          copyRightsText: req.body.copyRightsText,
          telegramURL: req.body.telegramURL,
          twitterURL: req.body.twitterURL,
          linkedinURL: req.body.linkedinURL,
          hackenURL: req.body.hackenURL,
          gitURL: req.body.gitURL

        });
        addSiteSettingsData.save((err, saveRes) => {
          if (err) {
            res.json({ status: 404, message: "Unable to add sitesettings" });
            res.end()
          }
          else {
            res.json({ status: 200, message: "Added Successfully" });
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

exports.siteSettings = (req, res) => {

  try {
    const v = new Validator(req.body, {
      siteName: "required"

    });

    v.check().then((matched) => {
      if (!matched) {
        res.json({
          status: 404,
          message: "Please Fill All the Required Fields...",
        });
        res.end();
      } else {

        siteSettingsDB.findOne({ _id: req.body.id }, (err, siteSettingsFindResult) => {
          if (err) {
            res.json({
              status: 404,
              message: "Unable to Fetch SiteSettings Results",
            });
            res.end();
          }

          else if (siteSettingsFindResult) {

            siteSettingsDB.update(
              { _id: req.body.id },
              {
                $set: {
                  siteName: req.body.siteName,
                  copyRightsText: req.body.copyRightsText,
                  telegramURL: req.body.telegramURL,
                  twitterURL: req.body.twitterURL,
                  linkedinURL: req.body.linkedinURL,
                  hackenURL: req.body.hackenURL,
                  gitURL: req.body.gitURL

                },
              }, { omitUndefined: true },
              (err, updateResult) => {
                if (err) {
                  res.json({
                    status: 404,
                    message: "Unable to Update SiteSettings",
                  });
                  res.end();
                } else {
                  res.json({ status: 200, message: "Site Settings Updated" });
                  res.end();
                }
              }
            );
          }

          else {
            let addSiteSettingsData = new siteSettingsDB({
              siteName: req.body.siteName,
              copyRightsText: req.body.copyRightsText,
              telegramURL: req.body.telegramURL,
              twitterURL: req.body.twitterURL,
              linkedinURL: req.body.linkedinURL,
              hackenURL: req.body.hackenURL,
              gitURL: req.body.gitURL,

            });
            addSiteSettingsData.save((err, saveRes) => {

              if (err) {
                res.json({ status: 404, message: "Unable to add sitesettings" });
                res.end()
              }
              else {
                res.json({ status: 200, message: "Added Successfully" });
                res.end()
              }
            })

          }
        });
      }
    });
  } catch (error) {
    res.json({ status: 404, message: "Something went Wrong..." });
    res.end();
  }
};

exports.getSiteSettings = (req, res) => {
  siteSettingsDB.findOne({}, (err, result) => {
    if (err) {
      res.json({ status: 404, message: "Unable to fetch siteSettings data" });
      res.end();
    } else {
      res.json({ status: 200, message: "Results Fetched", result: result });
      res.end();
    }
  });
};
