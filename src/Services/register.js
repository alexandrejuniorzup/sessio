const db = require("../Database/database");
const User = require('../Models/User');

function createUser(name, email, password){
    var user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    return user.save()
}



module.exports = { createUser };