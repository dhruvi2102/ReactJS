import React, { useState, useEffect, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
//import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  MoreVert as MoreIcon,
  Home as HomeIcon,
  School as SchoolIcon,
  AccountCircle as AccountCircleIcon,
  Dashboard as DashboardIcon,
  Quiz as QuizIcon,
  AccountBox as AccountBoxIcon,
  Settings as SettingsIcon,
  PictureAsPdf as PictureAsPdfIcon, // PDF Icon
} from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const [searchQuery, setSearchQuery] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  // Show search bar on specific pages
  const showSearchBar =
    location.pathname === "/courses" ||
    location.pathname === "/enrolledcourses";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      if (location.pathname === "/courses") {
        navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
      } else {
        navigate(`/enrolledcourses?search=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: darkMode ? "#333" : "#1976d2" }}
      >
        <Toolbar>
          {/* Sidebar Menu Button */}
          <IconButton
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>{" "}
          {/* Sidebar Drawer */}
          <Drawer
            anchor="left"
            open={openDrawer}
            variant="persistent"
            sx={{
              backgroundColor: theme.palette.background.default, // Background color based on theme
              color: theme.palette.text.primary,
            }}
          >
            <Box
              sx={{
                width: 250,
                //backgroundColor: "#1976d2",
                height: "100%",
                // color: "white",
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
              }}
              onClick={() => {
                if (openDrawer) setOpenDrawer(false); // Close drawer on outside click
              }}
              role="presentation"
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/")}>
                    <ListItemIcon sx={{ color: "white" }}>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      navigate(isAuthenticated ? "/dashboard" : "/register")
                    }
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      navigate(isAuthenticated ? "/quiz" : "/register")
                    }
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quiz" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      navigate(isAuthenticated ? "/profile" : "/register")
                    }
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      navigate(isAuthenticated ? "/courses" : "/register")
                    }
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary="Courses" />
                  </ListItemButton>
                </ListItem>

                {isAuthenticated && (
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => navigate("/enrolledcourses")}
                    >
                      <ListItemIcon sx={{ color: "white" }}>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Enrolled Courses" />
                    </ListItemButton>
                  </ListItem>
                )}
                {isAuthenticated && (
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate("/pdfs")}>
                      <ListItemIcon sx={{ color: "white" }}>
                        <PictureAsPdfIcon />
                      </ListItemIcon>
                      <ListItemText primary="PDFs & Notes" />
                    </ListItemButton>
                  </ListItem>
                )}

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      navigate(isAuthenticated ? "/settings" : "/register")
                    }
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          {/* Brand Name */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontFamily: "fantasy",
              fontSize: 35,
              mr: 2,
            }}
          >
            LearnHive
          </Typography>
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {/* Show Search Bar on Specific Pages */}
          {showSearchBar && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Courses…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{ margin: 1, backgroundColor: "white", color: "#1976d2" }}
              >
                Search
              </Button>
            </Search>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {/* Authentication Buttons */}
          {isAuthenticated ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                color: "white",
                border: "2px solid red",
                "&:hover": {
                  backgroundColor: "white",
                  color: "red",
                  border: "2px solid red",
                },
              }}
              onClick={() => navigate("/register")}
            >
              Register for Free
            </Button>
          )}
          <MoreIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
