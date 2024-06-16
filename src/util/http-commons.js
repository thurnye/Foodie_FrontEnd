import axios from "axios";

// prod
// const baseUrl  = "https://foodie-zqad.onrender.com/";

// dev
const baseUrl  = "http://localhost:8670/";


export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",

  }
});
