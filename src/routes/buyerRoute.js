import { lazy } from "react";

const order = lazy(()=> import("../features/Orders/Order/Orders.jsx"));
const details = lazy(()=> import("../features/Orders/Details/Details.jsx"));
const allOffers = lazy(()=> import("../features/offer/AllOffers.jsx"));
const routes = [
  {
    path:"/order",
    component: order,
  },
  {
    path:"/details/:id",
    component: details,
  },
  {
    path:"/allOffers",
    component: allOffers,
  },

];

export default routes;