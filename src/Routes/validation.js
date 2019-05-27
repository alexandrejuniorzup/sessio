const router = require("express").Router();
const ctrl = require("../Controllers/validation");

router.route("/")
    .post(ctrl.check)



module.exports = router;