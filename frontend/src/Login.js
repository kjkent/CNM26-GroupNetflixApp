import React from 'react';
import './Login.css'; 

function LoginScreen() {
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
       <h1 className="signin_title"> Sign In </h1>
       <div className="signin_buttons">
         <form> 
         <input placeholder="Email" type="email"/>
         <input placeholder="Password" type="password"/>
         </form>
           <button type="submit">Sign In </button> 


        <h1 className="signin_title"> New? Sign up now </h1>
        <form> 
         <input placeholder="Email" type="email"/>
         <input placeholder="Password" type="password"/>
         <input placeholder="Retype Password" type="password"/>
         </form>
           <button className="signup_button">Sign up </button>
       </div>
       </div> 
       </header>
  );
}

export default LoginScreen;
