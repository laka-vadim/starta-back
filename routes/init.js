const {init} = require("../constrollers/init");
router = require('express').Router();

router.get("", init);

module.exports = router;