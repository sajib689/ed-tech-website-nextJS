"use client";
import { Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <Box
      data-aos="fade-right"
      sx={{
        position: "relative",
        backgroundImage: `url('/assets/images/bg-banner.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 64px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: "20px",
        overflow: "hidden",
        boxSizing: "border-box",

        "@media (max-width: 768px)": {
          backgroundPosition: "center",
          height: "auto",
          paddingRight: "15px",
        },
      }}
    >
      <Box
        data-aos="fade-right"
        sx={{
          zIndex: 1,
          textAlign: "right",
          maxWidth: "100%",
          paddingRight: "20px",
          boxSizing: "border-box",
          "@media (max-width: 768px)": {
            textAlign: "center",
            paddingRight: "15px",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2.5rem", sm: "6rem" },
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Learn Code
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mt: 2,
            fontSize: { xs: "1rem", sm: "1.25rem" },
            textAlign: { xs: "center", sm: "right" },
            color: "#000",
          }}
        >
          If you don&apos;t want to do it, &quot;loss&quot;? Hold <br /> onto
          the to-do list and become the <br />
          &quot;boss.&quot; Learn with confidence, <br /> success is in your
          search.
        </Typography>
        <Button variant="contained"
          sx={{
            marginTop: 2,
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            "&:hover": {
              backgroundColor: "linear-gradient(to right, #6a11cb, #2575fc)",
            },
          }}>Go Now</Button>
      </Box>
    </Box>
  );
};

export default Banner;
