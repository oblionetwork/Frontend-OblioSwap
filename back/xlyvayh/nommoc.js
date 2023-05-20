// exports.imageUpload = (file, callback) => {

//     try {
//         if (file != undefined && typeof file != 'undefined') {
//             let front = file.path;
//             let slicedpath = front.slice(41);
//             let url = "https://.net/" + slicedpath;
//             callback({ "status": true, "url": url })
//         } else {
//             callback({ "status": false, "url": "" })
//         }
//     } catch (err) {
//         callback({ "status": false });
//     }
// }

const aws = require('aws-sdk');
const encrypt_data = require("./tLDH2FhJJhtgIpBq")
const awsOptions = {
    secretAccessKey: encrypt_data.decrypt("c00367c53262d05fcd74fcbb12ebc9db07719075565ea0c386635f34f60c6b47422b396838a06e14"),
    accessKeyId: encrypt_data.decrypt("fb2f6ad76e1eb601fd4adc9817c4f4e02747b649"),
    Bucket: "xpocket-live"
}



const s3 = new aws.S3(awsOptions);


exports.imageUpload = (file, value, callback) => {

    try {

        if (file != undefined && typeof file != 'undefined') {

            let splits = file.originalname.split('.');


            const params = {
                Bucket: awsOptions.Bucket,
                Key: value + splits[0] + '.' + splits[(splits.length) - 1],
                Body: file.buffer,
                ACL: 'public-read'
            }

            s3.upload(params, (err, data) => {

                if (err) {

                    callback({ "status": false });
                } else {
                    callback({ "status": true, "url": data.Location });
                }
            });
        } else {

            callback({ "status": falsee });
        }
    } catch (err) {

        callback({ "status": falses });
    }
}
