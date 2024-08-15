const mongoose = require('mongoose')
require('dotenv').config()

const connect = async function () {
    return mongoose.connect(process.env.MONGODB_URI);
};

connect()
    .then(() => {
        console.log(`connected to DB!`);
    })
    .catch((err) => {
        console.error("Error happend while connecting to the DB: ", err.message);
    });

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')