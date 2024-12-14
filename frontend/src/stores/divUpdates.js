import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";

export const useDivUpdateStore = defineStore("divUpdateStore", {
    state: () => ({
        updates: [], // Array to store fetched updates
        loading: false, // To manage loading state
        error: null, // To store any error message
    }),
    actions: {
        async fetchUpdates() {
            const authStore = useAuthStore();

            if (!authStore.token) {
                this.error = "User not authorized. Please log in.";
                return;
            }

            this.loading = true; // Start loading

            try {
                const response = await axios.post(
                    "https://1c2c8eac-fed3-4b76-b130-c06b95b0f1e7.mock.pstmn.io/api/divUpdates",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${authStore.token}`,
                        },
                    }
                );
                if (Array.isArray(response.data)) {
                    this.updates = response.data;
                } else {
                    this.error = "Unexpected response format.";
                }
            } catch (error) {
                if (error.response) {
                    this.error = `Error: ${
                        error.response.data.message || error.response.statusText
                    }`;
                } else {
                    this.error = "Network error, please try again later.";
                }
            } finally {
                this.loading = false; // End loading
            }
        },
    },
});
