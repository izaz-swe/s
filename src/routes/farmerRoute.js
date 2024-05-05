import { lazy } from "react";
const dashboard = lazy(()=> import("../features/dashboard/dashboard"));
const offer = lazy(()=> import("../pages/protected/OfferPage"));
const offerDetails = lazy(()=> import("../pages/protected/OfferDetailsPage"))
const routes = [
  {
    path: "/dashboard",
    component: dashboard
  },
  {
    path: "/add",
    component: offer
  },



  // Buyer section
  {
    path: "/offer-details/:offerId",
    component: offerDetails,
  }
];

export default routes;