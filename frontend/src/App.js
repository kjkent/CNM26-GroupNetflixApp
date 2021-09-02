import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import Login from './Login';

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
          <Route path= "/" exact component ={Login} /> 
          < Route path="/profile" component={HomeScreen} />
        </Switch>
      </Router>
    </div>    
  );
}

export default App;
