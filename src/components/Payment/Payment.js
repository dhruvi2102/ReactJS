import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, List, ListItem } from "@mui/material";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course; // Get the course data passed from Courses.js

  const handlePayment = () => {
    navigate("/confirmation");
  };

  if (!course) {
    navigate("/courses"); // Redirect back to courses if no course data is found
    return null;
  }

  return (
    <Box sx={{ padding: 3, mt: 8 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Payment for {course.title}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20 }}>
          Instructor: {course.instructor}
        </Typography>

        <Typography variant="body2" color="textSecondary" paragraph>
          {course.description}
        </Typography>

        {/* Display Duration */}
        <Typography variant="h6">Duration: {course.duration}</Typography>

        {/* Display Prerequisites */}
        {course.prerequisites && course.prerequisites.length > 0 && (
          <>
            <Typography variant="h6">Prerequisites:</Typography>
            <List>
              {course.prerequisites.map((prerequisite, index) => (
                <ListItem key={index} sx={{ paddingLeft: 2 }}>
                  - {prerequisite}
                </ListItem>
              ))}
            </List>
          </>
        )}

        {/* Display Sections */}
        {course.sections && course.sections.length > 0 && (
          <>
            <Typography variant="h6">Course Sections:</Typography>
            <List>
              {course.sections.map((section, index) => (
                <ListItem key={index} sx={{ paddingLeft: 2 }}>
                  {index + 1}. {section}
                </ListItem>
              ))}
            </List>
          </>
        )}

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Price: $99.99
        </Typography>

        {/* Payment Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handlePayment}
        >
          Proceed to Payment
        </Button>
      </Paper>
    </Box>
  );
};

export default Payment;
