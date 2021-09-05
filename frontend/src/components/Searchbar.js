import React from 'react'
import "./Searchbar.css"; 

function Searchbar() { 
    return (
        // <div className ="search">
        //     <div className="searchInputs">
        //         <label>Search by Name</label>
        //         <input type="text" placeholder="Search by Name"></input>
        //     <div className="searchIcon"></div>
        // </div> 
        // <div className ="dataResult"></div>
        
        // <div className="searchInputs">
        //     <input type="text"></input>
        //     <div className="searchIcon"></div>
        //     </div> 
        //     <div className ="dataResult"></div>

        // <div className="searchInputs">
        //     <input type="text"></input>
        //     <div className="searchIcon"></div>
        //     </div> 
        //     <div className ="dataResult"></div>
        // </div> 
        <>
            <div>
                <form type="submit">
                    <label>Search by Name</label>
                    <input placeholder="type a movie name"></input>
                    <button>Search</button>
                </form>
            </div>
        </>
       
);
}

export default Searchbar;
