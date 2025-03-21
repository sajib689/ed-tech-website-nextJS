"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
  Button,
} from "@mui/material";

type Course = {
  _id: string;
  id: number;
  courseName: string;
  providerName: string;
  providerTitle: string;
  price: string;
  totalEnrolls?: string;
  providerImage: string;
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "300px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
        },
      }}
    >
      {/* Course Image */}
      <CardMedia
        component="img"
        height="140"
        image={course?.providerImage} 
        alt={course?.courseName}
        sx={{ borderRadius: "8px 8px 0 0" }}
      />

      {/* Course Details */}
      <CardContent sx={{ padding: "16px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold",color: "white",}}>
          {course?.courseName}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
          <Avatar
            alt={course?.providerName}
            src={course?.providerImage}
            sx={{ marginRight: "8px" }}
          />
          <Box>
            <Typography variant="body1">{course?.providerName}</Typography>
            <Typography variant="body2" color="white">
              {course?.providerTitle}
            </Typography>
          </Box>
        </Box>
        {course.totalEnrolls && (
          <Typography
            variant="body2"
            sx={{ marginTop: "8px", color: "white" }}
          >
            {course.totalEnrolls} learners enrolled
          </Typography>
        )}
      </CardContent>

      {/* Course Price and Enroll Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold",
            // background: "linear-gradient(to right, #6a11cb, #2575fc)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent", 
            color: "white",
            }}>
          ${course.price}
        </Typography>
        <Button
          href={course._id ? `/view_course/${course._id}` : "#"}
          variant="contained"
          sx={{ background: "linear-gradient(to right, #6a11cb, #2575fc)",
            color: "white",fontWeight: "bold" }}
          size="small"
        >
          Enroll Now
        </Button>
      </Box>
    </Card>
  );
};

export default CourseCard;
