module.exports =
    function validation(req, res, next) {
        const {
            name
        } = req.body
        if (name != null && name != "") {
            next()
        } else {
            res.send("POHa")
        }
    }