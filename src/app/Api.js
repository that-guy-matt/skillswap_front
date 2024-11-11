import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

const Profile = {
  get: () =>
    axios.get("profile", {
      params: { token: localStorage.getItem("Auth-Token") }
    }),
  update: (firstName, lastName, bio, skillsToLearn, skillsToTeach) =>
    axios.patch("profile", {
      first_name: firstName,
      last_name: lastName,
      bio: bio,
      skills_to_learn: skillsToLearn,
      skills_to_teach: skillsToTeach,
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