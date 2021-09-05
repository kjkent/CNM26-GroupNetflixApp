
import { acceptsEncodings } from 'express/lib/request';
import { useState, useEffect } from 'react'
import "./Searchbar.css"; 

import axios from 'axios';

const Searchbar = () => { 

    const [movie, setMovie] = useState({
        movie: []
    });

    // const filterMovies = (movies, searchTerm) => {
    //     const result = movies.filter(movie => movie.title.includes(searchTerm));
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.get("https://localhost:80/movie/find");
            console.log(response)
            console.log("jip jip jaroo")
            setMovie({movie: response.data})
        } catch (error) {
            console.log(error);
        }

        console.log("working")
    
    };

    // useEffect(() => {
    //     fetch("/movie/find").then(res => {
    //         if(res.ok) {
    //             return res.json
    //         }
    //     }).then(jsonRes => setMovie(jsonRes));
    // });

    return (
       
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Search by Name</label>
                    <input placeholder="type a movie name"></input>
                    <button>Search</button>
                </form>
            </div>
            <div>
                <p>This is the movie{movie.title}</p>
            </div>
        </>
       
);
}

export default Searchbar;
