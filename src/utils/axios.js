import axios from "axios";
import { api } from "../configs/variable";
const axiosInstance = axios.create({
  baseURL: api,
});

export default axiosInstance;