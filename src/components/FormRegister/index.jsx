import { z } from 'zod';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { isValidCPF } from '../../utils/isValidCPF';
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Visibility, VisibilityOff, Key, Person, AssignmentInd } from '@mui/icons-material';
import { Box, Button, CircularProgress, Divider, Grid2, IconButton, InputAdornment, TextField, useMediaQuery } from "@mui/material";
import theme from '../../theme/theme';

const RegisterSchema = z.object({
    name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
    document: z.string().min(1, 'CPF do responsável é obrigatório').refine((value) => isValidCPF(value), "CPF invalido"),
    email: z.string().toLowerCase().email('E-mail inválido'),
    password: z.string().min(3, "Senha deve ter no mínimo 3 caracteres").max(30, "Senha deve conter no máximo 30 caracteres")
});

export function FormRegisterComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const { registerUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(RegisterSchema)
    });

    const isMobile = useMediaQuery("(max-width:768px)");

    async function handleRegister(data) {
        setIsLoading(true);
        const logged = await registerUser({
            document: data.document,
            name: data.name,
            type: "DONOR",
            email: data.email,
            password: data.password
        });
        setIsLoading(false);

        if (logged) navigate('/');
    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit(handleRegister)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}
        >

            <Grid2 container spacing={2}>
                <Grid2 size={{xs: 12, md: 6}}>
                    <TextField
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        {...register("name")}
                        fullWidth
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
                                        <Person sx={{ color: 'green' }} />
                                        <Divider orientation="vertical" flexItem />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        label="Nome"
                    />
                </Grid2>

                <Grid2 size={{xs: 12, md: 6}}>
                    <TextField
                        error={!!errors.document}
                        helperText={errors?.document?.message}
                        {...register('document')}
                        fullWidth
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
                                        <AssignmentInd sx={{ color: 'green' }} />
                                        <Divider orientation="vertical" flexItem />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        label="CPF"
                    />
                </Grid2>
            </Grid2>

            <TextField
                label="Email"
                sx={{
                    '& .MuiInputLabel-root': {
                        color: 'gray',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'green'
                    },
                    borderRadius: 2
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Mail sx={{ color: 'green' }} />
                                <Divider flexItem orientation="vertical" />
                            </InputAdornment>
                        ),
                    },
                }}
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email')}
            />


            <TextField
                label="Senha"
                type={isShowPassword ? 'text' : 'password'}
                sx={{
                    '& .MuiInputLabel-root': {
                        color: 'gray',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'green'
                    },
                    borderRadius: 2
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Key sx={{ color: 'green' }} />
                                <Divider flexItem orientation="vertical" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end" onClick={() => setIsShowPassword(!isShowPassword)}>
                                <IconButton>
                                    {isShowPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register('password')}
            />


            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '.5rem',
                    marginTop: '1rem'
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    sx={{ backgroundColor: 'green', boxShadow: 'none', height: '3.5rem', borderRadius: '.7rem' }}
                >
                    {isLoading ? <CircularProgress color="success" size={24} /> : 'Registrar'}
                </Button>
            </Box>
        </Box>
    );
}
