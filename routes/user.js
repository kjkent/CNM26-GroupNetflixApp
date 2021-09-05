const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

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
    res.status(201).send({user, token});
    // res.status(201).send({user, token});
    
});

router.post("/addUser", (req, res) => {
    const email = req.body.email;
    const password = req.body.passwordHash;
    const user = new User ({
        email,
        password
    });

    user.save();
    res.status(201).send({user});
    console.log(user);
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findUserLogin(req.body.email, req.body.password);
        const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, {});
        res.status(200).send({user, token});
    } catch (error) {
        console.log(error);
        res.status(400).send({msg: "Error: cannot login in"});
    }
});

 module.exports = router;

//  =======================================================

