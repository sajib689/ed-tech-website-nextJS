import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const courseDetails = [
  {
    title: "Module Release Time",
    description:
      "Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart students may trick our system to get module access 2 hours earlier than everyone else.",
  },
  {
    title: "Watch Time Duration",
    description:
      "A full module has approximately 10 videos (each video 12-14 min). You have to spend 4-5 hours watching, practicing the contents. We recommend allocating 6-8 hours everyday for this course.",
  },
  {
    title: "Search Similar Topic Online",
    description:
      "Keep 1-2 hours everyday to clear your doubts from Google, or using our support system. If you do not have any doubts, we recommend you search the similar topic of the module online.",
  },
  {
    title: "Live Conceptual Session",
    description:
      "You will have a practice day after every 2-4 modules. And there will be a conceptual session on that practice day. We highly recommend our students to join the live conceptual session.",
  },
  {
    title: "Assignment Submit",
    description:
      "After every 4-7 modules, you will have an assignment. Finish the assignment on time to be considered for 60 marks. Late submissions will receive reduced marks.",
  },
  {
    title: "SCIC",
    description:
      "If you finish our main course on time with good marks, you will qualify for the SCIC. You will have to stay focused and dedicated to finish the course on time.",
  },
  {
    title: "Support Session",
    description:
      "We will answer every question related to our course within 10 hours. Also, you may join our live support session three times in a day (Friday morning there won't be any live support session).",
  },
  {
    title: "20 Week Course",
    description:
      "We believe there is no shortcut other than hard work. Be committed to invest 6-8 hours every single day for the next 20 weeks to finish our main course on time.",
  },
];

const CourseDetailsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0A1929",
        color: "white",
        padding: "40px",
        maxHeight: "600px",
        overflowY: "auto",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        scrollbarWidth: "thin",
        scrollbarColor: "#8E2DE2 transparent",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#8E2DE2",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}>
        How Will This Course Work?
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: "center", maxWidth: "600px", mx: "auto" }}>
        This course guides you from basics to mastering the MERN stack with step-by-step lessons, hands-on projects, and assessments.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundImage: "linear-gradient(90deg, #8E2DE2, #4A00E0)",
          mb: 4,
          px: 4,
          py: 1.5,
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      >
        Enroll Now
      </Button>
      <Box sx={{ display: "grid", gap: "16px", gridTemplateColumns: "1fr" }}>
        {courseDetails.map((detail, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#111927",
              color: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                transform: "scale(1.02)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5, fontWeight: "bold" }}>
                {detail.title}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                {detail.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CourseDetailsSection;
