import axios from "axios";
import { config } from "./config";

const apiCaller = axios.create({
  baseURL: config.baseUrl,
});

export default apiCaller;
