import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";

import NotFound from "../views/NotFound.vue"

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/PracticeView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/practice",
            name: "practice",
            component: () => import("../views/PracticeView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound,
        },
    ],
});

export default router;
