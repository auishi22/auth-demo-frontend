import axios from "axios";
import { authStorage } from "./auth-storage";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized error, remove token and redirect to login
      authStorage.removeToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
