import { createRouter, createWebHistory } from "vue-router";
import LoginViewVue from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoginViewVue,
    },
    {
      path: "/login",
      name: "login",
      component: LoginViewVue,
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/MainView.vue"),
    },
  ],
});

export default router;
