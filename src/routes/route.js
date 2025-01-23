import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/user/Home.vue";
// import AboutView from "./AboutView.vue";
import AdminaLyout from "../layouts/Admin.vue";
import CategoriyProduct from "../components/CategoriyProduct.vue";
import FormRegister from "../components/FormRegister.vue";




const routes = [
  { path: "/", component: HomeView },
  { path: "/dashboard", component: AdminaLyout },
  { path: "/category", component: CategoriyProduct},
  { path: "/register", component: FormRegister},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
