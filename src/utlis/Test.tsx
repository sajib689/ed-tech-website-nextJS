import { Box, Breadcrumbs, Button, Grid, Typography, Link } from '@mui/material';
import { Star, Schedule, BarChart } from '@mui/icons-material';

const CourseDetail = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
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
            src="https://via.placeholder.com/500" // Replace with your image URL
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

export default CourseDetail;
