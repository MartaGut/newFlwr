import React, { useState } from "react";
import { login } from "../store/actions/auth";
import "../scss/modal.scss";
import { useDispatch, useSelector } from "react-redux";
import Register from "./Register";

const LoginSucess = ({ show, close, openProfile }) => {

    const userLoginSuccess = () => {
        openProfile(true);
        console.log(openProfile);
    }
    
    return (
        <>
         {show ? (
          <div className="modalContainer" onClick={() => close()}>
           <div className="modal">
            <header className="modal_header">
             <h2 className="modal_header-title">Login Success</h2>
             <button className="close" onClick={() => close()}>
              xxx
             </button>
            </header>
            <main className="modal_content">
             This is modal content
            </main>
            <footer className="modal_footer">
             <button className="modal-close" onClick={userLoginSuccess}>
         Profile
             </button>
             <button className="close">
              OK
             </button>
            </footer>
           </div>
          </div>
         ) : null}
        </>
       );
      };

      export default LoginSucess;