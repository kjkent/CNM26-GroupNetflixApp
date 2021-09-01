
import React from 'react';


function Signup() {
    return (
        <div className="container--flex container__signup--large">
            <h2 className="title__signup">Sign Up</h2>
            <input placeholder="username" className="input__signup"></input>
            <input placeHolder="password" className="input__signup"></input>
            <input placeHolder="repeat password" className="input__signup"></input>
            <button className="btn__signup">Sign Up</button>
        </div>
    )
};

export default Signup;