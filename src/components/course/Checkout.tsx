'use client';

import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Avatar,
} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';

interface CheckoutProps {
  id: string;
}

const Checkout: React.FC<CheckoutProps> = ({ id }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: '80px', pb: 5 }}>
      {/* Hero Section */}
      <Box
        sx={{
          p: 3,
          mb: 4,
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          borderRadius: 2,
          color: 'white',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Avatar
              src="https://miro.medium.com/v2/resize:fit:1358/1*W7RrtI7JITRMdo8f7iTioQ.jpeg"
              alt="Course Image"
              variant="square"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Enroll in: Master React in 30 Days
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Unlock the power of React with hands-on projects and expert guidance.
            </Typography>
            <Typography variant="body1" mt={1}>
              <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              Provided by: John Doe
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {/* User Details */}
        <Grid item xs={12} md={8}>
          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                <PaymentIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Your Information
              </Typography>
              <Box component="form" noValidate>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Payment Summary */}
        <Grid item xs={12} md={4}>
          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                <ShoppingCartIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Payment Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Course Price</Typography>
                <Typography>$49.99</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Tax</Typography>
                <Typography>$5.00</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6" fontWeight="bold">
                  Total
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  $54.99
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #6a11cb, #2575fc)',
                }}
              >
                Proceed to Payment
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
