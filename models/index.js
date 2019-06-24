const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DATABASEURL = process.env.DATABASEURL; //mongodb://<dbuser>:<dbpassword>@ds241977.mlab.com:41977/url

// mongoose.set('debug', true); //this enable us to see what is happening at any time, without silently failing

mongoose.connect(DATABASEURL, {useNewUrlParser: true});

mongoose.Promise = Promise; //this allows us to use Promise syntax

module.exports.Url = require("./Url");