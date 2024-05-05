import { lazy } from "react";

const home = lazy(()=> import("../features/home/ContainerHome/Home.jsx"));
const routes = [
  {
    path: "/",
    component: home,
  }
];

export default routes;