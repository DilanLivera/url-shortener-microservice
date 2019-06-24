const mongoose = require("mongoose");

//create database schema
const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: 'Url cannot be blank!'
    },
    shortUrl: {
        type: Number,
        default: 0
    }
});

//create model
const Url = mongoose.model('ToDo', urlSchema);

module.exports = Url;