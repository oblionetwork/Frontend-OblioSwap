const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const StakeSchema = new mongoose.Schema({
  chain_id: {
    type: Number,
  },
  fromTokenSymbol: {
    type: String,
  },
  fromTokenImg: {
    type: String,
  },

  toTokenSymbol: {
    type: String,
  },
  toTokenImg: {
    type: String,
  },
  APR: {
    type: String,
  },
  pairInfo: {
    type: String,
  },
  pairAddress: {
    type: String,
  },
  pairId: {
    type: String,
  },
  allocationPoint: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  pair: {
    type: String
  },
  stakeStatus: {
    type: String
  }
});

StakeSchema.index({chain_id: 1, fromTokenSymbol: 1, toTokenSymbol: 1 });

module.exports = mongoose.model("xpocket_STAKE", StakeSchema, config.dbPrefix + "NDRWFZBAIL");
