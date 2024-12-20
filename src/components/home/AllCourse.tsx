import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Avatar, Button } from "@mui/material";

type Course = {
  id: number;
  courseName: string;
  providerName: string;
  providerTitle: string;
  price: string;
  totalEnrolls?: string;
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <Card
      sx={{
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
      {/* Placeholder for Course Image */}
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300x140"
        alt={course.courseName}
        sx={{ borderRadius: "8px 8px 0 0" }}
      />

      {/* Course Details */}
      <CardContent sx={{ padding: "16px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {course.courseName}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
          <Avatar alt={course.providerName} sx={{ marginRight: "8px" }} />
          <Box>
            <Typography variant="body1">{course.providerName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {course.providerTitle}
            </Typography>
          </Box>
        </Box>
        {course.totalEnrolls && (
          <Typography variant="body2" sx={{ marginTop: "8px", color: "text.secondary" }}>
            {course.totalEnrolls} learners enrolled
          </Typography>
        )}
      </CardContent>

      {/* Course Price and Enroll Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "16px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#21BF73" }}>
          ${course.price}
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#21BF73", color: "white" }} size="small">
          Enroll Now
        </Button>
      </Box>
    </Card>
  );
};

const AllCourse: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      courseName: "Master on Git and GitHub",
      providerName: "Rabbil Hasan",
      providerTitle: "Software Engineering Manager",
      price: "500",
      totalEnrolls: "41",
    },
    {
      id: 2,
      courseName: "Master on Python Programming",
      providerName: "Rabbil Hasan",
      providerTitle: "Software Engineering Manager",
      price: "500",
      totalEnrolls: "888",
    },
    {
      id: 3,
      courseName: "Software Engineering Techniques",
      providerName: "Rabbil Hasan",
      providerTitle: "Software Engineering Manager",
      price: "500",
    },
    {
        id: 4,
        courseName: "Advanced JavaScript Techniques",
        providerName: "Sarah Williams",
        providerTitle: "Frontend Developer",
        price: "299",
        totalEnrolls: "1,200",
      }
      
  ];

  return (
    <Box sx={{ padding: "16px", marginTop: "40px", marginBottom: "40px" }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        Suggested Courses
      </Typography>

      {/* Course List */}
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "13px",
        }}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Box>
    </Box>
  );
};

export { AllCourse };
