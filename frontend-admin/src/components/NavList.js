import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreateIcon from "@mui/icons-material/Create";
import MovieIcon from "@mui/icons-material/Movie";
import ViewList from "@mui/icons-material/ViewList"
import AddReactionIcon from "@mui/icons-material/AddReaction";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout } from "../state/authSlice";

export const NavList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <List component="nav">
      <React.Fragment>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/events")}>
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/bookings")}>
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Bookings" />
        </ListItemButton>
      </React.Fragment>
      <Divider sx={{ my: 1 }} />
      <React.Fragment>
        <ListItemButton
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </React.Fragment>
    </List>
  );
};
