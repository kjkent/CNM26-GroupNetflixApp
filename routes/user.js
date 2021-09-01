
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("got user route");
});

router.get("/:user", (req, res) => {
    res.status(200).json({msg:`got ${req.body.name}`});
});

router.post("/:user", (req, res) => {
    res.status(400).json({msg: `got ${req.body.name}`});
});

module.exports = router;