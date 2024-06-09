import { Add, Dashboard, PostAdd, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
const routes = [
  {
    path: "/app/farmer/",
    icon: <Dashboard />,
    name: "Dashboard"
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
        path: "/app/farmer/sale",
        icon: <Dashboard />,
        name: "Sale Product"
      },
    ] 
  },
  {
    path: "/app/farmer/order",
    icon: <ShoppingCartCheckoutOutlined />,
    name: "Orders"
  },
];

export default routes;