// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './contexts/authContext';
import theme from './theme';
import Routes from './routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
