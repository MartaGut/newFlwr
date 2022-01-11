import  { useState } from "react";


import { register } from "../store/actions/auth";
import "../scss/modal.scss";
import { useDispatch, useSelector } from "react-redux";
import RegisterSuccess from "./RegisterSuccess";

const Register = ({ show, close, openSuccess }) => {
    const dispatch = useDispatch();

    //  const user = useSelector(state => state.authReducer.initialStateUser);

//  useEffect(() => {
// dispatch(authReducer.initialStateUser);
//  }, [isLoggedIn] )

    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [date_of_birth, setBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const ToggleRegisterSuccesModal = () => {
    //   close(false);
    //   console.log(close);
    //   openSuccess(true);
    // };

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(first_name, last_name, date_of_birth, email, password));
        close(false);
        console.log(close);
        openSuccess(true);
       }

       return (
        <>
         {show ? (
          <div className="modalContainer">
           <div className="modal">
            <header className="modal_header">
             <h2 className="modal_header-title">Register</h2>
             <button className="close" onClick={() => close()}>
              xxx
             </button>
            </header>
            <main className="modal_content">
             This is modal content
             <form onSubmit={handleRegister}>
             <input
               type="text"
               required
               className="form-item"
               name="name"
               placeholder="Username"
               value={first_name}
               onChange={(e) => { setFirstname(e.target.value)
              console.log(e.target.value) }}
              />
                <input
               type="text"
               required
               className="form-item"
               name="lastnamename"
               placeholder="lastame"
               value={last_name}
               onChange={(e) => { setLastname(e.target.value)
              console.log(e.target.value) }}
              />
                   <input
               type="text"
               required
               className="form-item"
               name="birth"
               placeholder="birth"
               value={date_of_birth}
               onChange={(e) => { setBirth(e.target.value)
              console.log(e.target.value) }}
              />
             <input
               type="email"
               required
               className="form-item"
               name="name"
               placeholder="Email"
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
              {/* <button type="submit" className="login-btn">
               Login to your Account
              </button> */}

              <button className="clickme" type="submit">Register</button>

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
}

export default Register;