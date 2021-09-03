import React, { useState } from "react";
import './Login.css'; 
import validation from "./validation"; 


const LoginScreen =()  => {
    const [values, setValues] = useState({
      email: "",
      password: "",
});
    
 
/* errors set to empty objject */ 
const [errors, setErrors] = useState ({});

const handleChange = (event) => {
  setValues({
    ...values,
    [event.target.name]: event.target.value,
  });
};


/* stops form reloading on sign up click*/
    const handleFormSubmit = (event) => {
      event.preventDefault();
        /* sort errors if any */
      setErrors(validation(values));
    };

  return (

      <header
      className ="banner" 
      style= {{ 
          backgroundSize:"cover",
          backgroundImage: `url("https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg")`,
          backgroundPosition: "center center",  
          backgroundRepeat: "repeat", 
      }}
      > 


    <div className ="signbox"> 
      <div className="container">
      <div className="app-wrapper">
       </div>
       </div> 
       </div>  
          <form className ="form-wrapper">
            <h1 className="signin_title"> Sign In </h1>
            <div className ="email">
              <label className ="label"> Email </label>
            <input className="Email" 
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
         <button className="submit" onClick={handleFormSubmit}>Sign In </button>

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

        <button className="submit" onClick={handleFormSubmit}>Sign up </button>
        {/* <div className ="resetpassword">
        <label className = "label"> Reset Password </label>
        </div>
        
      <input className="Reset Password" 
      type="password" 
      name="password" 
      value={values.password}
      onChange ={handleChange}
      /> */}
      </form>
      </header>
      
       
  ); 
    } 
    

export default LoginScreen;
