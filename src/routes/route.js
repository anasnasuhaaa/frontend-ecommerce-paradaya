import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/user/Home.vue";
// import AboutView from "./AboutView.vue";
import AdminaLyout from "../layouts/Admin.vue";
import ProductCard from "../components/ProductCard.vue";
import DetailProduct from "../components/DetailProduct.vue";
import Cart from "../pages/user/Cart.vue";
import LoginForm from "../components/LoginForm.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/dashboard", component: AdminaLyout },
  { path: "/products", component: ProductCard },
  { path: "/detail-produk", component: DetailProduct },
  { path: "/cart", component: Cart },
  { path: "/login", component: LoginForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
