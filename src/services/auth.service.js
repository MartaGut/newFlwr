//  auth.service.js (Authentication service)

import api from "../apis/api";
import { useDispatch } from "react-redux";

class AuthService {

 login(email, password) {
   console.log("iz servisa", email, password)
  return api
   .post("/users/login", { email, password })
   .then((response) => {
     console.log("response",response);
    if (response.data.auth_token) {
     localStorage.setItem("token", JSON.stringify(response.data));
    }

    return response.data;
   });
 }

 logout() {
  localStorage.removeItem("token");
 }

 register(first_name, last_name, date_of_birth, email, password) {
    return api.post('/users/register', {
      first_name,
      last_name,
      date_of_birth,
      email,
      password,
    });
  }
}


export default new AuthService();
