const express = require("express");
const bcrypt = require("bcrypt");

const { addUser } = require("../utils/user");

const router = express.Router();

const saltRounds = 10;


router.post("/", (req, res) => {
    res.status(200).send("landing to home root working");
});

// reigster user

router.post("/register", async (req, res) => {
    if (req.body.password !== req.body.checkPassword) {
        return res.status(401).json({msg: "Your passwords do not match"});
    } else if (!req.body.email) {
        return res.status(401).json({msg: "Please enter your email"});
    }    
    
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.password, salt);

    await addUser(req.body.email, hash);
    res.status(201).json({"message": "Created user"});
    
});

router.post("/login", (req, res) => {
    res.status(200).json({msg: "login route working"});
});

 module.exports = router;

 