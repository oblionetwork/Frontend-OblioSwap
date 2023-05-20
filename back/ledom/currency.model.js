const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const currencySchema = new mongoose.Schema({
    chain_id: {
        type: Number,
    },
    tokenType: {
        type: String,
    },
    tokenSymbol: {
        type: String,
    },
    tokenName: {
        type: String,
    },
    tokenAddress: {
        type: String,
    },
    tokenDecimal: {
        type: Number,
    },
    tokenImg: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

currencySchema.index({chain_id: 1, tokenName: 1, tokenSymbol: 1});

module.exports = mongoose.model("xpocket_CURRENCY", currencySchema, config.dbPrefix + "DIAWGQSHZT");
