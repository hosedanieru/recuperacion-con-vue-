import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);

  function login(user: string, pass: string) {
    if (user === "admin" && pass === "1234") {
      isLoggedIn.value = true;
      return true;
    }
    return false;
  }

  function logout() {
    isLoggedIn.value = false;
  }

  return { isLoggedIn, login, logout };
});
