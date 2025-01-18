'use client';

import React from 'react';
import { Box, Typography, Button, Avatar, CardMedia } from '@mui/material';

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
          image={course.image}
          alt={course.title}
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
            {course.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: '24px', lineHeight: 1.6 }}
          >
            {course.description}
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
              src={course.instructor.image}
              alt={course.instructor.name}
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
                {course.instructor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.instructor.title}
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
