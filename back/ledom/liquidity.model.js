const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const LiquiditySchema = new mongoose.Schema({
  user_address: {
    type: String,
  },
  chain_id: {
    type: Number,
  },
  from_currency: {
    type: String,
  },
  to_currency: {
    type: String,
  },
  from_address: {
    type: String,
  },
  to_address: {
    type: String,
  },
  from_amount: {
    type: String,
  },
  to_amount: {
    type: String,
  },
  tx_id: {
    type: String,
  },
  pair_address: {
    type: String,
  },
  pairInfo: {
    type: String,
  },
  type: {
    type: String,
  },
  lp_value: {
    type: String,
  },
  from_img: {
    type: String
  },
  to_img: {
    type: String
  }
});

LiquiditySchema.index({ chain_id: 1,user_address: 1 });

module.exports = mongoose.model("xpocket_LIQUIDITY", LiquiditySchema, config.dbPrefix + "DANAEEKHVE");
