const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const pairSchema = new mongoose.Schema({
  chain_id: {
    type: Number,
  },
  tokenA: {
    type: String,
  },
  tokenB: {
    type: String,
  },
  pair: {
    type: String,
  },
  tokenAAddress: {
    type: String,
  },
  tokenBAddress: {
    type: String,
  },
  tokenAAmount: {
    type: String,
  },
  tokenBAmount: {
    type: String,
  },
  userAddress: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

pairSchema.index({ chain_id: 1,pair: 1 });

module.exports = mongoose.model("xpocket_PAIRS", pairSchema, config.dbPrefix + "IAZQGCEJOC");
