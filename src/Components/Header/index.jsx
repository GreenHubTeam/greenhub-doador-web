import { Box, Typography } from '@mui/material';

export function HeaderComponent() {
    return (
        <Box
            sx={{
                display: 'flex',
                padding: 0,
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '3rem',
                fontFamily: 'Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
            }}
        >
            <Box
                component='img'
                src='/logosemfundo.png'
                alt='Logo do Greenhub'
                sx={{
                    width: 80,
                    height: 80
                }}
            />
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ color: '#22703E', fontSize: '1.5rem', fontWeight: '750' }}>Gre</Typography>
                <Typography sx={{ color: '#3A914D', fontSize: '1.5rem', fontWeight: '750' }}>en</Typography>
                <Typography sx={{ color: '#3A914D', fontSize: '1.5rem', fontWeight: '750' }}>Hub</Typography>
            </Box>
        </Box>
    );
}