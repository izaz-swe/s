import { lazy } from "react";
const dashboard = lazy(()=> import("../features/dashboard/dashboard"));
const offer = lazy(()=> import("../pages/protected/OfferPage"));
const dummy = lazy(()=> import("../pages/protected/Dummy"));
const orderPage = lazy(()=> import("../pages/protected/FarmerOrderPage"));
const routes = [
  {
    path: "/dashboard",
    component: dashboard
  },
  {
    path: "/add",
    component: offer
  },
  {
    path: "/sale",
    component: dummy
  },
  {
    path: "/order",
    component: orderPage
  },
];

export default routes;