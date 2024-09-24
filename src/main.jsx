import { StrictMode } from 'react';
import { IndexRoutes } from './routes';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <IndexRoutes />
  </StrictMode>,
);
