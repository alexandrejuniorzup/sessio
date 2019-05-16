const router = require("express").Router();
const ctrl = require("../Controllers/index");
const { logged }  = require("../Utils/authCheck");


router.route("/success")
    .get(ctrl.success);

router.route("/failed")
    .get(ctrl.failed);

router.route("/log" )
    .get(logged, ctrl.glog);

module.exports = router