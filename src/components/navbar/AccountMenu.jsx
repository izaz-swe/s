import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { Avatar, Divider, ListItemIcon } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import avaImg from "../../assets/avatar.png";
export default function AccountMenu() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function logoutUser() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <>
      {auth && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt="f" src={avaImg}/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            sx={{mt: 4}}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/app/sale">
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem component={Link} to="/app/sale">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              Profile Settings
            </MenuItem>
            <Divider/>
            <MenuItem onClick={logoutUser}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
}
