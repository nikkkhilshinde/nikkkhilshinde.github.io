import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Content.vue";
import Credits from "../components/Credits.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/credits",
    name: "credits",
    component: Credits,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
