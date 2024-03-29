import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SHOW_INFO
  } from "../types";

  const user = JSON.parse(localStorage.getItem('token'));

  const initialStateUser = user 
  ? {isLoggedin: true, user}
  : {isLoggedin: false, user: null};

  export default function(state = initialStateUser, action) {
      const {type, payload} = action;

      switch (type) {
        case REGISTER_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
          };
        case REGISTER_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
        case LOGIN_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case LOGIN_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        case LOGOUT:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
          case SHOW_INFO: 
          return {
    
          }
        default:
          return state;
      }
  }

