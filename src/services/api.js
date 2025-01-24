// src/services/api.js
import axios from "axios";
import { useAuthStore } from "../stores/auth";

const api = axios.create({
  baseURL:
    "https://backend-ecommerce-paradaya-production.up.railway.app/api/v1/", 
});

// Interceptor untuk menambahkan token ke setiap permintaan
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk menangani respon error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore();
      authStore.logout();
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
