

import './App.css';
import Signup from './components/Signup.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sign in
        </p>
        
        <p> 
          New to Netflix? Sign up now
        </p>
        <Signup />
      </header>
    </div>
  );
}

export default App;
