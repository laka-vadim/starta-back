const {postBook} = require("../constrollers/book");
router = require("express").Router();

router.post("", postBook);

module.exports = router;