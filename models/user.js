const mongoose = require("mongoose");
const { connection } = require("../db");

const User = mongoose.model("users", {
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
});

module.exports = User;
