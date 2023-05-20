var whitelist = require('../xlyvayh/nigiro');


exports.verify_origin = async (req, res, next) => {

    if (whitelist.origin.white_list.indexOf(req.headers.origin) > -1)
        next()
    else {
        res.json({ status: false, message: "Unauthorized" })
    }
}





