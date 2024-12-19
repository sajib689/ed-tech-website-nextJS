import React from "react";
import { Typography, Box } from "@mui/material";

const Banner = () => {
  return (
    <Box
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
        overflow: "hidden", // Prevent overflow
        boxSizing: "border-box", // Ensures that padding doesn't cause overflow
      }}
    >
      <Box 
        sx={{ 
          zIndex: 1, 
          textAlign: "right", 
          maxWidth: "100%", // Ensure text container doesn't exceed the width
          paddingRight: "20px", // Add some space between the edge and text
          boxSizing: "border-box", // To account for padding within width
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 700, color: '#21BF73' }}>
          Learn Code
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          If you don&apos;t want to do it, &quot;loss&quot;?
          Hold <br /> onto the to-do list and become the <br />
          &quot;boss.&quot; Learn with confidence, <br /> success is in your search.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
