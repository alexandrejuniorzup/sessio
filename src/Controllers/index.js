function success(req,res) {
    return res.send("Welcome")
}

function failed(req,res) {
    return res.send("Você precisa estar logado")
}

function glog(req, res) {
    return res.send("Entrei");
}

module.exports = { success, failed, glog }