import React from 'react';
// import './App.css';
import HomeScreen from './HomeScreen';
// import Login from './components/Login';
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Form from "./components/Form";


import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"; 


function App() {

  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route path= "/" exact component ={Home} /> 
          <Route path= "/form" exact component = {Form} />
          {/* < Route path="/profile" component={HomeScreen} /> */}
          <Route path = "/login" exact component = {LoginPage} />
        </Switch>
        
      </Router>
    </div>    
  );
}

export default App;
