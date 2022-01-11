import React, { useEffect, useState } from "react";
import { login } from "../store/actions/auth";
import "../scss/modal.scss";
import { useDispatch, useSelector } from "react-redux";
import userService from "../services/user.service";
import { showInfo } from "../store/actions/auth";
import authHeader from "../services/auth-header";

const MyProfile = ({ show, close }) => {

    // console.log('user from user', userService.getUser())

const dispatch = useDispatch();

const [id, setId] = useState("");

const myInfo = useSelector(state => state);
console.log('info', myInfo);

useEffect(() => {
    dispatch(showInfo(authHeader()));
},[])
    
    return (
        <>
         {show ? (
          <div className="modalContainer" onClick={() => close()}>
           <div className="modal">
            <header className="modal_header">
             <h2 className="modal_header-title">Hello MARTA!</h2>
             <button className="close" onClick={() => close()}>
              xxx
             </button>
            </header>
            <main className="modal_content">
             This is modal content
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

      export default MyProfile;
