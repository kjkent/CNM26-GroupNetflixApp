import React from 'react'
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav"; 
import Searchbar from "./components/Searchbar";
import Popular from "./components/Popular"; 
import Login from './Login';





function HomeScreen() {
    return (
        <div className="homeScreen" > 
        <Nav/>
        <Banner/>  
          <h3> Popular on Netflix</h3>
        <Popular/>
        
          <h3> Advanced Search</h3>
        <Searchbar/> 
    
         </div>



);        
}

export default HomeScreen;
