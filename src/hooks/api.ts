import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URI,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
