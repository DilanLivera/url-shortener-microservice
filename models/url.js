const mongoose = require("mongoose");
const shortId = require('shortid');

//create database schema
const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: 'Url cannot be blank!'
    },
    shortUrl: {
        type: String,
        default: shortId.generate
    }
});

//create model
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;