const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const siteSettingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
  },
  copyRightsText: {
    type: String,
  },
 
  telegramURL: {
    type: String,
  },
  twitterURL: {
    type: String,
  },
  linkedinURL:{
    type:String,
  },
  hackenURL:{
    type:String,
  },
  gitURL:{
    type:String
  },
  id:{
    type:String
  }
});


module.exports = mongoose.model("xpocket_SITESETTINGS", siteSettingsSchema, config.dbPrefix + "UXXGYDEMSJ");
