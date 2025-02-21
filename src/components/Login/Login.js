import React, { useContext, useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import navigate from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname;
  console.log(location, "Location");

  // const handlehome = () => {
  //   navigate("/home");
  // };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/login"); // Redirect to Sign Up if no user is found
    }
  }, [navigate]);

  const handleLogin = () => {
    // Prevent login if email or password is empty
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists and credentials match
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("isAuthenticated", "true");

      navigate("/dashboard"); // Redirect to Home
    } else {
      alert("Invalid email or password!"); // Show error if login fails
    }
  };

  // const handleLogin = () => {
  //   const userData = { email, password };
  //   if (userData.email !== "") {
  //     if (userData.password !== "") {
  //       login(userData);
  //       navigate("/home");
  //     }
  //   } else {
  //     const stored = localStorage.getItem("user");
  //     if (!stored) {
  //       navigate("/Signup");
  //     }
  //   }
  // };

  return (
    <Box
      //className="login-container"
      sx={{
        minHeight: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://en.idei.club/uploads/posts/2023-06/1687512645_en-idei-club-p-modern-office-background-dizain-instagram-3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card className="login-card">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="login-button"
              onClick={handleLogin}
            >
              Login
            </Button>
            {/* <Button
              type="submit"
              variant="contained"
              color="yellow"
              fullWidth
              className="home-button"
              onClick={handlehome}
            >
              Home
            </Button> */}
            <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
              Don't have an account? <Link to="/register">Register here</Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Login;
