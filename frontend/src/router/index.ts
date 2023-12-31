// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Landing",
        component: () => import("@/views/Landing.vue"),
      },
      {
        path: '/login', 
        name: 'Login', 
        component: () => import('@/views/Login.vue'), 
      },
      {
        path: '/create-account', 
        name: 'Create Account', 
        component: () => import('@/views/Signup.vue'), 
      },
      {
        path: '/home', 
        name: 'Home', 
        component: () => import('@/views/Home.vue'), 
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
