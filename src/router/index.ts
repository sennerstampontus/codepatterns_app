import { createRouter, createWebHistory } from 'vue-router';
import { assignRoutes } from '@/methods/AssignRoutes';

// This index file now only keeps track of the history of routes visited.
// It can also be used to display different type of router-link depending on user logged in or not etc.
// NOTE!: This was just a first-time experiment. There is probably a lot of issues with this.
// But it makes this router/index.ts file more readable and understanable. And also more responsible to one thing.

const authenticatedAsAdmin = 'admin';
const authenticatedAsUser = 'user';

export const routes = assignRoutes(authenticatedAsUser);

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

export default router;
