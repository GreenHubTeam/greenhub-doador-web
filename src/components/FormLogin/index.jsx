import { z } from 'zod';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Visibility, VisibilityOff, Key } from '@mui/icons-material';
import { Box, Button, CircularProgress, Divider, IconButton, InputAdornment, TextField, useMediaQuery } from "@mui/material";

const schemaLogin = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(4, "Minimo 4 caracteres")
});

export function FormLoginComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const isMobile = useMediaQuery('(max-width: 768px)'); 

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schemaLogin)
    });

    async function handleLogin(data) {
        setIsLoading(true);
        const logged = await loginUser(data.email, data.password);
        setIsLoading(false);

        if (logged) navigate('/');
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(handleLogin)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: isMobile ? '90%' : '400px',
                margin: isMobile ? '2rem auto' : '0 auto',
                padding: isMobile ? '1.5rem' : '0',
                boxShadow: isMobile ? '0px 2px 8px rgba(0,0,0,0.1)' : 'none',
                borderRadius: isMobile ? '1rem' : 'none',
                backgroundColor: isMobile ? '#fff' : 'transparent',
            }}
        >
            <TextField
                label="Email"
                sx={{
                    '& .MuiInputLabel-root': {
                        color: 'gray',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'green',
                    },
                    borderRadius: 2,
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
                        fontSize: isMobile ? '0.9rem' : '1rem',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'green',
                    },
                    borderRadius: 2,
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
                            <InputAdornment position="end">
                                <IconButton onClick={() => setIsShowPassword(!isShowPassword)}>
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
                    marginTop: '1rem',
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    sx={{
                        backgroundColor: 'green',
                        boxShadow: 'none',
                        height: isMobile ? '3rem' : '3.5rem',
                        borderRadius: '.7rem',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                    }}
                >
                    {isLoading ? <CircularProgress color="success" size={24} /> : 'Entrar'}
                </Button>
            </Box>
        </Box>
    );
}