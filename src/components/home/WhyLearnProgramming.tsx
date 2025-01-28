import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const WhyLearnProgramming = () => {
  const listItems = [
    "Industry Standard Learning",
    "Hands-On Guidelines",
    "Data-Driven Learning Material",
    "Community Contribution and Support",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 4,
        marginTop: "40px",
      }}
    >
      {/* Left Section - List */}
      <Box sx={{ flex: 1, paddingRight: 2 }}>
      <List>
  {listItems.map((item, index) => (
    <ListItem key={index}>
      <ListItemIcon>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
          }}
        >
          <CheckCircleIcon
            sx={{
              color: "white", // Icon color to stand out against the gradient background
              fontSize: "20px",
            }}
          />
        </Box>
      </ListItemIcon>
      <ListItemText primary={item} />
    </ListItem>
  ))}
</List>

      </Box>

      {/* Right Section - Text */}
      <Box sx={{ flex: 1, paddingLeft: 2 }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            color: '#fff'
            // background: "linear-gradient(to right, #6a11cb, #2575fc)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          Be Prepared for a New Era of Learning
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          In today&apos;s digital age, programming is one of the most essential
          skills. Without programming, it&apos;s impossible to develop websites,
          apps, or smart solutions. A strong foundation in this skill can open
          many doors for you, from creating mobile apps to web applications or
          even a career in AI.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          This section introduces how to become an expert programmer and
          emphasizes building problem-solving skills, teamwork, and a
          forward-looking mindset.
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            "&:hover": {
              backgroundColor: "linear-gradient(to right, #6a11cb, #2575fc)",
            },
          }}
        >
          Learn More...
        </Button>
      </Box>
    </Box>
  );
};

export default WhyLearnProgramming;
