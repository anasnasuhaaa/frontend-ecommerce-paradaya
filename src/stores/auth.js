// src/store/auth.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";
import { toast } from "@steveyuowo/vue-hot-toast";
const router = useRouter();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    currentUser: null, // Tambahkan currentUser untuk menyimpan user yang login saat ini
    token: localStorage.getItem("token") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role?.name == "admin",
  },

  actions: {
    async login(credentials) {
      try {
        const response = await api.post("/auth/login", credentials);
        this.token = response.data.token;
        localStorage.setItem("token", this.token);
        api.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        await this.fetchMe(); // Panggil fetchMe untuk mendapatkan user login saat ini
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed");
        throw error;
      }
    },
    async register(data) {
      try {
        const response = await api.post("/auth/register", data);
        return response;
      } catch (error) {
        throw error;
      }
    },
    async verify(credentials) {
      try {
        const response = await api.post("/auth/verifikasi-akun", credentials, {
          headers: {
            Authorization: `Bearer ${this.token}`, // Sertakan token di header
          },
        });
        toast.success("Verify was successful");
        return response; // Pastikan ini di akhir
      } catch (error) {
        toast.error(error.response?.data?.message || "Verification failed"); // Tangani error
        throw error;
      }
    },
    async generateOtp(data) {
      try {
        if (!this.token) {
          throw new Error("Token is missing. Please login first."); // Validasi token
        }

        const response = await api.post("/auth/generate-otp-code", data, {
          headers: {
            Authorization: `Bearer ${this.token}`, // Perbaiki penulisan
          },
        });

        toast.success("Generate OTP Success, check your email");
        return response;
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          "Failed to generate OTP. Please try again.";
        toast.error(errorMessage); // Tampilkan pesan error yang jelas
        throw error; // Lempar error untuk debugging
      }
    },
    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
    },
    async fetchMe() {
      try {
        const response = await api.get("/auth/me");
        this.user = response.data; // Simpan data user global
        this.currentUser = response.data; // Simpan di currentUser untuk akses di mana saja
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to fetch user data"
        );
        throw error;
      }
    },
  },
});
