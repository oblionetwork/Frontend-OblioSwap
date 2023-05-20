const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const BlockListSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

BlockListSchema.index({ ipAddress: 1 });

module.exports = mongoose.model("xpocket_BLKLIST", BlockListSchema, config.dbPrefix + "TLCQHAMBJX");
