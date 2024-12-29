"use client";

import { Box, Typography, Grid } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CodeIcon from "@mui/icons-material/Code";

const CourseIncluded = () => {
  const highlights = [
    {
      icon: <PlayCircleIcon fontSize="large" sx={{ color: "#A259FF" }} />,
      title: "950+ Videos",
      description:
        "The Programming Hero web development course includes 950 videos, providing extensive coverage of MERN stack...",
      color: "#A259FF",
    },
    {
      icon: <LightbulbIcon fontSize="large" sx={{ color: "#FFA500" }} />,
      title: "45+ Project",
      description:
        "The course includes 45 projects that give students many chances to practice what they learn. These projects...",
      color: "#FFA500",
    },
    {
      icon: <CodeIcon fontSize="large" sx={{ color: "#22C55E" }} />,
      title: "10+ Assignment",
      description:
        "The course has 12 assignments that help check how well students understand and use what they’ve learned. Th...",
      color: "#22C55E",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#B0EACD", // Light background
        py: 6,
        px: 4,
        color: "black",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {highlights.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                border: `2px solid ${item.color}`,
                borderRadius: "12px",
                padding: "24px",
                textAlign: "center",
                backgroundColor: "#B0EACD",
                transition: "transform 0.3s, background-color 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#1A152E",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: item.color,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#4B5563",
                  lineHeight: "1.6",
                  "&:hover": { color: "#FFFFFF" },
                }}
              >
                {item.description}{" "}
                <span
                  style={{
                    color: item.color,
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Read More
                </span>
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseIncluded;
