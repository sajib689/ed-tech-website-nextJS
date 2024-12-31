import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const CourseBanner = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        color: "black",
        textAlign: "center",
        py: 8,
        px: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 3,
          marginTop: "45px",
        }}
      >
        Breakthroughs Begin With Learning, <br />
        Reach For The Future You Deserve
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: "700px",
          mx: "auto",
          mb: 5,
        }}
      >
        Master MongoDB, Express, React, and Node.js to build efficient,
        full-stack web applications from scratch. Connect front-end and
        back-end seamlessly for a smooth user experience.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* HTML Icon */}
        <Grid item>
          <Box
            component="img"
            src="/assets/images/html.png"
            alt="HTML Icon"
            sx={{
              width: 50,
              height: 50,
              filter: "drop-shadow(0 0 8px #ff00ff)",
            }}
          />
        </Grid>
        {/* React Icon */}
        <Grid item>
          <Box
            component="img"
            src="/assets/images/react.png"
            alt="React Icon"
            sx={{
              width: 50,
              height: 50,
              filter: "drop-shadow(0 0 8px #ff00ff)",
            }}
          />
        </Grid>
        {/* Tailwind Icon */}
        <Grid item>
          <Box
            component="img"
            src="/assets/images/tailwind.png"
            alt="Tailwind Icon"
            sx={{
              width: 50,
              height: 50,
              filter: "drop-shadow(0 0 8px #ff00ff)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseBanner;
