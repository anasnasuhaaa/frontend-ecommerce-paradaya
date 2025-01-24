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
import ProfileUser from "../components/ProfileUser.vue";
import Checkout from "../components/CheckoutForm.vue";
import Settings from "../pages/admin/Settings.vue";
import Dashboard from "../pages/admin/Dashboard.vue";
import Product from "../pages/admin/Product.vue";
import Category from "../pages/admin/Category.vue";
import orders from "../pages/admin/Orders.vue";
import Verify from "../pages/user/Verify.vue";
import ProductLoopCard from "../components/ProductLoopCard.vue";
import { useAuthStore } from "../stores/auth";
import Orders from "../pages/admin/Orders.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/products", component: ProductLoopCard },
  { path: "/detail-produk", component: DetailProduct },
  { path: "/cart", component: Cart },
  { path: "/login", component: LoginForm, name: "login" },
  { path: "/profile", component: ProfileUser },
  ,
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    props: (route) => ({
      id: route.query.id,
      name: route.query.name,
      image: route.query.image,
      price: route.query.price,
    }),
  },
  { path: "/category", component: CategoriyProduct, name: "category" },
  { path: "/register", component: FormRegister, name: "register" },
  { path: "/verify", component: Verify, name: "verify" },
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
      {
        path: "orders",
        component: Orders,
        name: "adminOrders",
      },
    ],
    meta: { hideHeader: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware untuk proteksi route
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Cek autentikasi
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "login" });
    return;
  }

  // Cek admin
  if (to.meta.isAdmin && !authStore.isAdmin) {
    next({ name: "home" });
    return;
  }

  next();
});

export default router;
