import axios from "axios";

const API = axios.create({
  baseURL: "https://college-backend-q4n4.onrender.com",
});

export default API;
