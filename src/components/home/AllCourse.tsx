'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import CourseCard from "@/utlis/CourseCard";
import Loader from "@/utlis/Loader";

type Course = {
  id: number;
  courseName: string;
  providerName: string;
  providerTitle: string;
  price: string;
  totalEnrolls?: string;
  providerImage: string;
};

const AllCourse: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/getcourses");
        setCourses(response.data.data); 
      } catch (err: unknown) { // Use 'unknown' for error type
        if (axios.isAxiosError(err)) {
          // Axios-specific error handling
          setError(err.response?.data?.message || "Failed to fetch courses");
        } else {
          // Generic error handling
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Box sx={{ padding: "16px", marginTop: "40px", marginBottom: "40px" }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          color: "rgba(0, 0, 0, 0.55)",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        All Courses List
      </Typography>

      {/* Loading and Error States */}
      {loading && <Loader />}
      {error && (
        <Typography color="error">
          An error occurred: {error}
        </Typography>
      )}

      {/* Course List */}
      {!loading && !error && (
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
      )}
    </Box>
  );
};

export { AllCourse };
