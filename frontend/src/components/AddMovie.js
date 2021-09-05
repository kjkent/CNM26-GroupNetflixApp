
import { useState } from 'react'
import "./AddMovie.css";

const AddMovie = () => {

    const [values, setValues] = useState({
        title: "",
        year: "",
        imdb: "",
        summary: ""
    });

    const handleClick = (event) => {
        event.preventDefault();
        console.log("adding button is working")
    };

    return (
        <>
            <div className="container--flex container__addmovieform--large">
                <form>
                    <div className="container--flex container__addmovieform--medium">
                        <label>Title</label>
                        <input />
                        <label>Year</label>
                        <input />
                        <label>IMDB</label>
                        <input />
                        <label>Summary</label>
                        <input />
                    </div>
                    <button onClick={handleClick}>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddMovie;
