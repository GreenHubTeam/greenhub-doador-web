import { z } from "zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ImageLogoLogin from '/saveLogo.png';
import { HeaderComponent } from "../Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

const LoginSchema = z.object({
    email: z.string().min(6, "Minimo de 6 caracteres"),
    password: z.string().min(3, "Minimo de 3 caracteres")
});

export function LoginPage() {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(LoginSchema)
    });

    function handleLogin(data) {
        console.log(data);
    }

    return (
        <Grid2 container spacing={2}>
            <Grid2 size={6}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}
                >
                    <Box>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontSize: '2rem',
                                fontWeight: '700'
                            }}
                        >
                            Seja bem-vindo
                        </Typography>

                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontSize: '1rem',
                                fontWeight: '700',
                                color: 'gray'
                            }}
                        >
                            Apoie sua ong favorita
                        </Typography>
                    </Box>

                    <Box
                        component='img'
                        src={ImageLogoLogin}
                    />
                </Box>
            </Grid2>
            <Grid2 size={6} >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh'
                    }}
                >
                    <Box
                        component='form'
                        onSubmit={handleSubmit(handleLogin)}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <HeaderComponent />
                        </Box>
                        <Grid2
                            container
                            spacing={2}
                        >
                            <Grid2 size={12}>
                                <TextField
                                    label="Email"
                                    fullWidth
                                    {...register('email')}
                                />
                            </Grid2>

                            <Grid2 size={12}>
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    gap='.4rem'
                                >
                                    <TextField
                                        label="Senha"
                                        fullWidth
                                        {...register('password')}
                                    />

                                    <Typography>
                                        Você não possui uma conta? <Box component={Link} to='/'>Registre-se</Box>
                                    </Typography>
                                </Box>
                            </Grid2>

                            <Grid2 size={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'green',
                                        boxShadow: 'none',
                                        marginTop: '1rem',
                                        height: '44px'
                                    }}
                                >
                                    Entrar
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    )
}