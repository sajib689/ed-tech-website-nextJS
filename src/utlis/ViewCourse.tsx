'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Breadcrumbs, Button, Grid, Typography, Link, CircularProgress, Alert } from '@mui/material';
import { Star, Schedule, BarChart } from '@mui/icons-material';

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
    rating: number;
    duration: string;
    level: string;
  }

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/getcourse/${id}`);
        setCourse(response.data.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Failed to fetch the course');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#f4f4f4' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#f8d7da' }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!course) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#fff' }}>
        <Typography variant="h6">No course found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '20px',paddingTop: '120px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
          {/* Breadcrumb Navigation */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '20px' }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/courses">
              Courses
            </Link>
            <Typography color="text.primary">Course Detail</Typography>
          </Breadcrumbs>
    
          <Grid container spacing={4} alignItems="center">
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <BarChart fontSize="small" /> Beginner
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Star fontSize="small" sx={{ color: '#fdd835' }} /> 4.7
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Schedule fontSize="small" /> 120 Hours
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
                  Introduction to User Experience Design
                </Typography>
                <Typography variant="h4" sx={{ color: '#333', fontWeight: 'bold', marginBottom: '16px' }}>
                  $18.99
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#333',
                    color: '#fff',
                    textTransform: 'none',
                    padding: '10px 20px',
                    '&:hover': { backgroundColor: '#555' },
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
                  width: '100%',
                  borderRadius: '8px',
                  border: '8px solid #fdd835',
                  objectFit: 'cover',
                }}
              />
            </Grid>
          </Grid>
        </Box>
  );
};

export default ViewCourse;
