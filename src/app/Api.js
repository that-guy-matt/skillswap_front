import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
const Profile = {
  get: () =>
    axios.get("profile", {
      params: { token: localStorage.getItem("Auth-Token") }
    }),
};

const Auth = {
  login: (email, password) =>
    axios.post("login", {
      email: email,
      password: password
    }),
};

export default {
  Profile,
  Auth
};