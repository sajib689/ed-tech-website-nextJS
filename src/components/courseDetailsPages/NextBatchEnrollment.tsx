"use client";
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Icon from "@mui/icons-material/Description"; // You can replace icons with MUI icons

const NextBatchEnrollment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#B0EACD", // Dark background color
        color: "black", // Text color
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
          fontSize: "1.5rem",
        }}
      >
        Next Batch Schedule
      </Typography>

      {/* Schedule Details */}
      <Grid container spacing={2} justifyContent="center">
        {[
          {
            label: "Enrollment Starts",
            date: "10 June, 2025",
            icon: <Icon sx={{ color: "#ab47bc", fontSize: 36 }} />,
          },
          {
            label: "Enrollment Ends",
            date: "24 June, 2025",
            icon: <Icon sx={{ color: "#ff7043", fontSize: 36 }} />,
          },
          {
            label: "Orientation Starts",
            date: "28 June, 2025",
            icon: <Icon sx={{ color: "#26c6da", fontSize: 36 }} />,
          },
          {
            label: "Class Starts",
            date: "30 June, 2025",
            icon: <Icon sx={{ color: "#66bb6a", fontSize: 36 }} />,
          },
        ].map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {item.icon}
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                mt: 1,
                mb: 0.5,
                fontSize: "1rem",
              }}
            >
              {item.label}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              {item.date}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Divider */}
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          my: 4,
        }}
      />

      {/* Enroll Section */}
      <Typography
        variant="body2"
        sx={{
          mb: 2,
          fontSize: "1rem",
          color: "black",
        }}
      >
        If You Are Interested To{" "}
        <span style={{ color: "#ff7043", fontWeight: 600 }}>Enroll In 12th Batch</span>, Register On
        The Website
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #7b1fa2, #ab47bc)",
          color: "#ffffff",
          px: 4,
          py: 1,
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": {
            background: "linear-gradient(to right, #6a1b9a, #9c27b0)",
          },
        }}
      >
        Enroll Now
      </Button>
    </Box>
  );
};

export default NextBatchEnrollment;
