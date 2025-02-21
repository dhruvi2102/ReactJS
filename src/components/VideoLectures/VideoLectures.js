import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box, Typography, Card, CardContent } from "@mui/material";

// Sample video lectures categorized by course titles
const videoLectures = {
  "Introduction to React": [
    { title: "React Basics", url: "https://www.youtube.com/embed/N3AkSS5hXMA" },
    {
      title: "React Components",
      url: "https://www.youtube.com/embed/dpw9EHDh2bM",
    },
  ],
  "Advanced JavaScript": [
    {
      title: "JavaScript Closures",
      url: "https://www.youtube.com/embed/XG32wbpjoU4",
    },
    {
      title: "Promises and Async/Await",
      url: "https://www.youtube.com/embed/W6NZfCO5SIk",
    },
  ],
  "CSS for Beginners": [
    { title: "CSS Grid", url: "https://www.youtube.com/embed/jV8B24rSN5o" },
    {
      title: "Flexbox Basics",
      url: "https://www.youtube.com/embed/K74l26pE4YA",
    },
  ],
  "Data Structures and Algorithms": [
    {
      title: "Sorting Algorithms",
      url: "https://www.youtube.com/embed/TzeBrDU-JaY",
    },
    {
      title: "Graph Algorithms",
      url: "https://www.youtube.com/embed/tWVWeAqZ0WU",
    },
  ],
  "Python for Data Science": [
    {
      title: "Pandas for Data Science",
      url: "https://www.youtube.com/embed/ZyhVh-qRZPA",
    },
    {
      title: "Matplotlib for Visualization",
      url: "https://www.youtube.com/embed/m64Upph9EwI",
    },
  ],
};

const VideoLectures = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrolledCourses);

    // Default to the first enrolled course
    if (storedEnrolledCourses.length > 0) {
      setSelectedCourse(storedEnrolledCourses[0].title);
    }
  }, []);

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, p: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        Video Lectures
      </Typography>

      {enrolledCourses.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          You are not enrolled in any courses. Please enroll first.
        </Typography>
      ) : (
        <>
          {/* Course Selection Tabs */}
          <Tabs
            value={selectedCourse}
            onChange={(event, newValue) => setSelectedCourse(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            centered
          >
            {enrolledCourses.map((course) => (
              <Tab key={course.id} label={course.title} value={course.title} />
            ))}
          </Tabs>

          {/* Display videos for the selected course */}
          <Box mt={3}>
            {videoLectures[selectedCourse]?.map((video, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {video.title}
                  </Typography>
                  <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
                    <iframe
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default VideoLectures;
