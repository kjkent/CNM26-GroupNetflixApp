const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { addUser } = require("../utils/user");
const User = require("../models/user");

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

    const user = await addUser(req.body.email, hash);
    const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, {});
    res.status(201).json({"message": "Created user", email, token});
    // res.status(201).send({user, token});
    console.log(user, token)
    
});

router.post("/login", async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) {
        throw new Error("Email not found")
    }
});

 module.exports = router;

 