function success(req,res) {
    return res.send("Welcome")
}

function failed(req,res) {
    return res.send("Error")
}

function glog(req, res) {
    return res.send("Entrei");
}

module.exports = { success, failed, glog }