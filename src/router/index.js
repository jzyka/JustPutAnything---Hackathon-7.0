import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/company/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import HomeCust from "../views/LandingPageView.vue";
import MainView from "../views/customer/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home-user",
    component: HomeCust,
  },
  {
    path: "/report",
    name: "report",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
