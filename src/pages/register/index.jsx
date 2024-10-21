import theme from "../../theme/theme";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { LogoComponent } from "../../components/Logo";
import { SlideText } from "../../components/SlideText";
import { FormRegisterComponent } from "../../components/FormRegister";
import { Box, Button, Card, CardContent, Container, Divider, Grid2, Typography, useMediaQuery } from "@mui/material";

export function Register() {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid2 sx={{ height: '100dvh', }} container>
            <Grid2
                size={{ md: 8, xs: 12 }}
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflowY: 'auto'
                }}
            >
                <Container maxWidth={isMobile ? 'lg' : 'sm'}>
                    <Card variant="outlined">
                        <CardContent sx={{ padding: ' 2rem' }}>
                            <Button
                                variant="text"
                                startIcon={<ArrowBack />}
                                sx={{ color: 'green', mb: '.5rem' }}
                                component={Link}
                                to='/'
                            >
                                Home
                            </Button>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap-reverse',
                            }}>
                                <Box>
                                    <Typography variant="h5" color="green">
                                        Registre-se
                                    </Typography>

                                    <Typography variant="h6">
                                        Informe suas credenciais
                                    </Typography>
                                </Box>

                                <LogoComponent />
                            </Box>

                            <Divider sx={{ my: '2rem' }} />

                            <FormRegisterComponent />

                            <Divider sx={{ my: '1rem' }} />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '.3rem'
                                }}
                            >
                                Já possui conta?
                                <Box
                                    component={Link}
                                    to='/signin'
                                    sx={{ color: 'green' }}
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
                        backgroundPosition: 'center'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            height: '100%',
                            padding: '4rem'
                        }}
                    >
                        <SlideText />
                    </Box>
                </Grid2>
            )}
        </Grid2>
    )
}