const Movie = require("../models/movie");

exports.add = async (name, year, imdb, summary) => {
    try {
        const movie = new Movie({
            title: name,
            year: year,
            imdb: imdb,
            summary: summary,
        });
        await movie.save();
    } catch (error) {
        console.log(error);
    }
};

exports.list = async () => {
    try {
        return await Movie.find({}, { title: 1, _id: 0 });
    } catch (error) {
        console.log(error);
        return [];
    }
};

exports.find = async (name) => {
    try {
        return await Movie.findOne({ title: name });
    } catch (error) {
        console.log(error);
        return [];
    }
};

exports.update = async (name, field, update) => {
    try {
        if (field === "title") {
            await Movie.updateOne({title: name}, {title: update});
        } else if (field === "year") {
            await Movie.updateOne({title: name}, {year: update});
        } else if (field === "imdb") {
            await Movie.updateOne({title: name}, {imdb: update});
        } else if (field === "summary") {
            await Movie.updateOne({title: name}, {summary: update});
        }
    } catch (error) {
        console.log(error);
    }
};

exports.delete = async (name) => {
    try {
        await Movie.deleteOne({title: name});
    } catch (error) {
        console.log(error);
    }
};
