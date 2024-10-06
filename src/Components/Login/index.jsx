import { z } from "zod";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import KeyIcon from '@mui/icons-material/Key';
import ImageLogoLogin from '/saveLogo.png';
import PersonIcon from '@mui/icons-material/Person';
import { HeaderComponent } from "../Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Divider, InputAdornment, TextField, Button, Typography, IconButton, CircularProgress, Grid2 } from "@mui/material";
const LoginSchema = z.object({
    email: z.string().min(6, "Minimo de 6 caracteres"),
    password: z.string().min(3, "Minimo de 3 caracteres")
});

export function LoginPage() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(LoginSchema),
        mode: 'onChange'
    });

    const { loginUser } = useAuth();

    async function handleLogin(data) {
        setLoading(true);
        try {
            await loginUser(data.email, data.password);
            toast.success("Login realizado com sucesso!");
        } finally {
            setLoading(false);
        }
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
                                    helperText={errors?.email?.message}
                                    error={!!errors.email}
                                    {...register("email")}
                                    fullWidth
                                    required
                                    type='email'
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment
                                                    position="start"
                                                    sx={{
                                                        display: 'flex',
                                                        gap: '0.5rem'
                                                    }}
                                                >
                                                    <PersonIcon />

                                                    <Divider orientation="vertical" flexItem />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                    label="E-mail"
                                />
                            </Grid2>

                            <Grid2 size={12}>
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    gap='.4rem'
                                >
                                    <TextField
                                        helperText={errors?.password?.message}
                                        error={!!errors.password}
                                        {...register('password')}
                                        fullWidth
                                        required
                                        type={isShowPassword ? 'text' : "password"}
                                        slotProps={{
                                            input: {
                                                startAdornment: (
                                                    <InputAdornment
                                                        position="start"
                                                        sx={{
                                                            display: 'flex',
                                                            gap: '0.5rem'
                                                        }}
                                                    >
                                                        <KeyIcon />

                                                        <Divider orientation="vertical" flexItem />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <IconButton
                                                        onClick={() => setIsShowPassword(prev => !prev)}
                                                    >
                                                        {isShowPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                )
                                            },
                                        }}
                                        label="Senha"
                                    />

                                    <Typography>
                                        Você não possui uma conta? <Box component={Link} to='/registro'>Registre-se</Box>
                                    </Typography>
                                </Box>
                            </Grid2>

                            <Grid2 size={12}>
                                <Button
                                    disabled={loading}
                                    type="submit"
                                    variant='contained'
                                    sx={{
                                        backgroundColor: '#22703E',
                                        height: '3.5rem',
                                        width: '50%',
                                        margin: '0 auto',
                                    }}
                                >
                                    {loading ? <CircularProgress color="success" size={24} /> : "Entrar"}
                                </Button>

                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    )
}