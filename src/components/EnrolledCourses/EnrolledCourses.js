import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
  ListItemText,
  List,
  ListItem,
  Snackbar,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const EnrolledCourses = ({ searchQuery }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQu = queryParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(courses);
  }, []);

  const filteredCourses = enrolledCourses.filter((course) =>
    course.title?.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  const handleDeleteCourse = (courseId) => {
    const updatedCourses = enrolledCourses.filter(
      (course) => course.id !== courseId
    );
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
    setEnrolledCourses(updatedCourses);
  };

  const markAsCompleted = (courseId) => {
    const updatedCourses = enrolledCourses.map((course) =>
      course.id === courseId ? { ...course, completed: true } : course
    );
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
    setEnrolledCourses(updatedCourses);
    setMessage("🎉 Congratulations! You have completed the course.");
    setOpenSnackbar(true);
  };
  const theme = useTheme();
  return (
    <Box sx={{ padding: 3, mt: 8 }}>
      {!selectedCourse ? (
        <>
          <Button
            variant="outlined"
            sx={{ marginBottom: 2 }}
            onClick={() => (window.location.href = "/courses")}
          >
            Back to Courses
          </Button>

          <Typography variant="h4" gutterBottom>
            Enrolled Courses
          </Typography>
          <Grid container spacing={3}>
            {filteredCourses.length === 0 ? (
              <Typography variant="body1">No courses found.</Typography>
            ) : (
              filteredCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Instructor: {course.instructor}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        paragraph
                      >
                        {course.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Status:{" "}
                        {course.completed ? "✅ Completed" : "⏳ In Progress"}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginBottom: 1, marginRight: 1 }}
                        onClick={() => setSelectedCourse(course)}
                      >
                        Continue Learning
                      </Button>
                      {!course.completed && (
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ marginBottom: 1, marginRight: 1 }}
                          onClick={() => markAsCompleted(course.id)}
                        >
                          Complete Course
                        </Button>
                      )}
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDeleteCourse(course.id)}
                      >
                        Delete Course
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </>
      ) : (
        <Box sx={{ mt: 8 }}>
          <Button
            variant="contained"
            sx={{ marginBottom: 2, backgroundColor: "white", color: "#1976d2" }}
            onClick={() => setSelectedCourse(null)}
          >
            Back to Courses
          </Button>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {selectedCourse.title}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Instructor: {selectedCourse.instructor}
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedCourse.description}
              </Typography>

              <Typography variant="h6">
                Duration: {selectedCourse.duration}
              </Typography>

              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Prerequisites:
              </Typography>
              <List>
                {selectedCourse.prerequisites.map((prereq, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`• ${prereq}`} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Sections:
              </Typography>
              <List>
                {selectedCourse.sections.map((section, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`• ${section}`} />
                  </ListItem>
                ))}
              </List>
              <List>
                <Typography variant="h5" sx={{ marginBottom: 1, fontSize: 19 }}>
                  PDFs & Notes
                </Typography>
                {selectedCourse.pdfs && selectedCourse.pdfs.length > 0 ? (
                  selectedCourse.pdfs.map((pdf, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={
                          <a
                            style={{ color: theme.palette.text.primary }}
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            • {pdf.title}
                          </a>
                        }
                      />
                    </ListItem>
                  ))
                ) : (
                  <ListItem>
                    <ListItemText primary="No PDFs available" />
                  </ListItem>
                )}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ marginBottom: 1 }}>
                Course Videos
              </Typography>
              {selectedCourse.videos && selectedCourse.videos.length > 0 ? (
                <Grid container spacing={2}>
                  {selectedCourse.videos.map((video, index) => (
                    <Grid item xs={12} key={index}>
                      <Card sx={{ width: 600 }}>
                        <CardMedia
                          component="iframe"
                          height="300"
                          src={video.url}
                          title={video.title}
                        />
                        <CardContent>
                          <Typography variant="body1">{video.title}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography>No videos available for this course.</Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        message={message}
      />
    </Box>
  );
};

export default EnrolledCourses;
