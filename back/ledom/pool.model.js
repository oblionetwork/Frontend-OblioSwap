const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const PoolSchema = new mongoose.Schema({
  chain_id: {
    type: Number,
  },
  fromTokenSymbol: {
    type: String,
  },
  fromTokenImg: {
    type: String,
  },
  APR: {
    type: String,
  },
  fromAddress: {
    type: String,
  },
  pairId: {
    type: String,
  },
  fromDecimal: {
    type: String,
  },
  RewardToken: {
    type: String,
  },
  allocationPoint: {
    type: Number,
  },
  poolStatus: {
    type: String
  }
});
PoolSchema.index({chain_id: 1, fromTokenSymbol: 1 });

module.exports = mongoose.model("xpocket_POOL", PoolSchema, config.dbPrefix + "FYPGPPAVOU");
