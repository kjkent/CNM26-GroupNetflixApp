const express = require("express");
const movie = require("../utils/movie");
const router = express.Router();

// Lists movies
router.get("/", async (req, res) => {
    res.status(200).json({"movies": await movie.list()});
});

// Adds a movie. Need to provide title, year, imdb, summary in body JSON
router.post("/add", async (req, res) => {
    await movie.add(
        req.body.title,
        req.body.year,
        req.body.imdb,
        req.body.summary
    );
    res.status(201).json({"response": `Added film ${req.body.title}`});
});

// Finds a movie when passed a title as a "title" query parameter
// eg: localhost/movie/find?title=Ghostbusters
// (use encodeURIComponent on title string in frontend and send output as query string)
router.get("/find", async (req, res) => {
    res.status(200).json({"result": await movie.find(req.query.title)});
});

// Updates a movie. PUT JSON body takes the title of the film to be update,
// the field to update, and the updated content. 
router.put("/update", async (req, res) => {
    await movie.update(req.body.title, req.body.field, req.body.update);
    res.status(200).json({"response": `Updated ${req.body.title}`});
});


// Deletes a movie. As "find" above, requires URI-encoded title to be passed as a query param
router.delete("/delete", async (req, res) => {
    await movie.delete(req.query.title);
    res.status(200).json({"response": `${req.query.title} has been deleted`});
});

module.exports = router;
