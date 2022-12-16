import { RouteRecordRaw } from 'vue-router';
import { Route } from './interfaces/RouteInterface';

// When creating this type of relation to another type/interface I've concidered LSP.
// Because it uses my own type for naming route in navbar, I've extended that interface with the built-in type "RouteRecordRaw"
// to let the app know what the path is for that specific route. And therfore inherit from the built-in type.

export type ApplicationRoutes = Route & RouteRecordRaw;
