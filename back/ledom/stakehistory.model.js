const mongoose = require("mongoose");
const config = require("../sliatededon/config")


const stakeHistory = new mongoose.Schema({
    chain_id: {
        type: Number,
    },
    hash: {
        type: String
    },
    userAddress: {
        type: String
    },
    stakeAmount: {
        type: String
    },
    pairName: {
        type: String
    },
    pairId: {
        type: String
    },
    pairAddress: {
        type: String
    }
});

stakeHistory.index({chain_id: 1, userAddress: 1 });


module.exports = mongoose.model("xpocket_STAKE_HISTORY", stakeHistory, config.dbPrefix + "UHWKYZSXKE")