// src/pages/Signup.js
import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        enqueueSnackbar(`Ошибка при регистрации: ${error.message}`, { variant: 'error' });
      });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" align="center">
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Signup;
