import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
let headers = {};

if (sessionStorage.getItem("token")) {
  headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

export default axiosInstance;
