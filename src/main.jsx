import './language/i18n';
import { StrictMode } from 'react';
import { Box } from '@mui/material';
import { RoutesMain } from './routes';
import ThemeClientProvider from './theme';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/authContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeClientProvider>
      <ToastContainer />
      <Box sx={{ fontFamily: 'Inter, Roboto, sans-serif' }}>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </Box>
    </ThemeClientProvider>
  </StrictMode>,
);