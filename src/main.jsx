import { StrictMode } from 'react';
import { IndexRoutes } from './routes';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { PerfilPage } from './Components/Perfil';
import { ProjetosPage } from './Components/Projetos';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <ProjetosPage />
  </StrictMode>,
);
