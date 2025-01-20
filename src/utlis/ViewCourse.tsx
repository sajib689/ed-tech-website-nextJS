"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Typography,
  Link,
  CircularProgress,
  Alert,
  ListItemText,
  ListItem,
  ListItemIcon,
  List,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";
import {
  Star,
  Schedule,
  BarChart,
  ArrowRight,
  Computer,
  CalendarToday,
} from "@mui/icons-material";

const ViewCourse = ({ id }: { id: string }) => {
  interface Course {
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

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          paddingTop: "120px",
          paddingLeft: "100px",
          minHeight: "100vh",
        }}
      >
        {/* Breadcrumb Navigation */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "0px" }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/courses">
            Courses
          </Link>
          <Typography color="text.primary" bgcolor="yellow">
            Course Detail
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <BarChart fontSize="small" /> {course?.courseLevel}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Star fontSize="small" sx={{ color: "#fdd835" }} /> {course?.rating}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Schedule fontSize="small" /> {course?.courseDuration}
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", marginBottom: "16px" }}
              >
                {course?.courseName}
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "#333", fontWeight: "bold", marginBottom: "16px" }}
              >
                ${course?.price}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#333",
                  color: "#fff",
                  textTransform: "none",
                  padding: "10px 20px",
                  "&:hover": { backgroundColor: "#555" },
                }}
              >
                Get Course
              </Button>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={course.courseImage}
              alt="Course"
              sx={{
                width: "100%",
                borderRadius: "8px",
                border: "8px solid #fdd835",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* What you Learn Section */}
      <Box sx={{ padding: "40px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "24px" }}
        >
          What You Will Learn
        </Typography>

        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <List>
              {[
                "Fermentum iaculis eu non diam phasellus vestibulum.",
                "Porta non pulvinar neque laoreet suspendisse. Justo nec ultrices dui sapien proin sed libero.",
                "At consectetur lorem donec massa sapien. Pulvinar sapien et ligula ullamcorper malesuada proin.",
                "Quisque id diam vel quam elementum pulvinar. Eget felis eget nunc lobortis mattis aliquam faucibus purus.",
              ].map((text, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ color: "#fdd835", minWidth: "32px" }}>
                    <ArrowRight />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} container spacing={4}>
            {/* Course Format Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: 3, borderRadius: "8px" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <Computer fontSize="large" /> Course Format
                  </Typography>
                  <List>
                    {[
                      "Video Tutorials",
                      "Checking the Task",
                      "Pulvinar sapien",
                      "Software",
                    ].map((item, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon
                          sx={{ color: "#fdd835", minWidth: "32px" }}
                        >
                          <ArrowRight />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Duration Course Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: 3, borderRadius: "8px" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <CalendarToday fontSize="large" /> Duration Course
                  </Typography>
                  <List>
                    {[
                      `Courses Created: ${
                        course?.statistics?.coursesCreated || "N/A"
                      } Weeks`,
                      `Workshops Attended: ${
                        course?.statistics?.workshopsAttended || "N/A"
                      }`,
                      `Persons Mentored: ${
                        course?.statistics?.personsMentored || "N/A"
                      }`,
                      `Webinar: ${course?.statistics?.webinarHosted || "N/A"}`,
                    ].map((stat, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon
                          sx={{ color: "#fdd835", minWidth: "32px" }}
                        >
                          <ArrowRight />
                        </ListItemIcon>
                        <ListItemText primary={stat} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Instructors section */}
      <Box sx={{ padding: "40px", backgroundColor: "#fff",marginBottom:"100px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "24px" }}
        >
          Course Instructor
        </Typography>

        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{ borderRadius: "8px", overflow: "hidden", boxShadow: 3 }}
            >
              <CardMedia
                component="img"
                alt="Instructor"
                image={course?.providerImage}
                sx={{ height: "100%" }}
              />
            </Card>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {course?.providerName}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "gray", marginBottom: "16px" }}
            >
              {course?.providerTitle} / Mentor
            </Typography>

            {/* Info Row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Schedule fontSize="small" /> {course?.courseDuration}
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Star fontSize="small" sx={{ color: "#fdd835" }} /> {course?.rating}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{ color: "gray", marginBottom: "24px" }}
            >
             {course?.whatYouWillLearn}
            </Typography>

            {/* Statistics Row */}
            <Grid container spacing={4}>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#212121" }}
                >
                  45+
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Persons Mentored
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#212121" }}
                >
                  10+
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Workshops Attended
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#212121" }}
                >
                  10+
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Courses Created
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ViewCourse;
