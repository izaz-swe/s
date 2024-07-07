import { lazy } from "react";
const dashboard = lazy(()=> import("../features/dashboard/dashboard"));
const offer = lazy(()=> import("../pages/protected/OfferPage"));
const salePage = lazy(()=> import("../features/farmer/order/Sold"));
const orderPage = lazy(()=> import("../pages/protected/FarmerOrderPage"));
const profilePage = lazy(()=> import("../pages/protected/ProfilePage"));
const routes = [
  {
    path: "/",
    component: dashboard
  },
  {
    path: "/add",
    component: offer
  },
  {
    path: "/sale",
    component: salePage
  },
  {
    path: "/order",
    component: orderPage
  },
  {
    path: "/profile",
    component: profilePage,
  }
];

export default routes;