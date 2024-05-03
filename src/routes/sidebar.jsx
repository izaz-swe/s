import { Add, Dashboard, Home, PostAdd } from "@mui/icons-material";
const routes = [
  {
    path: "/app/farmer/dashboard",
    icon: <Dashboard />,
    name: "Dashboard"
  },
  {
    path: "/app/home",
    icon: <Home/>,
    name: "Home"
  },
  {
    path: "",
    icon: <PostAdd />,
    name: "Offer",
    submenu: [
      {
        path: "/app/farmer/add",
        icon: <Add />,
        name: "Make Offer"
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
    name: "Order",
    submenu: [
      {
        path: "/app/sale",
        icon: <Dashboard />,
        name: "Pending"
      }
    ] 
  }
];

export default routes;