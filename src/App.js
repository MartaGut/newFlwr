import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Login from './components/Login';
import { useReducer } from "react";
import Register from './components/Register';

function App() {

  const [loginModal, setLoginModal] = useState(false);
  const Toggle = () => setLoginModal(true);

  const [RegisterModal, setRegisterModal] = useState(false);
  const ToggleRegister = () => setRegisterModal(true);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/flowers">Flowers</Link>
          <Link to="/sightings">Sightings</Link>
          
          <button className="clickme" onClick={() => Toggle()}>Login</button>

          <Login  show={loginModal} title="My Modal" close={() => setLoginModal(false)}/>

          <button className="clickme" onClick={() => ToggleRegister()}>Register</button>

          <Register  show={RegisterModal} title="My Modal" close={ToggleRegister}/>
        </nav>

      </header>
    </div>
  );
}

export default App;
