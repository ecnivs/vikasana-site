// stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null, // Stores user information
        token: null, // Stores JWT token or session identifier
    }),
    actions: {
        setUser(userData, token) {
            this.user = userData;
            this.token = token;
        },
        logout() {
            this.user = null;
            this.token = null;
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
    },
});
