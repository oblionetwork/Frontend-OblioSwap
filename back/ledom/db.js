const mongoose = require('mongoose');
const config = require('../sliatededon/config');

mongoose.connect(config.dbConnection)
    .then(() => console.log("Db connection successfull"))
    .catch((err) => console.error(err));

mongoose.connection.on('connected', function () {

});

mongoose.connection.on('error', function (err) {

});

mongoose.connection.on('disconnected', function () {

});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {

        process.exit(0);
    });
});
