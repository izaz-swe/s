import { lazy } from "react";

const dashboard = lazy(()=> import("../features/dashboard/dashboard"));

const routes = [
  {
    path: "/dashboard",
    component: dashboard
  },
];

export default routes;