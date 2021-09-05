
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Netflix!!!!</h1>
            <button>
                <Link to="/Form"><p>Sign up for your free account today!</p></Link>
            </button>
        </div>
    )
}

export default Home
