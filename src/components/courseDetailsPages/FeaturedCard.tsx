import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  {
    title: "Foundations First",
    description:
      "Begin your journey with the basics, learning HTML, CSS, Tailwind, and DaisyUI.",
  },
  {
    title: "Next Steps",
    description:
      "Move on to JavaScript, covering DOM manipulation, API integration, ES6 features, debugging, and using developer tools.",
  },
  {
    title: "React and Beyond",
    description:
      "Dive into React, including React Router, hooks, context API, Tanstack query, Axios, payment method, and recharts for creating dynamic UIs.",
  },
  {
    title: "Server-Side Skills",
    description:
      "Explore backend technologies like Firebase, Node.js, Express, and MongoDB. Learn to build secure APIs with JWT tokens.",
  },
  {
    title: "Practical Application",
    description:
      "Put theory into practice by working on over 45 projects throughout the course.",
  },
  {
    title: "Engaging Learning Approach",
    description:
      "Benefit from a fun and interactive learning strategy developed by Programming Hero, refined to maximize the learning experience.",
  },
];

const FeatureCard = () => {
  return (
   
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "32px",
        color: "white",
      }}
    >
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundColor: "#211c3d",
                borderRadius: "8px",
                padding: "24px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                textAlign: "left",
                height: "80%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center", 
                  justifyContent: "center", 
                  marginBottom: "8px",
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#22C55E",
                    fontSize: "28px",
                    marginRight: "8px", 
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {feature.title}
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureCard;
