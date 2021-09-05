

import { useState } from 'react'
import "./AddMovie.css";

const axios = require("axios");

const AddMovie = () => {

    const [values, setValues] = useState({
        title: "",
        year: "",
        imdb: "",
        summary: ""
    });



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);

        const movie = {
            title: values.title,
            year: values.year,
            imdb: values.imdb,
            summary: values.summary
        };
        axios.post("http://localhost:80/movie/add", movie);
        console.log(movie);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({...values, [name]: value,});
    };

    return (
        <>
            <div className="container--flex container__addmovieform--large">
                <form onSubmit={handleSubmit}>
                    <div className="container--flex container__addmovieform--medium">
                        <label>Title</label>
                        <input type="text" name="title" value={values.title} onChange={handleChange}/>
                        <label>Year</label>
                        <input type="number" name="year" value={values.year} onChange={handleChange}/>
                        <label>IMDB</label>
                        <input type="url" name="imdb" value={values.imdb} onChange={handleChange}/>
                        <label>Summary</label>
                        <input type="text" name="summary" value={values.summary} onChange={handleChange}/>
                    </div>
                    <button >Add</button>
                </form>
            </div>
        </>
    )
}

export default AddMovie;
