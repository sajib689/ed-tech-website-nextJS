"use client";

import { AuthContext } from "@/context/AuthProvider";
import Loader from "@/utlis/Loader";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

interface ClassItem {
  courseName: string;
}

interface Course {
  _id: string;
  courseName: string;
  courseImage: string;
  courseCategory: string;
}

const ClassList = () => {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Loader />;
  }
// user data
  const { user } = authContext;

  useEffect(() => {
    if (!user?.email) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [paymentRes, coursesRes] = await Promise.all([
          axios.get<{ payment: ClassItem[] }>(
            `http://localhost:5000/api/v1/paymenthistory/${user?.email}`
          ),
          axios.get<Course[]>(`http://localhost:5000/api/v1/getcourses`),
        ]);

        setClasses(paymentRes.data.payment || []);
        setCourses(
          Array.isArray(coursesRes.data.data) ? coursesRes.data.data : []
        );
      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  const filteredCourses = courses.filter((course) =>
    classes.some((cls) => cls.courseName === course.courseName)
  );

  return (
    <Container maxWidth="lg" sx={{ mt: "120px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome back {user?.displayName || user?.email},<br /> ready for your
        next lesson?
      </Typography>
      <Typography variant="h4" gutterBottom>
        My Enrolled Classes
      </Typography>

      {filteredCourses.length === 0 ? (
        <Typography color="textSecondary">
          No classes found for the enrolled courses.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {filteredCourses?.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={course?.courseName}
                  height="140"
                  image={course?.courseImage}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course?.courseName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {course?.courseCategory}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  href={`/my_classes/${course?._id}`}
                  sx={{
                    background: "linear-gradient(to right, #6a11cb, #2575fc)",
                    color: "white",
                    fontWeight: "bold",
                    margin: "10px",
                  }}
                  size="small"
                >
                  Continue Course
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ClassList;
