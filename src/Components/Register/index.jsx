import { z } from "zod";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ImageLogoLogin from '/saveLogo.png';
import { HeaderComponent } from "../Header";
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/authContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Box, Divider, InputAdornment, TextField, Button, Typography, IconButton, CircularProgress, Grid2 } from "@mui/material";

const RegisterSchema = z.object({
    username: z.string().min(1, "Nome deve ter no mínimo 2 caracteres"),
    cpf: z.string().min(1, (value => /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(value), { message: 'CPF inválido', }), 'CPF do responsável é obrigatório'),
    email: z.string().toLowerCase().email('E-mail inválido'),
    password: z.string().min(3, "Senha deve ter no mínimo 3 caracteres")
});

export function RegisterPage() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(RegisterSchema),
        mode: 'onChange'
    });

    const router = useNavigate();

    const { registerUser } = useContext(AuthContext);

    async function handleRegister(data) {
        setLoading(true);
        try {
            await registerUser({
                name: data.username,
                document: data.cpf,
                type: "DONOR",
                email: data.email,
                password: data.password
            });

            router('/');
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
                        onSubmit={handleSubmit(handleRegister)}
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
                                    error={!!errors.username}
                                    helperText={errors?.username?.message}
                                    {...register("username")}
                                    fullWidth
                                    required
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
                                    label="Nome"
                                />
                            </Grid2>

                            <Grid2 size={12}>
                                <TextField
                                    error={!!errors.cpf}
                                    helperText={errors?.cpf?.message}
                                    {...register('cpf')}
                                    fullWidth
                                    required
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
                                                    <AssignmentIndIcon />

                                                    <Divider orientation="vertical" flexItem />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                    label="CPF"
                                />
                            </Grid2>

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
                                        Já tem uma conta? <Box component={Link} to='/'>Clique Aqui</Box>
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
                                    {loading ? <CircularProgress size={24} /> : "Criar conta"}
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
