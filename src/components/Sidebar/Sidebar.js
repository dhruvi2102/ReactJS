// src/components/Sidebar.js
import React from "react";
import { Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "#1976D2",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          sx={{ color: "white" }}
        >
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/profile" sx={{ color: "white" }}>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/courses" sx={{ color: "white" }}>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button component={Link} to="/quiz" sx={{ color: "white" }}>
          <ListItemText primary="Quiz" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/enrolledcourses"
          sx={{ color: "white" }}
        >
          <ListItemText primary="Enrolled Courses" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/settings"
          sx={{ color: "white" }}
        >
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
};

export default Sidebar;
