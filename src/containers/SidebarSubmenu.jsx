import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
function SidebarSubmenu({ submenu, name, icon }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem sx={{pb:0}}>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {submenu.map((m, k) => {
            return (
              <ListItem sx={{pb:0, pt: 0}} key={k} component={Link} to={m.path}>
                <ListItemButton sx={{ pt:1, pb:1, pl:4 }}>
                  <ListItemIcon sx={{minWidth: 40}}>{m.icon}</ListItemIcon>
                  <ListItemText primary={m.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

export default SidebarSubmenu;
