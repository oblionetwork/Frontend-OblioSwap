const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const SwapSchema = new mongoose.Schema({
  chain_id: {
    type: Number,
  },
  hash: {
    type: String,
  },
  userAddress: {
    type: String,
  },
  fromToken: {
    type: String,
  },
  toToken: {
    type: String,
  },
  fromAmount: {
    type: Number,
  },
  toAmount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

SwapSchema.index({ chain_id: 1,userAddress: 1 });

module.exports = mongoose.model("xpocket_SWAP", SwapSchema, config.dbPrefix + "XYUGYRABVC");
