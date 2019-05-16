const service = require("../Services/register");


function createUser(req,res) {
    const { name, email, password } = req.body;
    return service.createUser(name, email, password)
        .then((user) => {
            //user.password = undefined;
            return res.send({ user })
        })
        .catch((err) => {
            return res.send(err)
        })
}


module.exports = { createUser }