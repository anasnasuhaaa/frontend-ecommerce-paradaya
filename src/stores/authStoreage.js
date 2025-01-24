import { ref } from "vue";
import { defineStore } from "pinia";
import apiClient from "../config/axios";

export const useAuthStore = defineStore("auth", () => {
  const registerUser = async (inputData) => {
    try {
      const { name, email, password, password_confirmation } = inputData;
    } catch (error) {
      console.log(error.message);
    }
  };
  return { registerUser };
});
