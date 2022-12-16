import { ApplicationRoutes } from '../ApplicationRoutes';

export interface IRoleRoutes {
     routes: Array<ApplicationRoutes>;
     populateRoutes?(
          currentRoutes: Array<ApplicationRoutes>,
          newRoutes: Array<ApplicationRoutes>
     ): void;
}
