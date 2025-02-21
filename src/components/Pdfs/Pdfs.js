import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Pdfs = () => {
  const [enrolledPdfs, setEnrolledPdfs] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses from localStorage
    const enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledcourses")) || [];

    // Extract PDFs from enrolled courses
    const pdfsList = enrolledCourses.flatMap((course) =>
      course.pdfs.map((pdf) => ({
        title: `${course.name} - ${pdf.name}`,
        url: pdf.url,
      }))
    );

    setEnrolledPdfs(pdfsList);
  }, []);

  return (
    <Box sx={{ padding: 3, mt: 7 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        PDFs & Notes
      </Typography>

      {enrolledPdfs.length > 0 ? (
        enrolledPdfs.map((pdf, index) => (
          <Card
            key={index}
            sx={{ mb: 2, display: "flex", alignItems: "center", padding: 2 }}
          >
            <PictureAsPdfIcon sx={{ fontSize: 40, color: "red", mr: 2 }} />
            <CardContent>
              <Typography variant="h6">{pdf.title}</Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: "auto" }}
              href={pdf.url}
              target="_blank"
            >
              View PDF
            </Button>
          </Card>
        ))
      ) : (
        <Typography>No PDFs available for your enrolled courses.</Typography>
      )}
    </Box>
  );
};

export default Pdfs;
