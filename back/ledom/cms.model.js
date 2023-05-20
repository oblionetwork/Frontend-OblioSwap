const mongoose = require("mongoose");
const config = require("../sliatededon/config")

const cmsSchema = new mongoose.Schema({
   
    Heading: {
        type: String,
    },
    
    Detail: {
        type: String,
    },
   
    Img: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    id:{
        type:String
    }
});

cmsSchema.index({Heading: 1, Detail: 1, createdAt: 1});

module.exports = mongoose.model("xpocket_CMS", cmsSchema, config.dbPrefix + "CMHUKSOLS");
