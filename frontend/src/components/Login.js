import React, { useState, useEffect } from "react";
// import './Login.css'; 
import validation from "../validation"; 
import SignInForm from "./SignInForm";


const LoginScreen = ()  => {
//     const [values, setValues] = useState({
//       email: "",
//       password: "",
// });
    
 
/* errors set to empty object */ 
  // const [errors, setErrors] = useState ({});
  // const [dataIsCorrect, setDataCorrect] =useState(false); 
  // const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };




/* stops form reloading on sign up click*/
  //   const handleFormSubmit = (event) => {
  //     event.preventDefault();
  //       /* sort errors if any */
  //     setErrors(validation(values));
  //     setDataCorrect(true);
  //   };

  //   useEffect(()=> {
  //     if(Object.keys(errors).length === 0 && dataIsCorrect) {
  //       submitForm(true);
  //     } 
  //   }, [errors]);

  //   const submitForm = () => {
  //     setFormIsSubmitted(true);
  // }; 

  return (
    <>
    <SignInForm />
      {/* <header
      className ="banner" 
      style= {{ 
          backgroundSize:"cover",
          backgroundImage: `url("https://images.spot.im/v1/production/iwwvxqjjwv55qfptixeq")`,
          backgroundPosition: "center center"
      }}
      >
        </header> */}

      {/* <div className="nav_contents">
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
       </div>   */}
         {/* <form className ="form-wrapper">
            <h1 className="signin_title"> Sign In </h1>
            <div className ="email">
              <label className ="label"> Email </label>
            <in put className="Email" 
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
      </form> */}
      {/* <form>
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
        </form> */}
           {/* ---------------------------------------------------------------------------
               MERGE CONFLICT
              
               <h1 className="signin_title"> New? Sign up now </h1>
        <form> 
         <input placeholder="Email" type="email"/>
         <input placeholder="Password" type="password"/>
         <input placeholder="Retype Password" type="password"/>
         </form>
           <button className="signup_button">Sign up </button>
        --------------------------------------------------------------------------- */}
        
        {/* <div className ="resetpassword">
        <label className = "label"> Reset Password </label>
        </div>
     
      <input className="Reset Password" 
      type="password" 
      name="password" 
      value={values.password}
      onChange ={handleChange}
      />  */}
    
      
  </>      
  );    
};
      
export default LoginScreen; 
