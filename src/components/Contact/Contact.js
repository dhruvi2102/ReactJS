import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
} from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send an email or store the data
    console.log("Message sent:", { name, email, message });
    alert("Thank you for contacting us!");
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6">Our Contact Information</Typography>
            <Typography variant="body1">
              Email: reachout@learnhive.com
            </Typography>
            <Typography variant="body1">Phone: +1 123-456-7890</Typography>
            <Typography variant="body1">
              Address: 1234 Learning St., Knowledge City, 56789
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2 }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: 2 }}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 2 }}
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ marginBottom: 2 }}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
