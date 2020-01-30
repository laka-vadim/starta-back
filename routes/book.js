const {book} = require("../constrollers/book");
router = require("express").Router();

router.post("", book);

module.exports = router;