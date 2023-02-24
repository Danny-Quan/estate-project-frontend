import axios from "axios";

// https://estate-project-backend.herokuapp.com
// https://aparweb-backend.onrender.com/
// http://localhost:8001
const instance = axios.create({
  baseURL: "https://aparweb-backend.onrender.com/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
