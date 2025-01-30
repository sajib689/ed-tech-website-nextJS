'use client'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Alert,
  CircularProgress,
} from "@mui/material";
import { PlayCircleOutline, CheckCircleOutline } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

const MyClass = ({ id }: { id: string }) => {
  interface Course {
    id: string;
    courseName: string;
    courseCategory: string;
    courseType: string;
    courseImage: string;
    price: number;
    providerName: string;
    providerImage: string;
    providerTitle: string;
    duration: string;
    level: string;
    courseLevel: string;
    statistics: {
      coursesCreated: number;
      workshopsAttended: number;
      personsMentored: number;
      webinarHosted: number;
    };
    courseDuration: number;
    rating: number;
    whatYouWillLearn: string;
  }

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/getcourse/${id}`
        );
        setCourse(response.data.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Failed to fetch the course");
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#f4f4f4",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#f8d7da",
        }}
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!course) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#fff",
        }}
      >
        <Typography variant="h6">No course found.</Typography>
      </Box>
    );
  }

  const modules = [
    { title: "Introduction to Mathematics", completed: true },
    { title: "Algebra Basics", completed: false },
    { title: "Geometry Fundamentals", completed: false },
    { title: "Advanced Calculus", completed: false },
    { title: "Statistics and Probability", completed: false },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f4f5f7",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          color: "#333",
          fontWeight: "700",
          marginBottom: 5,
        }}
      >
        My Class
      </Typography>
      <Grid container spacing={4}>
        {/* Video Section */}
        <Grid item xs={12} md={7}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>

        {/* Modules Section */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              padding: 3,
              backgroundColor: "white",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  color: "#333",
                  marginBottom: 2,
                }}
              >
                Class Modules
              </Typography>
              <List>
                {modules.map((module, index) => (
                  <ListItem
                    key={index}
                    disableGutters
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                      padding: "10px 15px",
                      borderRadius: 2,
                      backgroundColor: module.completed
                        ? "rgba(34, 197, 94, 0.1)"
                        : "rgba(99, 102, 241, 0.1)",
                      "&:hover": {
                        backgroundColor: module.completed
                          ? "rgba(34, 197, 94, 0.2)"
                          : "rgba(99, 102, 241, 0.2)",
                      },
                    }}
                  >
                    <ListItemIcon>
                      {module.completed ? (
                        <CheckCircleOutline sx={{ color: "#22c55e" }} />
                      ) : (
                        <PlayCircleOutline sx={{ color: "#6366f1" }} />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={module.title}
                      primaryTypographyProps={{
                        fontWeight: module.completed ? "600" : "500",
                        color: module.completed ? "#22c55e" : "#333",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  marginTop: 3,
                  backgroundColor: "#6366f1",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 15px",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "#4f46e5",
                  },
                }}
              >
                Start Next Module
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyClass;
