
const express = require("express");

const router = express.Router();

router.get("/reactConnected", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

module.exports = router;