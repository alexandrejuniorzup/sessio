const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/project", { useNewUrlParser: true}, (err) => {
    if(err) throw err
    // else { console.log("Connected") }
})

module.exports = mongoose