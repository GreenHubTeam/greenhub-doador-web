import { Box, Button, Typography, Chip, CardContent, Card, CardMedia, Paper, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { env } from '../../env';

export function CardProject({ name, description, status, imagePath, id }) {
    const navigate = useNavigate();

    const getStatusChip = (status) => {
        switch (status) {
            case 'APPROVED':
                return <Chip label='Aprovado' variant='filled' color='success' />;
            default:
                return <Chip label='Status desconhecido' variant='filled' color='default' />;
        }
    };

    return (
        <Paper variant='outlined'>
            <Card elevation={0}>
                <CardMedia
                    component='img'
                    alt='Project Image'
                    sx={{ height: 200 }}
                    image={imagePath ? `${env.api_url}/${imagePath}` : "/ecofuturo.png"}
                    title='Project Image'
                />

                <CardContent>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                        <Typography
                            sx={{
                                fontWeight: '700',
                                fontSize: '1.35rem',
                                marginBottom: '.4rem',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {name}
                        </Typography>

                        {getStatusChip(status)}
                    </Box>

                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Paper>

    )
}