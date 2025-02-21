import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  useTheme,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        bottom: 0,
        left: 0,
        position: "fixed",
        flexGrow: 1,
        py: 2,
        width: "100%",
        component: "footer",
        backgroundColor: theme.palette.footer.main,
        //color: theme.palette.text.primary,
        // textAlign: "center",
        py: 2,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We provide high-quality courses to help learners grow their skills
              and careers.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/courses" color="inherit" underline="hover">
              Courses
            </Link>
            <br />
            <Link href="/aboutus" color="inherit" underline="hover">
              About Us
            </Link>
            <br />
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: support@learnhive.com
            </Typography>
            <Typography variant="body2">Phone: +1 234 567 890</Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          &copy; {new Date().getFullYear()} LearnHive. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
