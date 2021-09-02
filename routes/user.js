const express = require("express");
const bcrypt = require("bcrypt");

 const router = express.Router();

 const saltRounds = 10;

router.post("/", (req, res) => {
    res.status(200).send("landing to home root working");
});

// reigster user

router.post("/register", async (req, res) => {
    // console.log(req.params)
    // res.status(200).json({msg: `${req.body.name} ${req.body.password} ${req.body.checkPassword}`});
    // console.log(req.body.name)
    if (req.body.password !== req.body.checkPassword) {
        return res.status(401).json({msg: "Your passwords do not match"});
    } else if (!req.body.name) {
        return res.status(401).json({msg: "Please enter your username"});
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.password, salt);
});

router.post("/login", (req, res) => {
    res.status(200).json({msg: "login route working"});
});

 module.exports = router;

//  if (req.body.password !== req.body.checkPassword) {
//     return res.status(401).json({msg: "Your passwords do not match."});
// } else if (!req.body.name) {
//     return res.status(401).json({msg: "Please provide your username"});
// }