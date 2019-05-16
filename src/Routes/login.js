const router = require("express").Router()
const ctrl = require("../Controllers/login")


router.route("/")
    .post(ctrl.login)



module.exports = router