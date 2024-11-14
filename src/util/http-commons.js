import axios from "axios";

// prod
export const baseUrl  = "https://foodie-zqad.onrender.com/";

// dev
// export const baseUrl  = "http://localhost:8670/";



export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",

  }
});


