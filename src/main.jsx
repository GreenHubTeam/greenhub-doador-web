import { Box } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './context/authContext';
import { RoutesMain } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <Box sx={{ fontFamily: 'Inter, Roboto, sans-serif' }}>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </Box>
  </StrictMode>,
);