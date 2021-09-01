
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.status(400).json({msg: "Not Found"}));

module.exports = router;