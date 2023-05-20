const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const WhiteListSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

WhiteListSchema.index({ ipAddress: 1 });

module.exports = mongoose.model("xpocket_WHTELIST ", WhiteListSchema, config.dbPrefix + "AQTPFCVFBU");
