const router = require("express").Router();
const ctrl = require("../Controllers/login");


router.route("/")
    .post(ctrl.login);

router.route("/")
    .get(ctrl.render);

module.exports = router;