
const User = require("../models/user");

const addUser = async (email, passwordHash) => {
    
    try {

    const newUser = new User({email, passwordHash});
    await newUser.save();
   

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addUser
};