import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { HeaderComponent } from "../Header";
import { useLocation } from 'react-router-dom';

export function DoacaoSucesso() {
  const location = useLocation();
  const { valorDoacao, nomeDoador } = location.state;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <HeaderComponent />
      <Typography variant="h4">Obrigado, {nomeDoador}!</Typography>
      <Typography variant="body1">Sua doação de R$ {valorDoacao} ajudará a ONG em seus objetivos.</Typography>
      <Button variant="contained" onClick={() => window.location.href = '/projetos'}>Voltar para a página de projeto</Button>
    </Box>
  );
}