

import React, { useState } from "react";
import validation from "./validation"; 
import FormFunctions from "./formFunctions";


const SignInForm = ( { submitForm }) => {

    const { handleChange, handleFormSubmit, values, errors } = FormFunctions (submitForm, validation);
    // const [values, setValues] = useState({
    //     email: "",
    //     password: "",
    // });
    // const [errors, setErrors] = useState ({});
    // const [dataIsCorrect, setDataCorrect] =useState(false); 

    // const handleChange = (event) => {
    //     setValues({
    //       ...values,
    //       [event.target.name]: event.target.value,
    //     });
    //   };

    // const handleFormSubmit = (event) => {
    //   event.preventDefault();
    //     /* sort errors if any */
    //   setErrors(validation(values));
    //   setDataCorrect(true);
    // };

    const connectValidation = () => {
      console.log("yes connectValidation works")
    }
    
    return (
        <>
             <form className ="form-wrapper" onSubmit={handleFormSubmit}>
            <h1 className="signin_title"> Sign In </h1>
            <div className ="email">
              <label className ="label"> Email </label>
            <input put className="Email" 
            type="email"
             name="email" 
             value={values.email}
             onChange={handleChange}
          /> 
          {errors.email && <p className="error"> {errors.email} </p>}
          </div> 

            <div className = "password"> 
            <label className = "label"> Password </label>
           
           <input className="Password" 
           type="password" 
           name="password" 
           value={values.password}
           onChange={handleChange}
           /> 
           {errors.password && <p className="error"> {errors.password} </p>}
           </div> 
         <button className="submit" onClick={connectValidation}>Sign In </button>
        </form>
        
        </>
    );
};

export default SignInForm;
