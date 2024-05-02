import { lazy } from "react";

const dashboard = lazy(()=> import("../features/dashboard/dashboard"));
const offer = lazy(()=> import("../pages/protected/OfferPage"));

const routes = [
  {
    path: "/farmer/dashboard",
    component: dashboard
  },
  {
    path: "/farmer/add",
    component: offer
  }
];

export default routes;