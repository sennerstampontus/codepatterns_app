import { ApplicationRoutes } from '@/models/ApplicationRoutes';

export const populateRoutes = (
     currentRoutes: Array<ApplicationRoutes>,
     newRoutes: Array<ApplicationRoutes>
): ApplicationRoutes[] => {
     return [...currentRoutes, ...newRoutes];
};
