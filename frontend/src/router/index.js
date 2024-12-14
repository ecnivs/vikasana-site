import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/LoginView.vue";
import Dashboard from "@/views/DashboardView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ProjectUpdateView from "@/views/ProjectUpdateView.vue";
import UpdatesView from "@/views/UpdatesView.vue";
import VerifyUpdateView from "@/views/VerifyUpdateView.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/project/:id",
        name: "ProjectView",
        component: ProjectView,
    },
    {
        path: "/project/:id/update/:title",
        name: "ProjectUpdateView",
        component: ProjectUpdateView,
    },
    {
        path: "/updates",
        name: "UpdatesView",
        component: UpdatesView,
    },
    {
        path: "/updates/verify",
        name: "VerifyUpdateView",
        component: VerifyUpdateView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
