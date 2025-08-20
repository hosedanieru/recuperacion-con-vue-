import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

import LandingView from "C:\recuperacion\recuperacion-con-vue\src\views\LandingView.vue";
import LoginView from "../views/LandingView.vue";
import DashboardView from "../views/DashboardView.vue";
import ProductosView from "../views/ProductosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "landing", component: LandingView },
    { path: "/login", name: "login", component: LoginView },
    {
      path: "/dashboard",
      component: DashboardView,
      meta: { requiresAuth: true },
      children: [
        { path: "productos", component: ProductosView },
        { path: "usuarios", component: () => import("../views/UsuariosView.vue") },
        { path: "animales", component: () => import("../views/AnimalesView.vue") }
      ]
    }
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
