'use client';

import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f6f8',
        p: 3,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#ffffff',
        }}
      >
        <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold">
          Login
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
            backgroundColor: '#21BF73',
            color: '#ffffff',
            fontWeight: 'bold',
            py: 1.5,
            '&:hover': {
              backgroundColor: '#1eaa66',
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
