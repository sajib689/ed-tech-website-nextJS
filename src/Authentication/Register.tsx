'use client';

import { useContext, useState } from 'react';
import { Box, TextField, Button, Typography, Divider, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import Loader from '@/utlis/Loader';

const Register = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const role = 'student';

  if (!authContext) {
    return <Loader/>; 
  }

  const { createUserWithForm } = authContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate inputs
      if (!email || !number || !password || !name) {
        throw new Error("All fields are required.");
      }

      if (number.length !== 11) {
        throw new Error("Phone number must be 10 digits.");
      }

      // Create the user in the auth system
      await createUserWithForm(email, password);

      // Send the user data to the backend
      const response = await fetch(`http://localhost:5000/api/v1/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          role,
          email,
          number,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to register user: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('User successfully created:', data);
      alert('User registered successfully!');

      // Reset the form
      setEmail('');
      setNumber('');
      setPassword('');
      setName('');
    } catch (error) {
      console.error('Error during registration:', error);
      alert(error instanceof Error ? error.message : 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        px: 2,
        marginTop: '100px',
        marginBottom: '80px',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: '#f0f4f8',
        }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold" mb={2}>
          Welcome Back!
        </Typography>
        <Typography variant="body2" color="textSecondary" textAlign="center" mb={3}>
          Please Register to continue
        </Typography>
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          label="Phone Number"
          type="tel"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
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
          disabled={loading}
          sx={{
            backgroundColor: '#21BF73',
            color: '#ffffff',
            fontWeight: 'bold',
            py: 1.3,
            mb: 2,
            '&:hover': {
              backgroundColor: '#1eaa66',
            },
          }}
        >
          {loading ? 'Registering...' : 'Register'}
        </Button>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Stack spacing={2}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            sx={{
              borderColor: '#4285F4',
              color: '#4285F4',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#e8f0fe',
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
              borderColor: '#333',
              color: '#333',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f6f6f6',
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
          Already have an account?{' '}
          <Link href="/login" passHref>
            <span style={{ color: '#21BF73', cursor: 'pointer' }}>Sign In</span>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
