import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Button,
} from "@mui/material";

// Define the type for the course prop
type Course = {
  id: number;
  courseImage: string;
  courseName: string;
  providerName: string;
  providerImage: string;
  providerTitle: string;
  price: string;
  totalEnrolls: string;
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
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* Course Image */}
      <CardMedia
        component="img"
        height="140"
        image={course?.courseImage}
        alt={course?.courseName}
        sx={{ borderRadius: "8px 8px 0 0" }}
      />

      {/* Course Details */}
      <CardContent sx={{ padding: "16px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {course?.courseName}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
          <Avatar
            src={course?.providerImage}
            alt={course?.providerName}
            sx={{ marginRight: "8px" }}
          />
          <Box>
            <Typography variant="body1">{course?.providerName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {course?.providerTitle}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ marginTop: "8px", color: "text.secondary" }}
        >
          {course.totalEnrolls} learners enrolled
        </Typography>
      </CardContent>

      {/* Course Price and Enroll Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ${course?.price}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "linear-gradient(to right, #6a11cb, #2575fc)",
            color: "white",
            fontWeight: "bold",
          }}
          size="small"
        >
          Enroll Now
        </Button>
      </Box>
    </Card>
  );
};

const CourseList: React.FC = () => {
  const fakeData: Course[] = [
    {
      id: 1,
      courseImage:
        "https://miro.medium.com/v2/resize:fit:1358/1*W7RrtI7JITRMdo8f7iTioQ.jpeg",
      courseName: "Master React in 30 Days",
      providerName: "John Doe",
      providerImage:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      providerTitle: "Senior Developer",
      price: "49.99",
      totalEnrolls: "1,245",
    },
    {
      id: 2,
      courseImage:
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      courseName: "Advanced Node.js Techniques",
      providerName: "Jane Smith",
      providerImage:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      providerTitle: "Software Architect",
      price: "69.99",
      totalEnrolls: "980",
    },
    {
      id: 3,
      courseImage:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230706133033/An-introduction-to-Machine-Learning-01.webp",
      courseName: "Intro to Machine Learning",
      providerName: "Mike Johnson",
      providerImage:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      providerTitle: "Data Scientist",
      price: "89.99",
      totalEnrolls: "1,745",
    },
    {
      id: 4,
      courseImage:
        "https://s3.ap-southeast-1.amazonaws.com/uplyrn.com/uploads%2F0000%2F50%2F2022%2F10%2F11%2Fthe-ultimate-2022-full-stack-web-development-bootcamp-uplyrn.webp",
      courseName: "Full-Stack Web Development Bootcamp",
      providerName: "Emily Davis",
      providerImage:
        "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
      providerTitle: "Full-Stack Engineer",
      price: "99.99",
      totalEnrolls: "2,300",
    },
  ];

  return (
    <Box sx={{ padding: "16px", marginTop: "40px", marginBottom: "40px" }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          color: "rgba(0, 0, 0, 0.55)",
          textAlign: "left",
          marginBottom: "50px",
          marginTop: "24px",
          marginLeft: "24px",
        }}
      >
        All Top Courses
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
        {fakeData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Box>
    </Box>
  );
};

export { CourseList };
