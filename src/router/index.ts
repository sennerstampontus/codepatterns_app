import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
     {
          path: '/',
          name: 'home',
          component: HomeView,
     },
     {
          path: '/category',
          name: 'Category',
          component: () =>
               import(
                    /* webpackChunkName: "about" */ '../views/CategoryView.vue'
               ),
     },
     {
          path: '/products',
          name: 'Products',
          component: () =>
               import(
                    /* webpackChunkName: "about" */ '../views/ProductsView.vue'
               ),
     },
     {
          path: '/contacts',
          name: 'Contacts',
          component: () =>
               import(
                    /* webpackChunkName: "about" */ '../views/ContactsView.vue'
               ),
     },
];

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

export default router;
