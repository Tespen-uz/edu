import axios from "axios";

// configure requests

const requests = axios.create({
  baseURL: "https://cp.stanfordschool.uz",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default requests;
