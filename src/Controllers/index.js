function success(req,res) {
    res.send("Welcome")
}

function failed(req,res) {
    res.send("Error")
}

function glog(req, res) {
    res.send({ message: "Entrei"});
}

module.exports = { success, failed, glog }