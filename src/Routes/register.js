const router = require("express").Router()
const ctrl = require("../Controllers/register")


router.route("/")
    .post(ctrl.createUser)

module.exports = router