"use client";

import { Box,Typography } from "@mui/material";

const WhatYouLearn = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#B0EACD",
        color: "black",
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
          fontSize: "2rem",
        }}
      >
        What you will learn_ from this course?

      </Typography>
    </Box>
  );
};

export default WhatYouLearn;
