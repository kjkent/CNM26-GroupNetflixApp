const mongoose = require("mongoose");
const { connection } = require("../db");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.statics.findUserLogin = async (email, password) => {
    const user = await User.findOne({email: email});
        if(!user) {
            throw new Error("We cannot find that email");
        }
        const compare = await bcrypt.compare(password, user.password);
        if(!compare) {
            throw new Error("Your passwords do not match");
        }
    return user;
};

const User = mongoose.model("users", userSchema);

module.exports = User;

