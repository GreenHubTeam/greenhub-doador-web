import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { LogoComponent } from "../../components/Logo";
import { SlideText } from "../../components/SlideText";
import { FormRegisterComponent } from "../../components/FormRegister";
import { Box, Button, Card, CardContent, Container, Divider, Grid2, Typography, useMediaQuery } from "@mui/material";

export function Register() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Grid2
            container
            sx={{
                height: '100dvh',
                flexDirection: isMobile ? 'column' : 'row',
            }}
        >
            <Grid2
                size={{ xs: 12, md: 8 }}
                sx={{
                    height: isMobile ? 'auto' : '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflowY: isMobile ? 'scroll' : 'auto',
                    padding: isMobile ? '1rem' : '0',
                }}
            >
                <Container maxWidth={isMobile ? 'xs' : 'sm'}>
                    <Card variant="outlined" sx={{ borderRadius: '1rem', }}>
                        <CardContent sx={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                            <Button
                                variant="text"
                                startIcon={<ArrowBack />}
                                sx={{
                                    color: 'green',
                                    mb: isMobile ? '1rem' : '.5rem',
                                    fontSize: isMobile ? '0.9rem' : '1rem',
                                }}
                                component={Link}
                                to='/'
                            >
                                Home
                            </Button>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: isMobile ? 'center' : 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap-reverse',
                                    textAlign: isMobile ? 'center' : 'left',
                                }}
                            >
                                <Box>
                                    <Typography variant="h5" color="green">
                                        Registre-se
                                    </Typography>
                                    <Typography variant="body1">
                                        Informe suas credenciais
                                    </Typography>
                                </Box>
                                {!isMobile && <LogoComponent />}
                            </Box>

                            <Divider sx={{ my: isMobile ? '1.5rem' : '2rem' }} />

                            <FormRegisterComponent />

                            <Divider sx={{ my: '1rem' }} />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '.3rem',
                                    fontSize: isMobile ? '0.9rem' : '1rem',
                                }}
                            >
                                Já possui conta?
                                <Box
                                    component={Link}
                                    to='/signin'
                                    sx={{
                                        color: 'green',
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Entre aqui
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Grid2>

            {!isMobile && (
                <Grid2
                    size={4}
                    sx={{
                        backgroundColor: 'white',
                        height: '100%',
                        backgroundImage: "url('https://www.tvjequie.com.br/uploads/images/2024/10/amazonia-e-foco-de-conferencia-internacional-em-novembro.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            height: '100%',
                            padding: '4rem',
                        }}
                    >
                        <SlideText />
                    </Box>
                </Grid2>
            )}
        </Grid2>
    );
}