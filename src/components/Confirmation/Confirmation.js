import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const handleok = () => {
    navigate("/enrolledcourses");
  };
  return (
    <Box sx={{ padding: 7, textAlign: "center", mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Payment Successful!
      </Typography>
      <Typography variant="body1">
        Thank you for your payment. You are now enrolled in the course.
      </Typography>
      <Button
        variant="solid"
        sx={{ backgroundColor: "green", margin: 4 }}
        onClick={handleok}
      >
        Ok
      </Button>
    </Box>
  );
};

export default Confirmation;
