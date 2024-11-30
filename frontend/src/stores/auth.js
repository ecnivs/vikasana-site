// stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        name: JSON.parse(localStorage.getItem("name")) || null, // Load user from localStorage
        token: localStorage.getItem("token") || null, // Load token from localStorage
    }),
    actions: {
        setUser(userData, token) {
            this.name = userData;
            this.token = token;

            // Save data to localStorage
            localStorage.setItem("name", JSON.stringify(userData));
            localStorage.setItem("token", token);
        },
        logout() {
            this.name = null;
            this.token = null;

            // Remove data from localStorage
            localStorage.removeItem("name");
            localStorage.removeItem("token");
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.token, // Check if the user is logged in
    },
});
