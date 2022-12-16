import { ApplicationRoutes } from '@/models/ApplicationRoutes';
import HomeView from '@/views/HomeView.vue';

// To fullfill the DRY principle regarding this experiment, I've made a type that takes in interface "Route" and the vue type "RouteRecordRaw".
// And with this UserRoutes array I'm setting all the new routes instead. So this is now SRP and DRY. I only have to add routes here and it'll render out new routes to the navbar.
// I lift out the routes to this seperate file to follow SRP.

export const UserRoutes: Array<ApplicationRoutes> = [
     {
          routeId: 1,
          linkTitle: 'Home',
          path: '/',
          name: 'home',
          component: HomeView,
     },
     {
          routeId: 2,
          linkTitle: 'Category',
          path: '/category',
          name: 'Category',
          component: () =>
               import(
                    /* webpackChunkName: "about" */ '../views/CategoryView.vue'
               ),
     },
     {
          routeId: 3,
          linkTitle: 'Products',
          path: '/products',
          name: 'Products',
          component: () =>
               import(
                    /* webpackChunkName: "about" */ '../views/ProductsView.vue'
               ),
     },
     {
          routeId: 4,
          linkTitle: 'Contacts',
          path: '/contacts',
          name: 'Contacts',
          component: () =>
               import(
                    /* webpackChunkName: "about" */ '../views/ContactsView.vue'
               ),
     },
];
