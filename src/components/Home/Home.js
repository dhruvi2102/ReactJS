// src/pages/Home.js
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
//import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handlecourses = () => {
    navigate("/courses");
  };
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/009/806/355/non_2x/modern-workspace-with-laptop-tablet-smartphone-and-coffee-cup-copy-space-on-color-background-top-view-flat-lay-style-free-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        p: 3,
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" color="Black">
          Welcome to LearnHive
        </Typography>
        <Typography variant="h6" sx={{ my: 2, color: "black" }}>
          Learn Anytime, Anywhere. Explore Courses & Upgrade Your Skills!
        </Typography>
        <Button variant="contained" color="primary" onClick={handlecourses}>
          Browse Courses
        </Button>
      </Container>
      <Footer />;
    </Box>
  );
};

export default Home;
