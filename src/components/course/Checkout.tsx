"use client";

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
  Alert,
  CircularProgress,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SchoolIcon from "@mui/icons-material/School";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";
import Loader from "@/utlis/Loader";
import useUserByEmail from "@/hooks/useUserByEmail";

interface CheckoutProps {
  id: string;
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
}

const Checkout: React.FC<CheckoutProps> = ({ id }) => {
  // Fetch course data
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
  const authContext = useContext(AuthContext);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  if (!authContext) {
    return <Loader />; 
  }

  const { user } = authContext;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { userData, loadings: userLoading, errors: userError } = useUserByEmail(
    user?.email || ""
  );

  const handlePayment = async () => {
    if (!userData?.number || !course) {
      setError("Please complete all fields.");
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.post("http://localhost:5000/api/v1/init", {
        id: course.id,
        courseName: course.courseName,
        name: userData.name,
        email: userData.email,
        phone: userData.number,
        amount: Number(course.price) + 5,
        address: "User Address", 
        city: "User City", 
        country: "User Country", 
      });
      if (response.data?.url) {
        window.open(response.data.url, "_blank");

        // window.location.href = response.data.url;
      } else {
        setError("Payment initiation failed. Please try again.");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An error occurred. Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  // Loading state
  if (loading || userLoading) {
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

  // Error state
  if (error || userError) {
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
        <Alert severity="error">{error || userError}</Alert>
      </Box>
    );
  }

  // No course found
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
    <Container maxWidth="lg" sx={{ mt: "100px", pb: 5 }}>
      {/* Hero Section */}
      <Box
        sx={{
          p: 3,
          mb: 4,
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          borderRadius: 2,
          color: "white",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Avatar
              src={course?.courseImage}
              alt="Course Image"
              variant="square"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {course?.courseName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {course?.whatYouWillLearn}
            </Typography>
            <Typography variant="body1" mt={1}>
              <SchoolIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              Provided by: {course?.providerName}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {/* User Details */}
        <Grid item xs={12} md={8}>
  <Card
    elevation={4}
    sx={{
      borderRadius: 3,
      background: "linear-gradient(to right, #6a11cb, #2575fc)", // Gradient background
      color: "white", // Card text color
    }}
  >
    <CardContent>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        <PaymentIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Your Information
      </Typography>
      <Box component="form" noValidate>
        <TextField
          label="Full Name"
          value={userData?.name || ""}
          variant="outlined"
          fullWidth
          required
          margin="normal"
          
          InputLabelProps={{
            style: { color: "white" }, // Label color
          }}
          InputProps={{
            style: {
              color: "white", // Text color
              borderColor: "white", // Border color
            },
          }}
        />
        <TextField
          label="Email Address"
          value={userData?.email || ""}
          variant="outlined"
          fullWidth
          required
          margin="normal"
          
          InputLabelProps={{
            style: { color: "white" }, // Label color
          }}
          InputProps={{
            style: {
              color: "white", // Text color
              borderColor: "white", // Border color
            },
          }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={userData?.number || ""}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            style: { color: "white" }, // Label color
          }}
          InputProps={{
            style: {
              color: "white", // Text color
              borderColor: "white", // Border color
            },
          }}
        />
      </Box>
    </CardContent>
  </Card>
</Grid>


        {/* Payment Summary */}
        <Grid item xs={12} md={4}>
          <Card elevation={4} sx={{ borderRadius: 3, background: "linear-gradient(to right, #6a11cb, #2575fc)", // Gradient background
        color: "white",  }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                <ShoppingCartIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                Payment Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Course Price</Typography>
                <Typography>${course?.price || 0}</Typography>
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
                  ${course?.price + 5 || 0}
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
    fontWeight: "bold",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
  }}
  onClick={handlePayment}
  disabled={loading}
>
  {loading ? "Processing..." : "Proceed to Payment"}
</Button>

            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
