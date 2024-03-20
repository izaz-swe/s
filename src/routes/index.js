import { lazy } from "react";

const dummy = lazy(()=> import("../components/Sale"))

const routes = [
  {
    path: "/app/sale",
    component: dummy
  }
];

export default routes;