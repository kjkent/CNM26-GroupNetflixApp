import React from 'react';
import HomeScreen from './HomeScreen';
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
           <button className="signin_button">Sign in</button>
           <button className="signup_button">New to Netflix? sign up now </button>
     
       </div>
       </div> 
       </header>
  );
}

export default LoginScreen;
