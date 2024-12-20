import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import {
  LocationOn,
  Email,
  Phone,
  Facebook,
  YouTube,
  Twitter,
} from "@mui/icons-material";

const ContactForm = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        padding: 4,
        marginTop: "40px",
        alignItems: "stretch",
        marginBottom: "40px",
      }}
    >
      {/* Contact Form Section */}
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
            height: "100%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '600', color: 'rgba(0, 0, 0, 0.55)',
              marginBottom: 4,
              padding: "10px",
              backgroundImage: `url('/assets/images/section-title-bg.svg')`,
              backgroundRepeat: "no-repeat",
            }}
          >
            Contact Us
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            }}
          >
            <TextField
              label="Your Name"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <TextField
              label="Email Address"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <TextField
              label="Phone Number"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <TextField
              label="Subject"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{
                gridColumn: "span 2",
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                gridColumn: "span 2",
                backgroundColor: "#21BF73",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#1aa965" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Card>
      </Grid>

      {/* Contact Info Section */}
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            backgroundColor: "#21BF73",
            color: "white",
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            height: "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", marginBottom: 2, backgroundImage: `url('/assets/images/section-title-bg.svg')`,
                backgroundRepeat: "no-repeat",  }}
            >
              Information
            </Typography>
            <Box sx={{ marginBottom: 3 }}>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <LocationOn fontSize="small" />
                <Typography>
                  <strong>Location:</strong> Jashore, Bangladesh
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Email fontSize="small" />
                <Typography>
                  <strong>Email:</strong> info@learncode.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Phone fontSize="small" />
                <Typography>
                  <strong>Phone:</strong> +8801611-970979
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
              Follow Us
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton
                sx={{
                  color: "white",
                  backgroundColor: "#1aa965",
                  "&:hover": { backgroundColor: "#188d5e" },
                }}
                href="#"
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  backgroundColor: "#1aa965",
                  "&:hover": { backgroundColor: "#188d5e" },
                }}
                href="#"
              >
                <YouTube />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  backgroundColor: "#1aa965",
                  "&:hover": { backgroundColor: "#188d5e" },
                }}
                href="#"
              >
                <Twitter />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
