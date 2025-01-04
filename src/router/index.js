import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/views/Layout/MainLayout.vue';
import DashBaord from '@/views/DashBaord.vue';
import HospitalDepatment from '@/views/HospitalDepatment.vue';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashBaord,
      },
      {
        path: '/hospittal-department',
        name: 'HospitalDepartment',
        component: HospitalDepatment,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
