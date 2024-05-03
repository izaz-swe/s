import { lazy } from "react";

const dashboard = lazy(()=> import("../features/dashboard/dashboard"));
const offer = lazy(()=> import("../pages/protected/OfferPage"));
const home = lazy(()=> import("../pages/protected/HomePage"))
const offerDetails = lazy(()=> import("../pages/protected/OfferDetailsPage"))
const routes = [
  {
    path: "/farmer/dashboard",
    component: dashboard
  },
  {
    path: "/farmer/add",
    component: offer
  },
  {
    path: "/home",
    component: home
  },



  // Buyer section
  {
    path: "/buyer/offer-details",
    component: offerDetails,
  }
];

export default routes;