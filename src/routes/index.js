import { lazy } from "react";

const loginPage = lazy(()=> import("../components/Sale"))

const routes = [
  {
    path: "/sale",
    component: loginPage
  },
];

export default routes;