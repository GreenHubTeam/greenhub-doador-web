import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { LogoComponent } from "../../components/Logo";
import { SlideText } from "../../components/SlideText";
import { FormLoginComponent } from "../../components/FormLogin";
import { Box, Button, Card, CardContent, Container, Divider, Grid2, Typography, useMediaQuery } from "@mui/material";

export function Login() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Grid2 sx={{ height: '100dvh' }} container>
            <Grid2
                size={{ md: 8, xs: 12 }}
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflowY: 'auto',
                    padding: isMobile ? '1rem' : '2rem',
                    backgroundColor: isMobile ? '#f9f9f9' : 'white',
                }}
            >
                <Container maxWidth={isMobile ? 'lg' : 'sm'}>
                    <Card
                        variant="outlined"
                        sx={{
                            borderRadius: '1rem',
                            overflow: 'hidden',
                        }}
                    >
                        <CardContent sx={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                            <Button
                                variant="text"
                                startIcon={<ArrowBack />}
                                sx={{
                                    color: 'green',
                                    marginBottom: '1rem',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    fontSize: isMobile ? '0.9rem' : '1rem',
                                }}
                                component={Link}
                                to="/"
                            >
                                Home
                            </Button>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1.5rem',
                                    flexDirection: isMobile ? 'column-reverse' : 'row',
                                }}
                            >
                                <Box sx={{ textAlign: isMobile ? 'center' : 'left', marginBottom: isMobile ? '1rem' : 0 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: 'green',
                                            fontWeight: 'bold',
                                            fontSize: isMobile ? '1.2rem' : '1.5rem',
                                        }}
                                    >
                                        Olá, seja Bem-vindo
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: isMobile ? '0.9rem' : '1rem',
                                            color: '#555',
                                        }}
                                    >
                                        Faça login na sua conta
                                    </Typography>
                                </Box>
                                <LogoComponent />
                            </Box>

                            <Divider sx={{ marginBottom: '2rem' }} />

                            <FormLoginComponent />

                            <Divider sx={{ marginY: '2rem' }} />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.3rem',
                                    fontSize: '0.9rem',
                                    color: '#555',
                                }}
                            >
                                Não tem conta?
                                <Box
                                    component={Link}
                                    to="/signup"
                                    sx={{
                                        color: 'green',
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Registre-se
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
