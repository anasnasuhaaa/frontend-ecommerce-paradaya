import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/user/Home.vue";
// import AboutView from "./AboutView.vue";
import AdminaLyout from "../layouts/Admin.vue";
import ProductCard from "../components/ProductCard.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/dashboard", component: AdminaLyout },
  { path: "/products", component: ProductCard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
