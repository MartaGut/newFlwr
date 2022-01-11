import {
 REGISTER_SUCCESS,
 REGISTER_FAIL,
 LOGIN_SUCCESS,
 LOGIN_FAIL,
 LOGOUT,
 SHOW_INFO,
} from "../types";

import authService from "../../services/auth.service";
import authHeader from "../../services/auth-header";
import userService from "../../services/user.service";



export const register = (first_name,  last_name, date_of_birth, email, password) => (dispatch) => {
 return authService.register(first_name, last_name, date_of_birth, email, password).then(
  (response) => {
   dispatch({
    type: REGISTER_SUCCESS,
   });

   return Promise.resolve();
  },

  (error) => {
   const message =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();

   dispatch({
    type: REGISTER_FAIL,
   });

   return Promise.reject();
  }
 );
};

export const login = (email, password) => (dispatch) =>  {
  console.log("mejl i pass", email, password)
 return authService.login(email, password).then(
  (data) => {
   dispatch({
    type: LOGIN_SUCCESS,
    payload: { user: data },
  });
  console.log("data", data);
   return Promise.resolve();
  },

  (error) => {
   dispatch({
    type: LOGIN_FAIL,
   });

   return Promise.reject();
  }
 );
};

export const logout = () => (dispatch) => {
    authService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

  export const showInfo = () => (dispatch) => {
    return userService.getUser().then(
      (data) => {

        dispatch({
          type: SHOW_INFO,
          payload: {me: data}
        });
      console.log("data", data);
       return Promise.resolve();
      },
    )
  };
