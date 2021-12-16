const Movie = require("../models/movie");

exports.add = async (title, year, imdb, summary) => {
    try {
        const movie = new Movie({
            title,
            year,
            imdb,
            summary,
        });
        await movie.save();
    } catch (error) {
        console.log(error);
    }
};

exports.list = async (name) => {
    try {
        return await Movie.find({}, {title: 1, _id: 0});
    } catch (error) {
        console.log(error);
        return [];
    }
};

exports.find = async (title) => {
    try {
        return await Movie.findOne({title});
    } catch (error) {
        console.log(error);
        return [];
    }
};

exports.update = async (title, field, update) => {
    try {
        await Movie.updateOne({title}, {[field]: update});
    } catch (error) {
        console.log(error);
    }
};

exports.delete = async (title) => {
    try {
        await Movie.deleteOne({title});
    } catch (error) {
        console.log(error);
    }
};
