import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('components/login/LoginForm.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: 'signup',
    path: '/signup',
    component: () => import('components/login/SignupForm.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'studio',
    path: '/studio/:param',
    component: () => import('../pages/StudioPage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'verify',
    path: '/verifyemail',
    component:()=> import('components/login/VerifyPage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'activity',
    path: '/activity/:param',
    component: () => import('../pages/ActivitiesPage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'achievement',
    path: '/achievement',
    component: () => import('../pages/AchievementsPage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'narrative',
    path: '/narrative/:param',
    component: () => import('../pages/NarrativePage.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
