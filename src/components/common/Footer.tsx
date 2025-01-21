"use client";

import { Box, Typography, Container, Grid, IconButton } from "@mui/material";
import {
  Code,
  FlutterDash,
  GitHub,
  Language,
  LocationOn,
} from "@mui/icons-material";
import Image from "next/image";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <Box
      sx={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)', color: "white", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              About Us
            </Typography>
            <Typography variant="body1">
              Learn Code is a leading EdTech platform, primarily known for its
              specialization in software development. We offer major courses in
              mobile and web development online. Our core mission is to provide
              research and development, education, and community leadership.
            </Typography>
          </Grid>

          {/* Recommended Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Recommended
            </Typography>
            <Typography variant="body1">
              <IconButton>
                <GitHub />
              </IconButton>{" "}
              Git & GitHub
            </Typography>
            <Typography variant="body1">
              <IconButton>
                <FlutterDash />
              </IconButton>{" "}
              Flutter
            </Typography>
            <Typography variant="body1">
              <IconButton>
                <Language />
              </IconButton>{" "}
              MERN Stack
            </Typography>
            <Typography variant="body1">
              <IconButton>
                <Code />
              </IconButton>{" "}
              Python
            </Typography>
          </Grid>

          {/* Legal Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Legal
            </Typography>
            <Typography variant="body1">Privacy Policy</Typography>
            <Typography variant="body1">Terms & Conditions</Typography>
            <Typography variant="body1">Refund Policy</Typography>
          </Grid>

          {/* Subscribe Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              align="center"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              Subscribe Newsletter
            </Typography>
            <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
              Thank you for subscribing with us.
            </Typography>
            {/* News Letter */}
            <Newsletter />

            <Typography
              variant="body1"
              sx={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <LocationOn sx={{ marginRight: 1 }} /> Jashore, Bangladesh
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={4}
          sx={{ marginTop: 4, justifyContent: "center" }}
        >
          {/* Footer Bottom Section */}
          <Grid item xs={12} sx={{ textAlign: "center", marginBottom: 2 }}>
            <Typography variant="body1">
              2025. Learn Code - All rights reserved.
            </Typography>
          </Grid>

          {/* Payment Methods Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4, 
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/assets/images/bkash.jpg"
                alt="bKash"
                width={40}
                height={40}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/assets/images/rocket.webp"
                alt="Rocket"
                width={40}
                height={40}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/assets/images/nagod.png"
                alt="Nagad"
                width={40}
                height={40}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/assets/images/dbbl.jpeg"
                alt="DBBL"
                width={40}
                height={40}
              />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
