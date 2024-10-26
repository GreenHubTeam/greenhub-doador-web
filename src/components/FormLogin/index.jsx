import { z } from 'zod';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Visibility, VisibilityOff, Key } from '@mui/icons-material';
import { Box, Button, CircularProgress, Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import { useAuth } from '../../hooks/useAuth';

const schemaLogin = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(4, "Minimo 4 caracteres")
});


export function FormLoginComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const { loginUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schemaLogin)
    });

    async function handleLogin(data) {
        setIsLoading(true);
        await loginUser(data.email, data.password);
        setIsLoading(false);
    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit(handleLogin)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}
        >
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

            < Box
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
                    {isLoading ? <CircularProgress color="success" size={24} /> : 'Entrar'}
                </Button>
            </Box >

        </Box >
    )
}