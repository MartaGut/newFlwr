import React, { useState } from "react";

import { login } from "../store/actions/auth";
import "../scss/modal.scss";
import { useDispatch} from "react-redux";

const Login = ({ show, close, loginSuccess }) => {
 const dispatch = useDispatch();

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

//  const ja = useSelector(state => state.users.user.auth_token);

// 
// const userLoginSuccess = () => {
//     loginSuccess(true);
// }

 const handleLogin = (e) => {
     e.preventDefault();
     dispatch(login(email, password));
     loginSuccess(true);
     close(false);
 }

 
 return (
  <>
   {show ? (
    <div className="modalContainer">
     <div className="modal">
      <header className="modal_header">
       <h2 className="modal_header-title">Login</h2>
       <button className="close" onClick={() => close()}>
        xxx
       </button>
      </header>
      <main className="modal_content">
       This is modal content
       <form onSubmit={handleLogin}>
        <input
         type="text"
         required
         className="form-item"
         name="email"
         placeholder="Email Address"
         value={email}
         onChange={(e) => { setEmail(e.target.value)
        console.log(e.target.value) }}
        />
        <input
         type="password"
         required
         className="form-item"
         name="password"
         placeholder="Password"
         value={password}
         onChange={(e) => { setPassword(e.target.value) }}
        />
        <button className="login-btn" >
         Login
        </button>
        
       </form>
      </main>
      <footer className="modal_footer">
       <button className="modal-close" onClick={() => close()}>
        Cancel
       </button>
      </footer>
     </div>
    </div>
   ) : null}
  </>
 );
};

export default Login;
