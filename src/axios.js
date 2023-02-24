import axios from "axios";

// https://estate-project-backend.herokuapp.com
// http://localhost:8001
const instance = axios.create({
  baseURL: "http://localhost:8001",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
