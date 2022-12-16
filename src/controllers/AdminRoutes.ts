import { ApplicationRoutes } from '@/models/ApplicationRoutes';
import { UserRoutes } from './UserRoutes';
import { populateRoutes } from '@/methods/PopulateRoutes';

export let AdminRoutes: Array<ApplicationRoutes> = [
     {
          routeId: 5,
          linkTitle: 'Admin',
          path: '/admin',
          name: 'admin',
          component: () => import('../views/ProductsView.vue'),
     },
     {
          routeId: 6,
          linkTitle: 'Hello',
          path: '/category',
          name: 'hello',
          component: () => import('../views/CategoryView.vue'),
     },
];

AdminRoutes = populateRoutes(UserRoutes, AdminRoutes);
