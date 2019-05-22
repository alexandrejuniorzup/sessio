const router = require("express").Router();
const ctrl = require("../Controllers/login");


router.route("/")
    .post(ctrl.login);

router.route("/")
    .get(ctrl.render);

router.route('/logout')
    .get(ctrl.logout);

module.exports = router;