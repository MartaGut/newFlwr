export default function authHeader() {
 const user = JSON.parse(localStorage.getItem("token"));
 console.log('user from header', user)

 if (user && user.auth_token) {
  return { Authorization: "Bearer " + user.auth_token };
 } else {
  return {};
 }
}
