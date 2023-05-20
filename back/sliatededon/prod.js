let encrypter = require("../xlyvayh/noitpyrcne");
const fs = require("fs");
module.exports = {
    dbConnection: encrypter.decrypt("d70b4df1343fe008912da5e374b79783592dd0232124ed9cfb385441b7236479692b224664863237998d25b99723c3f911d955"),
  dbPrefix: encrypter.decrypt("JR9DsD/OicVvh+5/pjcAUA=="),
  port: 3007,
  serverType: "https",
    serverOptions: {
        key: fs.readFileSync("xpocket.key"),
        cert: fs.readFileSync("xpocket.crt"),
    },
}

