import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/user/Home.vue";
// import AboutView from "./AboutView.vue";

import AdminLayout from "../layouts/Admin.vue";
import CategoriyProduct from "../components/CategoriyProduct.vue";
import FormRegister from "../components/FormRegister.vue";
import ProductCard from "../components/ProductCard.vue";
import DetailProduct from "../components/DetailProduct.vue";
import Cart from "../pages/user/Cart.vue";
import LoginForm from "../components/LoginForm.vue";
import Settings from "../pages/admin/Settings.vue";
import Dashboard from "../pages/admin/Dashboard.vue";
import Category from "../pages/admin/Category.vue";
import Product from "../pages/admin/Product.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/products", component: ProductCard },
  { path: "/detail-produk", component: DetailProduct },
  { path: "/cart", component: Cart },
  { path: "/login", component: LoginForm },
  { path: "/category", component: CategoriyProduct},
  { path: "/register", component: FormRegister},
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "category",
        component: Category,
      },
      {
        path: "product",
        component: Product,
      },
      // {
      //   path: "settings",
      //   component: Settings,
      // },
      // {
      //   path: "profile",
      //   component: Profile,
      // },
      // {
      //   path: "",
      //   redirect: "/admin/dashboard", // Redirect default ke dashboard
      // },
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
