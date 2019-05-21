const router = require("express").Router();
const ctrl = require("../Controllers/chat");
const { logged }  = require("../Utils/authCheck");

router.route("/")
    .get(ctrl.chat);



module.exports = router;