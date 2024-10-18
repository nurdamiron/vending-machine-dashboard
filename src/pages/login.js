// src/pages/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        enqueueSnackbar(`Ошибка при входе: ${error.message}`, { variant: 'error' });
      });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" align="center">
          Вход в систему
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
            Войти
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
