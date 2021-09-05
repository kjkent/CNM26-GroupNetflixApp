
import React from 'react'
import validation from './validation';
import FormFunctions from "./formFunctions";
import { Link } from "react-router-dom";

function SignUpForm({ submitForm }) {

    const { handleChange, handleFormSubmit, values, errors } = FormFunctions (submitForm, validation);

    return (
        <>
        <form>
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
        
           {/* ---------------------------------------------------------------------------
    //            MERGE CONFLICT
              
    //            <h1 className="signin_title"> New? Sign up now </h1>
    //     <form> 
    //      <input placeholder="Email" type="email"/>
    //      <input placeholder="Password" type="password"/>
    //      <input placeholder="Retype Password" type="password"/>
    //      </form>
    //        <button className="signup_button">Sign up </button>
    //     ---------------------------------------------------------------------------  */}
        
                <div className ="resetpassword">
                    <label className = "label"> Retype your password </label>
                </div>
                
                <input className="Reset Password" 
                    type="password" 
                    name="password" 
                    value={values.password}
                    onChange ={handleChange}
                /> 
                <button className="submit" onClick={handleFormSubmit}>Sign up </button>
                <p>Already have an account? <Link to="/login">Click Here!!!</Link></p>
            </form>
        </>
        
    )
}

export default SignUpForm
