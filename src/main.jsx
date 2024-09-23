import { StrictMode } from 'react';
import { IndexRoutes } from './routes';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { PerfilPage } from './Components/Perfil';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <PerfilPage />
  </StrictMode>,
);
