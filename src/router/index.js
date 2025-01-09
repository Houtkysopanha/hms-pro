import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/views/Layout/MainLayout.vue';
import Dashboard from '@/views/DashBaord.vue'; // Ensure the correct import path
import HospitalDepartment from '@/views/HospiDepart/HospitalDepatment.vue';
import AddDepartment from '@/views/HospiDepart/AddDepartment.vue';
import LoginPage from '@/views/LoginPage.vue/LoginPage.vue';
import NotiFication from '@/views/NotiFication.vue';
import DepartInfor from '@/views/HospiDepart/DepertInfor.vue';

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { guestOnly: true },
  },
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/hospital-department",
        name: "HospitalDepartment",
        component: HospitalDepartment,
      },
      {
        path: "/add-department",
        name: "AddDepartment",
        component: AddDepartment,
      },
      {
        path: "/notifications",
        name: "NotiFication",
        component: NotiFication,
      },
      {
        path: "/department-infor",
        name: "DepartmentInfor",
        component: DepartInfor,
      }
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login", // Redirect to login for any unmatched routes
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("auth_token");
  console.log("Navigating to:", to.name, "Token exists:", !!token);

  if (to.matched.some((record) => record.meta.guestOnly) && token) {
    return next({ name: "Dashboard" });
  }

  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    return next({ name: "Login" });
  }

  next();
});


export default router;