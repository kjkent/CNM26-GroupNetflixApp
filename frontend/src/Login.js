import React, { useState, useEffect } from "react";
import './Login.css'; 
import validation from "./validation"; 


const LoginScreen =({ submitForm })  => {
    const [values, setValues] = useState({
      email: "",
      password: "",
});
    
 
/* errors set to empty object */ 
const [errors, setErrors] = useState ({});
const [dataIsCorrect, setDataCorrect] =useState(false); 

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
      setDataCorrect(true);
    };

    useEffect(()=> {
      if(Object.keys(errors).length === 0 && dataIsCorrect) {
        submitForm(true);
      } 
    }, [errors]);

  return (

      <header
      className ="banner" 
      style= {{ 
          backgroundSize:"cover",
          backgroundImage: `url("https://images.spot.im/v1/production/iwwvxqjjwv55qfptixeq")`,
          backgroundPosition: "center center",    
      }}
      > 


      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflixlogo"
        />

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflixavatar"
        /> 
    </div>

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
      
export default LoginScreen; 
