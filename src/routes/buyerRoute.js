import { lazy } from "react";

const home = lazy(()=> import("../features/home/ContainerHome/Home.jsx"));
const order = lazy(()=> import("../features/Orders/Order/Orders.jsx"));
const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path:"/order",
    component: order,
  }

];

export default routes;