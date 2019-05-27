const router = require("express").Router();
const ctrl = require("../Controllers/index");

router.route("/success")
    .get(ctrl.success);

router.route("/failed")
    .get(ctrl.failed);


module.exports = router;