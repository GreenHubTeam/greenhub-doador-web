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
                px: 2,
                '@media (max-width: 600px)': {
                    paddingX: 3,
                    minHeight: '90dvh',
                }
            }}
        >
            <CheckCircleIcon sx={{ fontSize: 80, color: 'green', mb: 3 }} />
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    '@media (max-width: 600px)': {
                        fontSize: '2rem', 
                    }
                }}
            >
                Doação Concluída com Sucesso!
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    mb: 4,
                    maxWidth: '600px',
                    '@media (max-width: 600px)': {
                        fontSize: '1rem', 
                        maxWidth: '90%', 
                    },
                }}
            >
                Obrigado por sua contribuição! Sua generosidade ajuda a fazer a diferença.
                Juntos, estamos construindo um futuro melhor.
            </Typography>

            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                    mb: 2,
                    px: 4,
                    '@media (max-width: 600px)': {
                        fontSize: '0.9rem',
                        paddingX: '2rem',
                    }
                }}
                onClick={() => navigate('/')}
            >
                Voltar para a Página Inicial
            </Button>

            <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                    px: 4,
                    '@media (max-width: 600px)': {
                        fontSize: '0.9rem',
                        paddingX: '2rem',
                    }
                }}
                onClick={() => navigate('/project')}
            >
                Ver Outros Projetos
            </Button>
        </Box>
    );
};

export default DonationSuccess;
