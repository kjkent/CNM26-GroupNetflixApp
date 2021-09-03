
const mongoose = require("mongoose");

const User = require("../models/user");

const addUser = async (email, passwordHash) => {
    
    try {

    const newUser = new User({email, passwordHash});
    await newUser.save();
   

    } catch (error) {
        console.log(error);
    }
};

// const findUserLogin = async (email, password) => {
//     const user = await User.findOne({email: email});
//         if(!user) {
//             throw new Error("We cannot find that email");
//         }
//         const compare = await bcrypt.compare(password, user.password);
//         if(!compare) {
//             throw new Error("Your passwords do not match");
//         }
//     return user;
// };



module.exports = {
    addUser
};

