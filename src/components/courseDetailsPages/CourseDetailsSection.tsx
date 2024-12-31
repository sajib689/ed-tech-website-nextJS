import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

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
        backgroundColor: "#B0EACD",
        color: "#000",
        padding: "40px",
      }}
    >
      <Grid container spacing={4}>
        {/* Details Section */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
              How Will This Course Work?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              This course guides you from basics to mastering the MERN stack
              with step-by-step lessons, hands-on projects, and assessments.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#21BF73",
                px: 4,
                py: 1.5,
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "8px",
                "$:hover": {
                  backgroundColor: "#1E9E5F"
                }
              }}
            >
              Enroll Now
            </Button>
          </Box>
        </Grid>

        {/* Card Scrolling Section */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              maxHeight: "500px",
              overflowY: "auto",
              padding: "20px",
              backgroundColor: "#111927",
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
            {courseDetails.map((detail, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: "#1A202C",
                  color: "white",
                  marginBottom: "16px",
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseDetailsSection;
