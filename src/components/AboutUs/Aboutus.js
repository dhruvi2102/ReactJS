import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handlecourses = () => {
    navigate("/courses");
  };
  return (
    <Box
      sx={{
        padding: "40px 20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          About Us
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Empowering Learning, Anytime, Anywhere.
        </Typography>

        <Grid container spacing={4}>
          {/* Who We Are */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1">
              We are a team of educators, developers, and innovators dedicated
              to making learning more accessible and engaging. Our mission is to
              provide high-quality, industry-relevant courses that empower
              learners worldwide.
            </Typography>
          </Grid>

          {/* What We Offer */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              What We Offer
            </Typography>
            <Typography variant="body1">
              ✅ Expert-Led Courses <br />
              ✅ Self-Paced Learning <br />
              ✅ Certification Programs <br />
              ✅ Live Q&A Sessions <br />
              ✅ Community Support <br />
            </Typography>
          </Grid>

          {/* Why Choose Us */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1">
              🔹 High-Quality Content <br />
              🔹 Flexible Learning <br />
              🔹 Career-Oriented Skills <br />
              🔹 24/7 Support <br />
            </Typography>
          </Grid>

          {/* Join Us */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Join Us Today!
            </Typography>
            <Typography variant="body1">
              Whether you're looking to upskill, change careers, or learn
              something new, YourLMS is your trusted learning partner.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handlecourses}
            >
              Explore Courses
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
