import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HeaderComponent } from "../Header";

export function DoacaoFake() {
  const [valorDoacao, setValorDoacao] = useState('');
  const [nomeDoador, setNomeDoador] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Doação realizada:', { valorDoacao, nomeDoador });
    navigate('/doacaosucesso', { state: { valorDoacao, nomeDoador } });
  };

  return (
    <Box>
        <HeaderComponent />
      <h2>Faça sua doação</h2>
      <TextField
        label="Nome do doador"
        variant="outlined"
        value={nomeDoador}
        onChange={(e) => setNomeDoador(e.target.value)}
      />
      <TextField
        label="Valor da doação"
        variant="outlined"
        type="number"
        value={valorDoacao}
        onChange={(e) => setValorDoacao(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>Fazer Doação</Button>
    </Box>
  );
}