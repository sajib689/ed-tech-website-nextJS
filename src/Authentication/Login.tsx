"use client";

import { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  // Handle case where context might be null
  if (!authContext) {
    return <Typography>Loading...</Typography>; // Or handle error case
  }

  const { signWithForm } = authContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signWithForm(email, password)
      .then(() => {
        alert("Success");
      })
      .catch((err) => {
        if (err instanceof Error) {
          alert(err.message);
        } else {
          alert("An unknown error occurred");
        }
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        px: 2,
        marginTop: "60px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "#f0f4f8",
        }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold" mb={2}>
          Welcome Back!
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          textAlign="center"
          mb={3}
        >
          Please login to continue
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 3 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#21BF73",
            color: "#ffffff",
            fontWeight: "bold",
            py: 1.3,
            mb: 2,
            "&:hover": {
              backgroundColor: "#1eaa66",
            },
          }}
        >
          Login
        </Button>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Stack spacing={2}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            sx={{
              borderColor: "#4285F4",
              color: "#4285F4",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e8f0fe",
              },
            }}
          >
            Sign in with Google
          </Button>

          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            fullWidth
            sx={{
              borderColor: "#333",
              color: "#333",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f6f6f6",
              },
            }}
          >
            Sign in with GitHub
          </Button>
        </Stack>

        <Typography
          variant="body2"
          color="textSecondary"
          textAlign="center"
          mt={2}
        >
          Don&apos;t have an account?{" "}
          <Link href="/register" passHref>
            <span style={{ color: "#21BF73", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
