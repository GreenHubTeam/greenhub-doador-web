import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa o Router
import { HomePage  } from './Home/index.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Envolve a aplicação com Router */}
      <HomePage />
    </Router>
  </StrictMode>,
);
