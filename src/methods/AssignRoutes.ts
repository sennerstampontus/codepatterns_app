import { AdminRoutes } from '@/controllers/AdminRoutes';
import { UserRoutes } from '@/controllers/UserRoutes';
import { ApplicationRoutes } from '@/models/ApplicationRoutes';
import { IRoleRoutes } from '@/models/interfaces/IRoleRoutes';

// OCP - This says it cannot be change when it's done.
// With this we don't need to change the current routes if we create a new role.
// We simply create the new "NameRoutes" and specify the new route values.
// Then take in a new case in this switch to return the new route array.

export const assignRoutes = (role: string): Array<ApplicationRoutes> => {
     switch (role) {
          case 'user':
               return UserRoutes;
          case 'admin':
               return AdminRoutes;

          default:
               return UserRoutes;
     }
};
