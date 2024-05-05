import { lazy } from "react";

const dummy = lazy(()=> import("../pages/protected/Dummy"));
const routes = [
  {
    path: "/",
    component: dummy,
  }
];

export default routes;