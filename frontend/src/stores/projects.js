// stores/projects.js
import { defineStore } from "pinia";

export const useProjectStore = defineStore("projects", {
    state: () => ({
        projects: [], // List of all projects
        activeProject: null, // Details of the selected project
    }),
    actions: {
        setProjects(projectList) {
            this.projects = projectList;
        },
        setActiveProject(project) {
            this.activeProject = project;
        },
    },
});
