'use client'
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
  Divider,
} from '@mui/material';
interface CheckoutProps {
  id: string;
}
const Checkout: React.FC<CheckoutProps> = ({id}) => {
  console.log(id)
  return (
    <Container maxWidth="md" sx={{ mt: '100px' }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom align="center">
        Checkout {id}
      </Typography>

      {/* Checkout Form */}
      <Grid container spacing={3}>
        {/* User Details */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              User Details
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
              <TextField
                label="Shipping Address"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={3}
                margin="normal"
              />
            </Box>
          </Paper>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Item 1</Typography>
              <Typography>$49.99</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Item 2</Typography>
              <Typography>$69.99</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">$119.98</Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              size="large"
            >
              Proceed to Payment
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
