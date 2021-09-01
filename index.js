//local db test

require("dotenv").config();
const express = require("express");

const { connection } = require("./db.js");
const port = process.env.PORT;
const userRouter = require('./routes/user');
const errorRouter = require("./routes/error");

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("*", errorRouter);

app.listen(port, () => {
    console.log("listening");
});

console.log('hello world')
