import React from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }

    const userData = { name, email, password };
    const x = JSON.parse(localStorage.getItem("user"));
    // console.log(x.email, userData.email, email);
    if (x?.email === email) {
      alert("Email already exists");
      // navigate("/login");
    } else {
      localStorage.setItem("user", JSON.stringify(userData)); // Save user data
      //console.log(userData);
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to Login after sign-up
    }
  };
  return (
    <Box
      //className="auth-container"
      sx={{
        minHeight: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://www.bac.org.tn/wp-content/uploads/2018/07/study-background-11.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mt: 8,
      }}
    >
      <Card className="auth-card">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Registration
          </Typography>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="auth-button"
            onClick={handleRegister}
          >
            Register
          </Button>
          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Already have an account?{""}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
