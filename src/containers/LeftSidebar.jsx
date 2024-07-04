import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Box, ListItem, } from "@mui/material";
import routes from "../routes/sidebar.jsx";
import logo from "../assets/nav.png"
import SidebarSubmenu from "./SidebarSubmenu";
import { NavLink } from "react-router-dom";

function LeftSidebar(props) {
  const {
    drawerWidth,
    mobileOpen,
    container,
    handleDrawerClose,
    handleDrawerTransitionEnd,
  } = props;
  const drawer = (
    <div>
      <Toolbar>
        <div className="w-38">
          <img className="w-full" src={logo} alt="LOGO"/>
        </div>
      </Toolbar>
      <Divider />
      <List
        disablePadding
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-labelledby="nested-list-subheader"
      >
        {routes.map((route, key)=> (
          route.submenu ? (
            <SidebarSubmenu {...route} key={key}/>
          ) : (
            <ListItem key={key}>
              <ListItemButton component={NavLink} to={route.path}>
              <ListItemIcon>
                {route.icon}
              </ListItemIcon>
              <ListItemText primary={route.name}/>
            </ListItemButton>
            </ListItem>
          )
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default LeftSidebar;
