import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";

export const useProjectStore = defineStore("projectStore", {
    state: () => ({
        projects: [], // Array to store fetched projects
    }),
    actions: {
        async fetchProjects() {
            const authStore = useAuthStore();

            if (!authStore.token) {
                this.error = "User not authorized. Please log in.";
                return;
            }
            try {
                const response = await axios.post(
                    "https://1c2c8eac-fed3-4b76-b130-c06b95b0f1e7.mock.pstmn.io/api/memberProjects",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${authStore.token}`,
                        },
                    }
                );
                this.projects = response.data;
            } catch (error) {
                alert("Error fetching projects:", error);
            }
        },
    },
    getters: {
        yetToStart: (state) =>
            state.projects.filter(
                (project) => project.status === -1 && !project.research
            ),
        ongoing: (state) =>
            state.projects.filter(
                (project) => project.status === 0 && !project.research
            ),
        completed: (state) =>
            state.projects.filter(
                (project) => project.status === 1 && !project.research
            ),
        research: (state) =>
            state.projects.filter((project) => project.research),
    },
});
