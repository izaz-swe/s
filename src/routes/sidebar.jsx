import { Dashboard, Home } from "@mui/icons-material";
const routes = [
  {
    path: "/app/dashboard",
    icon: <Dashboard />,
    name: "Dashboard"
  },
  {
    path: "",
    icon: <Home />,
    name: "Sale",
    submenu: [
      {
        path: "/app/sale",
        icon: <Dashboard />,
        name: "Sale Product"
      },
      {
        path: "/app/sale",
        icon: <Dashboard />,
        name: "Sale Product"
      },
    ] 
  },
  {
    path: "",
    icon: <Home />,
    name: "Sale",
    submenu: [
      {
        path: "/app/sale",
        icon: <Dashboard />,
        name: "Sale Product"
      }
    ] 
  }
];

export default routes;