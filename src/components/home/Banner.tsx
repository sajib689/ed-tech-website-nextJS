'use client'
import { Typography, Box } from "@mui/material";
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
            color: "#21BF73",
            fontSize: { xs: "2.5rem", sm: "6rem" },
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
          }}
        >
          If you don&apos;t want to do it, &quot;loss&quot;?
          Hold <br /> onto the to-do list and become the <br />
          &quot;boss.&quot; Learn with confidence, <br /> success is in your search.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
