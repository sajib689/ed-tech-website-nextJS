"use client";

import { Box, Typography } from "@mui/material";

const WhatYouLearn = () => {
  const skills = [
    { name: "HTML", color: "rgb(241, 101, 41)" },
    { name: "CSS", color: "#1572B6" },
    { name: "Tailwind", color: "#07B6D5" },
    { name: "JavaScript", color: "#F7E018" },
    { name: "React", color: "#61DAFB" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "Node JS", color: "#3C873A" },
    { name: "Express JS", color: "#000000" },
    { name: "MongoDB", color: "#47A248" },
  ];

  return (
    <Box
      sx={{
        
        color: "white",
        textAlign: "center",
        py: 4,
        px: 2,
        maxWidth: "100%",
        mx: "auto",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        What you will learn_ from this course?
      </Typography>

      {/* Skill Tags */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
          padding: 2,
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              padding: "8px 16px",
              background: `linear-gradient(to right, ${skill.color}, #000000)`,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                background: `linear-gradient(to right, ${skill.color}, #6a11cb)`,
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhatYouLearn;
