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
  signup: (email, password) =>
    axios.post("signup", {
      email: email,
      password: password
    }),
};

const Users = {
  get: () =>
    axios.get("/users")
};

const Skills = {
  get: () =>
    axios.get("/skills")
};

export default {
  Profile,
  Auth,
  Users,
  Skills,
};