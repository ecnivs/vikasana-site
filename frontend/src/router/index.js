import { createRouter, createWebHistory } from 'vue-router'
import Test from "@/views/TestView.vue";
import Login from "@/views/LoginView.vue";
import Dashboard from "@/views/DashboardView.vue";

const routes = [
    {
        path: "/test",
        name: "Test",
        component: Test,
    },
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 