// stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        // Safely parse the 'name' and 'points' from localStorage
        name: getLocalStorageItem("name"),
        token: localStorage.getItem("token") || null, // Token doesn't need to be parsed
        points: getLocalStorageItem("points", 0), // Default points to 0 if not found
    }),
    actions: {
        setUser(userData, token) {
            this.name = userData.name;
            this.token = token;
            this.points = userData.points;

            // Save data to localStorage
            localStorage.setItem("name", this.name);
            localStorage.setItem("token", token);
            localStorage.setItem("points", this.points);
        },
        logout() {
            this.name = null;
            this.token = null;
            this.points = 0;

            // Remove data from localStorage
            localStorage.removeItem("name");
            localStorage.removeItem("token");
            localStorage.removeItem("points");
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.token, // Check if the user is logged in
    },
});

// Utility function to safely retrieve and parse items from localStorage
function getLocalStorageItem(key, defaultValue = null) {
    const item = localStorage.getItem(key);
    if (item === null) {
        return defaultValue; // Return default value if item is not found
    }

    try {
        return JSON.parse(item); // Try to parse the item
    } catch (e) {
        console.error(`Error parsing ${key} from localStorage`, e);
        return defaultValue; // Return default value if parsing fails
    }
}
