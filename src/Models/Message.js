const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MessageSchema = new Schema({
    user: String,
    message: String
});


module.exports = mongoose.model('Message', MessageSchema);