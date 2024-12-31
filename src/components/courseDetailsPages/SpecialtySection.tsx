import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

// Data for the specialties
const specialties = [
  {
    title: "Web Development Complete Course",
    description:
      "By watching a few videos, you will learn HTML, CSS and create two beautiful websites. And you can share those links with anyone.",
    icon: "🖥️", // Replace with an actual icon/image
  },
  {
    title: "Unlimited Support",
    description:
      "Any questions you may have will be answered within 24 hours during the course (except holidays).",
    icon: "🎧", // Replace with an actual icon/image
  },
  {
    title: "Special Interview Preparation Group",
    description:
      "Those who will work daily, 6 to 8 hours will be given daily. Determine the course with passion and seriousness.",
    icon: "👨‍💼", // Replace with an actual icon/image
  },
  {
    title: "Job Placement Coach",
    description:
      "A couple of concepts to learn may not be clear to everyone at first glance. This is very normal.",
    icon: "📋", // Replace with an actual icon/image
  },
  {
    title: "Live Conceptual Session",
    description:
      "A couple of concepts to learn may not be clear to everyone at first glance. This is very normal.",
    icon: "🎥", // Replace with an actual icon/image
  },
  {
    title: "Advanced Crash Course (ACC)",
    description:
      "You’re not just enrolling in a course at Programming Hero. Rather on a mission to learn lifelong web development.",
    icon: "📚", // Replace with an actual icon/image
  },
];

const SpecialtySection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#B0EACD",
        py: 8,
        px: { xs: 2, sm: 4 }, // Add padding for mobile and larger screens
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" sx={{ color: "#000", fontWeight: "bold" }}>
          What Is The Specialty_ Of This Course?
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {specialties.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                background: "linear-gradient(to bottom, #1a1a2e, #282856)",
                padding: 3,
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "3rem",
                    color: "#fff",
                    mr: 2,
                  }}
                >
                  {item.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpecialtySection;
