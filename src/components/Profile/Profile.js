import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  // Initialize state with empty values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(""); // For avatar image URL or base64 string
  const [editMode, setEditMode] = useState(false);

  // Retrieve user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // If the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (storedUser) {
      // Set user data only if storedUser exists
      setName(storedUser.name);
      setEmail(storedUser.email);
      setAvatar(storedUser.avatar || "");
    }
  }, [isAuthenticated, storedUser, navigate]);

  const handleEdit = () => setEditMode(!editMode);

  const handleSave = () => {
    // Update the profile data in localStorage
    const updatedUser = { ...storedUser, name, email, avatar };
    localStorage.setItem("profile", JSON.stringify(updatedUser)); // Save updated user data

    alert("Profile updated successfully!"); // Show confirmation alert

    setEditMode(false); // Exit edit mode
  };

  const handleAvatarChange = (e) => {
    // Allow the user to upload an image file for their avatar
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // This will store the image as a base64 string
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  };

  return (
    <Box sx={{ padding: 3, mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{
              padding: 2,
              textAlign: "center",
              justifyContent: "center",
              //height: "197px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "serif",
                textAlign: "center",
                fontWeight: "bold",
                color: "#648ED5",
              }}
            >
              {user.name}
            </Typography>
            {/* Avatar Display */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 2,
              }}
            >
              <Avatar
                alt="User Avatar"
                src={
                  avatar ||
                  "https://icon-library.com/images/female-user-icon/female-user-icon-8.jpg"
                }
                sx={{ width: 120, height: 120 }}
              />
            </Box>
            {/* <Typography variant="h6">{user.name}</Typography> */}

            {/* Avatar Upload */}
            <input
              type="file"
              accept="image/*"
              id="avatar-upload"
              onChange={handleAvatarChange}
              disabled={!editMode} // Disable file input if not in edit mode
              style={{ display: "none" }} // Hide the default file input
            />

            <Button
              variant="contained"
              component="label"
              disabled={!editMode} // Disable button if not in edit mode
              sx={{ marginBottom: 1, marginTop: 4 }}
            >
              {avatar ? "Change Avatar" : "Upload Avatar"}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
              />
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: 3, height: "250px", position: "relative" }}>
            {/* User Info Fields */}
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!editMode}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!editMode}
              sx={{ marginBottom: 2 }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleEdit}
                sx={{ position: "absolute", bottom: 20 }}
              >
                {editMode ? "Cancel" : "Edit"}
              </Button>
              {editMode && (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSave}
                  sx={{ position: "absolute", bottom: 20, right: 20 }}
                >
                  Save Changes
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
