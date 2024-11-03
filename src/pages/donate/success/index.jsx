import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DonationSuccess = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                minHeight: '80dvh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                px: 2
            }}
        >
            <CheckCircleIcon sx={{ fontSize: 80, color: 'green', mb: 3 }} />
            <Typography variant="h3" component="h1" gutterBottom>
                Doação Concluída com Sucesso!
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: '600px' }}>
                Obrigado por sua contribuição! Sua generosidade ajuda a fazer a diferença.
                Juntos, estamos construindo um futuro melhor.
            </Typography>

            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mb: 2, px: 4 }}
                onClick={() => navigate('/')}
            >
                Voltar para a Página Inicial
            </Button>

            <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 4 }}
                onClick={() => navigate('/project')}
            >
                Ver Outros Projetos
            </Button>
        </Box>
    );
};

export default DonationSuccess;
