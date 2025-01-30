"use client";
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
import { PlayCircleOutline } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

interface CourseVideo {
  id: string;
  title: string;
  url: string;
}

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
  videoLinks: CourseVideo[];
}

const getYouTubeId = (url: string) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const MyClass = ({ id }: { id: string }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/getcourse/${id}`
        );
        setCourse(response.data.data);

        // Set the first video as default if videoLinks exist
        if (response.data.data.videoLinks.length > 0) {
          setSelectedVideo(response.data.data.videoLinks[0].url);
        }
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
          marginTop: "100px",
          textAlign: "left",
        }}
      >
        {course?.courseName}
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
            {selectedVideo ? (
              <iframe
                width="100%"
                height="50%"
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  selectedVideo
                )}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Typography variant="h6" align="center" sx={{ padding: 3 }}>
                Select a video to play
              </Typography>
            )}
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
                {course?.videoLinks?.map((video) => (
                  <ListItem
                    key={video?.id}
                    disableGutters
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                      padding: "10px 15px",
                      borderRadius: 2,
                      backgroundColor:
                        selectedVideo === video?.url
                          ? "rgba(99, 102, 241, 0.2)"
                          : "rgba(99, 102, 241, 0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(99, 102, 241, 0.3)",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => setSelectedVideo(video?.url)}
                  >
                    <ListItemIcon>
                      <PlayCircleOutline sx={{ color: "#6366f1" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={video?.title}
                      primaryTypographyProps={{
                        fontWeight:
                          selectedVideo === video?.url ? "600" : "500",
                        color:
                          selectedVideo === video?.url ? "#4f46e5" : "#333",
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
