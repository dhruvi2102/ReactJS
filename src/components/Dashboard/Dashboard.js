import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Grid, Card, CardContent } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts";

const Dashboard = () => {
  const [totalCourses, setTotalCourses] = useState(0);
  const [completedCourses, setCompletedCourses] = useState(0);

  useEffect(() => {
    // Fetch user data
    const user = JSON.parse(localStorage.getItem("user"));

    // Fetch enrolled courses from localStorage
    const enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setTotalCourses(enrolledCourses.length);

    // Count completed courses
    const completed = enrolledCourses.filter(
      (course) => course.completed
    ).length;
    setCompletedCourses(completed);
  }, []);

  // Calculate completion percentage
  const completionPercentage =
    totalCourses > 0 ? ((completedCourses / totalCourses) * 100).toFixed(2) : 0;

  return (
    <Box sx={{ display: "flex", mt: 10 }}>
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Welcome {JSON.parse(localStorage.getItem("user"))?.name || "User"}
        </Typography>

        {/* User Stats */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: "center" }}>
              <Typography variant="h6">Total Courses</Typography>
              <Typography variant="h4">{totalCourses}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: "center" }}>
              <Typography variant="h6">Completed Courses</Typography>
              <Typography variant="h4">{completedCourses}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: "center" }}>
              <Typography variant="h6">Pending Courses</Typography>
              <Typography variant="h4">
                {totalCourses - completedCourses}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Course Completion Gauge */}
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent sx={{ width: "100%" }}>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Course Completion
                </Typography>
                <Stack direction="row" justifyContent="center">
                  <Gauge
                    width={400}
                    height={200}
                    value={completionPercentage}
                    valueMax={100}
                    valueFormatter={(value) => `${value}%`}
                    sx={{ margin: "0 auto", padding: 2 }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
