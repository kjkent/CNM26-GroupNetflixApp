
const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).send("got user route");
// });

router.get("/:user", (req, res) => {
    res.status(201).json({msg:`got ${req.body.name}`});
});

router.post("/login", (req, res) => {
    res.status(201).json({name: `${req.body.name}`, email: `${req.body.email}` });
});

router.post("/register", (req, res) => {
    res.status(200).json({msg: "registered successfully", user: req.user})
});

module.exports = router;