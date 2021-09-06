import React from 'react';
import "./Banner.css";
import { Link } from "react-router-dom"; 
import LoginScreen from './components/Login';

function Banner() {
/* shorten desription */ 
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

  

    return ( 
    <header
    className ="banner" 
    style= {{ 
        backgroundSize:"cover",
        backgroundImage: `url("https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXNMWOv32QqLBWlXKMdpSuWtpBUNzDrRx4T2h8ayU7uMfCk49nJxjv7jdCavD_WBGxh6ufl6cjlqxFCoE2eh7Byomfx69ywM0IimcIWS51NroShiBGuvaJSFei5Lww.jpg?r=0a4")`,
        backgroundPosition: "center center",  
       
    }} 
    >
    <div className="banner_contents">
        <h1 className="banner_title"> The Invisable Man </h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
        <h1 className="banner_description"> {truncate (`A woman believes she is being stalked and gaslit by her abusive and wealthy ex-boyfriend—even after his apparent suicide—and ultimately deduces that he has acquired the ability to become invisible.`, 150)} </h1>
    </div>
    </div> 
   
        <div className="banner--fadeBottom" /> 
   </header> 
)
}  

export default Banner;
