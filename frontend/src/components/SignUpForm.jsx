
import React from 'react'
import validation from './validation';
import FormFunctions from "./formFunctions";
import { Link } from "react-router-dom";

function SignUpForm({ submitForm }) {

    const { handleChange, handleFormSubmit, values, errors } = FormFunctions (submitForm, validation);

    const connectValidation = async (values) => {
        // try {
        //     const obj = JSON.stringify({
        //         email: values.email,
        //         password: values.password
        //     });

        //     const response = await fetch ("http//localhost/user/register", {
        //         mode: "cors",
        //         method: "post",
        //         headers: { "Content-Type": "application/json" },
        //         body: obj
        //     });

        //     const data = await response.json();
        //     console.log( { data });
        // } catch (error) {
        //     console.log(error);
        // }    
        console.log(values.email)
    }

    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <h1 className="signin_title"> New? Sign up now </h1>
            <div className = "emailnew">
                <label className = "label"> Email </label>
                <input className="input" 
                type="email"
                name="email" 
                value={values.email}
                onChange={handleChange}
            /> 
                {errors.email && <p className="error"> {errors.email} </p>}
            </div> 

            <div className = "passwordnew">
                <label className = "label"> Password </label>
                <input className= "input" 
                type="password"
                name="password" 
                value={values.password}
                onChange={handleChange}
            />
                {errors.password && <p className="error"> {errors.password} </p>}
            </div> 
        
            <button className="submit" onClick={connectValidation}>Sign up </button>
            <p>Already have an account? <Link to="/login">Click Here!!!</Link></p>
        </form>
        </>
        
    )
}

export default SignUpForm;
