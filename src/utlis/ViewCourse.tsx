'use client';
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Avatar,
  CardContent,
  CardMedia,
} from '@mui/material'
const ViewCourse = ({ id }: { id: string }) => {
    const course = {
        title: 'React Mastery',
        description:
          'Learn React from scratch and build scalable, performant applications with hands-on projects.',
        price: '49.99',
        instructor: {
          name: 'John Doe',
          image: 'https://via.placeholder.com/150',
          title: 'Senior Frontend Developer',
        },
        image: 'https://via.placeholder.com/600x300',
      };
    return (
        <Box
        sx={{
          maxWidth: '800px',
          margin: 'auto',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Course Image */}
        <CardMedia
          component="img"
          image={course.image}
          alt={course.title}
          sx={{ borderRadius: '10px', marginBottom: '20px' }}
        />
  
        {/* Course Content */}
        <CardContent>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', marginBottom: '10px' }}
          >
            {course.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: '20px' }}
          >
            {course.description}
          </Typography>
  
          {/* Instructor Details */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '15px',
            }}
          >
            <Avatar
              src={course.instructor.image}
              alt={course.instructor.name}
              sx={{ width: '60px', height: '60px' }}
            />
            <Box>
              <Typography variant="h6">{course.instructor.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {course.instructor.title}
              </Typography>
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
              sx={{ fontWeight: 'bold', color: '#21BF73' }}
            >
              ${course.price}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#21BF73',
                color: 'white',
                '&:hover': { backgroundColor: '#1e9e63' },
              }}
              size="large"
            >
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Box>
  );
};

export default ViewCourse;
