'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Avatar, CardMedia, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

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
  }
  
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/getcourse/${id}`);
        setCourse(response.data.data); // Assuming the course data is in `response.data.data`
        console.log(response.data.data);
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h6">No course found.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        maxWidth: '1200px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        marginTop: '100px',
        marginBottom: '100px',
      }}
    >
      {/* Left Side: Course Banner */}
      <Box
        sx={{
          flex: 1,
          marginRight: { md: '20px' },
          marginBottom: { xs: '20px', md: '0' },
        }}
      >
        <CardMedia
          component="img"
          image={course.courseImage}
          alt={course.courseName}
          sx={{
            borderRadius: '12px',
            width: '100%',
            height: 'auto',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.03)',
            },
          }}
        />
      </Box>

      {/* Right Side: Course Details */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#333',
            }}
          >
            {course.courseName}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: '24px', lineHeight: 1.6 }}
          >
            Category: {course.courseCategory} | Type: {course.courseType}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
              gap: '16px',
            }}
          >
            <Avatar
              src={course.providerImage}
              alt={course.providerName}
              sx={{
                width: '70px',
                height: '70px',
                border: '2px solid #21BF73',
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: '500', color: '#444' }}
              >
                {course.providerName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.providerTitle}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Price and Buy Now Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#21BF73',
            }}
          >
            ${course.price}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#21BF73',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '8px',
              transition: 'background-color 0.3s ease',
              '&:hover': { backgroundColor: '#1e9e63' },
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewCourse;
