import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";

const Settings = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notification, setNotification] = useState(true); // User preference for notifications

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      setUsername(userData.name);
      setEmail(userData.email);
    }
  });
  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Here you can make an API call to save the user data
    console.log("Settings Saved:", { username, email, password, notification });
    alert("Settings saved successfully!");
  };

  return (
    <Box sx={{ padding: 3, mt: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Account Settings
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Preferences
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="body1">Receive Notifications</Typography>
              <Button
                variant={notification ? "contained" : "outlined"}
                color="primary"
                onClick={() => setNotification(!notification)}
              >
                {notification ? "Enabled" : "Disabled"}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveChanges}
          sx={{ padding: "10px 20px" }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
