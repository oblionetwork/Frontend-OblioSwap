const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    password_array: {
      type: Array,
    },
    pattern: {
      type: String,
    },
    pattern_array: {
      type: Array,
    },
    createdTime: {
      type: Date,
      default: Date.now,
    },
    secreturl: {
      type: String,
    },
    secretotpauthurl: {
      type: String,
    },
    tfa_status: {
      type: Boolean,
    },
    login_attempts: {
      type: Number,
    },
    blocked_status: {
      type: String,
    },
    attempted_time: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

adminSchema.index({ email: 1 });

module.exports = mongoose.model("xpocket_ADMIN", adminSchema, config.dbPrefix + "HVDLYLLLYV");
