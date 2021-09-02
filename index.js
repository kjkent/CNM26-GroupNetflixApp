//local db test

require("dotenv").config();
const express = require("express");

const { connection } = require("./db.js");
const port = process.env.PORT;
const landingRouter = require("./routes/landingPage");
const errorRouter = require("./routes/error");

const app = express();

app.use("/landingpage", landingRouter);
app.use("*", errorRouter);

app.listen(port, () => {
    console.log("listening");
});

