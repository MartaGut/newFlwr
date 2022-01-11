import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Login from './components/Login';
import { useReducer } from "react";
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess';
import LoginSucess from './components/LoginSuccess';
import MyProfile from './components/MyProfile';

function App() {

  const [loginModal, setLoginModal] = useState(false);
  const Toggle = () => setLoginModal(true);

  const [RegisterModal, setRegisterModal] = useState(false);
  const ToggleRegister = () => setRegisterModal(true);

  const [registerSuccesModal, setRegisterSucessModal] = useState(false);

  const [loginSuccessModal, setLoginSuccessModal] = useState(false);

  const [showProfile, setShowProfile] = useState(false);



  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/flowers">Flowers</Link>
          <Link to="/sightings">Sightings</Link>
          
          <button className="clickme" onClick={() => Toggle()}>Login</button>

          <Login  show={loginModal} title="My Modal" close={() => setLoginModal(false)} loginSuccess={setLoginSuccessModal}/>

          <LoginSucess  show={loginSuccessModal} title="My Modal" close={setLoginSuccessModal} openProfile={setShowProfile}/>

          <MyProfile show={showProfile} close={setShowProfile}/>

          <button className="clickme" onClick={() => ToggleRegister()}>Register</button>

          <Register  show={RegisterModal} title="My Modal" close={setRegisterModal} openSuccess={setRegisterSucessModal}/>

          <RegisterSuccess  show={registerSuccesModal} title="My Modal" close={setRegisterSucessModal} openLogin={setLoginModal}/>

        </nav>

      </header>
    </div>
  );
}

export default App;
