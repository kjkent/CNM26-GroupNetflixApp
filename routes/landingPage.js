 const express = require("express");

 const router = express.Router();

router.post("/", (req, res) => {
    res.status(200).send("landing to home root working");
});

 module.exports = router;