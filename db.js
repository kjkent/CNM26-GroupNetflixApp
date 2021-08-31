
const mongoose = require("mongoose");

const connection = mongoose.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    console.log("Connecton found.")
);

module.exports = connection;