import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.7:9000/api",
});

export default apiClient;
