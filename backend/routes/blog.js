const express = require("express");
const router = express.Router();

const { basic } = require("../controllers/blog");

router.get("/", basic);

module.exports = router;
