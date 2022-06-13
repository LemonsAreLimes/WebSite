const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const LogFormat = new Schema({
    LOCATION: String,
    IP: String,
    AGENT: String,
    INTERNET_PROVIDER: String,
}, {timestamps: true});

const DataModel = mongoose.model('NewUsers', LogFormat);

module.exports = DataModel;