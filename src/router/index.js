import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/views/Layout/MainLayout.vue';
import Dashboard from '@/views/DashBaord.vue'; // Ensure the correct import path
import HospitalDepartment from '@/views/HospiDepart/HospitalDepatment.vue';
import AddDepartment from '@/views/HospiDepart/AddDepartment.vue';
import LoginPage from '@/views/LoginPage.vue/LoginPage.vue';
import NotiFication from '@/views/NotiFication.vue';
import DepartInfor from '@/views/HospiDepart/DepertInfor.vue';
import DoctorFeature from '@/views/DocTor.vue/DoctorFeature.vue';
import AddDoctor from '@/views/DocTor.vue/AddDoctor.vue';
import DoctorInfor from '@/views/DocTor.vue/DoctorInfor.vue';
import EditDoctor from '@/views/DocTor.vue/EditDoctor.vue';
import PatientFeature from '@/views/PatientPage/PatientFeature.vue';
import AddPatient from '@/views/PatientPage/AddPatient.vue';
import PatientInfor from '@/views/PatientPage/PatientInfor.vue';
import EditPatient from '@/views/PatientPage/EditPatient.vue';

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
      },
      {
        path: "/doctor",
        name: "Doctor",
        component: DoctorFeature,
      },
      {
        path: "/add-doctor",
        name: "Add Doctor",
        component: AddDoctor,
      },
      {
        path: "/doctor-infor",
        name: 'DoctorInfor',
        component: DoctorInfor,
      },
      {
        path: "/edit-doctor",
        name: 'Edit Doctor',
        component: EditDoctor,
      },
      {
        path: "/patient-feature",
        name: "PatientFeature",
        component: PatientFeature,
      },
      {
        path: "/AddPatient",
        name: "AddPatient",
        component: AddPatient,
      },
      {
        path: "/patient-info",
       name: "PatientInfo",
       component: PatientInfor,
      },
      {
        path: "/edit-patient",
       name: "EditPatient",
       component: EditPatient,
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