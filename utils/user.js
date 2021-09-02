
const User = require("../models/user");

const addUser = async (email, passwordHash) => {
    
    try {

    const newUser = new User({email, passwordHash});
    await newUser.save();
    console.log("addUser has been reached")
    console.log(newUser);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addUser
};