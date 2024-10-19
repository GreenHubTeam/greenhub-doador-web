import { Box } from '@mui/material';
import { StrictMode } from 'react';
import { RoutesMain } from './routes';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/authContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <ToastContainer />
    <Box sx={{ fontFamily: 'Inter, Roboto, sans-serif' }}>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </Box>
  </StrictMode>,
);