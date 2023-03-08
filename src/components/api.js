import axios from "axios";
const BASE_API = "https://randomuser.me/api/";

const Http = axios.create({
  baseURL: BASE_API,
});

export default Http;
