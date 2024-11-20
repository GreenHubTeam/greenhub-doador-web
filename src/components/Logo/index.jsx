import { Box, Typography } from "@mui/material";

export function LogoComponent() {
    return (
        <Box
            sx={{
                display: 'flex',
                padding: 0,
                gap: { xs: '.5rem', md: '1rem' },
                alignItems: 'center',
                fontFamily: 'Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
            }}
        >
            <Box
                component='img'
                src='/logosemfundo.png'
                alt='Logo do Greenhub'
                sx={{
                    width: { xs: 45, md: 60 },
                    height: { xs: 45, md: 60 }
                }}
            />
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ color: '#22703E', fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: '750' }}>Gre</Typography>
                <Typography sx={{ color: '#3A914D', fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: '750' }}>en</Typography>
                <Typography sx={{ color: '#3A914D', fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: '750' }}>Hub</Typography>
            </Box>
        </Box>
    )
}