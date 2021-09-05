import React from 'react'
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav"; 
import Searchbar from "./Searchbar";
import Popular from "./Popular"; 
// import Login from './components/Login';





function HomeScreen() {
    return (
        <div className="homeScreen" > 
        <Nav/>
        <Banner/>  
        <div className ="title"> 
          <h3> Popular on Netflix</h3>
        <Popular/>
        
          <h3> Advanced Search</h3>
        <Searchbar/> 
        </div> 
         </div>



);        
}

export default HomeScreen;
