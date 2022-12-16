import { ApplicationRoutes } from '@/models/ApplicationRoutes';
import { UserRoutes } from './UserRoutes';
import { populateRoutes } from '@/methods/PopulateRoutes';

// With SRP and DRY in mind, I created this new Array of routes that is should only be visible by admins.
// Tho and Admin should have the routes a user do, so though the extracted method "populateRoutes", I add the oldRoutes and combine them with the new ones.

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
