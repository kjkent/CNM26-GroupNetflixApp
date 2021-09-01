import React from 'react'
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav"; 


function HomeScreen() {
    return (
        <div className="homeScreen" > 
        <div className="search">
         <input type="text" placeholder="Search.."></input>
        <Nav/> 
    
        <Banner/>

        {/* Row */}
    </div>
    </div>
);        
}

export default HomeScreen;
