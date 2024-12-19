import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "50px",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        placeholder="Enter your email"
        type="email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        sx={{
          flex: 1,
          borderRadius: "50px 0 0 50px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Remove outline
            },
            "&:hover fieldset": {
              border: "none", // Prevent outline on hover
            },
            "&.Mui-focused fieldset": {
              border: "none", // Prevent outline on focus
            },
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          color: "#fff",
          backgroundColor: "#21BF73",
          borderRadius: "0 50px 50px 0",
          padding: "8px 16px", // Reduced padding for smaller width
          fontSize: "1rem",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#1e9e5f",
            transform: "scale(1.05)",
          },
        }}
        onClick={handleSubscribe}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default Newsletter;
