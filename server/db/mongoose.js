var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("");

module.exports = {mongoose};