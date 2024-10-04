import { z } from "zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ImageLogoLogin from '/saveLogo.png';  // Imagem de logo alterada
import { HeaderComponent } from "../Header";  // Supondo que já tenha o HeaderComponent
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

// Validação com Zod para todos os campos
const LoginSchema = z.object({
    username: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
    cpf: z.string().min(11, "CPF deve ter no mínimo 11 caracteres"),  // Validação de CPF
    email: z.string().min(6, "E-mail deve ter no mínimo 6 caracteres"),
    password: z.string().min(3, "Senha deve ter no mínimo 3 caracteres")
});

export function LoginPage() {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(LoginSchema)
    });

    function handleLogin(data) {
        console.log("Dados enviados:", data);
        alert("Dados sendo Enviados: " + data.username + " " + data.cpf + " " + data.email + " " + data.password);
    }

    return (
        <Grid2 container spacing={2}>
            {/* Coluna esquerda com logo e textos */}
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
                            Apoie sua ONG favorita
                        </Typography>
                    </Box>

                    <Box
                        component='img'
                        src={ImageLogoLogin}
                        alt="Support NGO"
                    />
                </Box>
            </Grid2>

            {/* Coluna direita com formulário */}
            <Grid2 size={6}>
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

                        <Grid2 container spacing={2}>
                            <Grid2 size={12}>
                                <TextField
                                    label="Nome"
                                    fullWidth
                                    {...register('username')}
                                />
                            </Grid2>

                            <Grid2 size={12}>
                                <TextField
                                    label="CPF"
                                    fullWidth
                                    {...register('cpf')}
                                />
                            </Grid2>

                            <Grid2 size={12}>
                                <TextField
                                    label="E-mail"
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
                                        Já tem uma conta? <Box component={Link} to='/'>Clique Aqui</Box>
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
                                    Criar Conta
                                </Button>
                            </Grid2>

                            <Grid2 size={12}>
                                <Typography
                                    textAlign="center"
                                    sx={{ marginTop: '1rem' }}
                                >
                                    Ao inscrever-se você concorda com os <Link to="#">termos de uso</Link>.
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    )
}
