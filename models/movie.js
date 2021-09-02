const mongoose = require("mongoose");

const Movie = mongoose.model("Movie", {
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    imdb: {
        type: String,
    },
    summary: {
        type: String,
    },
});

module.exports = Movie;