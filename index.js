require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connection } = require("./db.js");
const port = process.env.PORT || 5000;
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const movieRouter = require("./routes/movie");
const errorRouter = require("./routes/error");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/movie", movieRouter);
app.use("*", errorRouter);

app.listen(port, () => {
    console.log(`Listening on port ${process.env.PORT}.`);
});

//=========================================================

