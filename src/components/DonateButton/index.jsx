import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../libs/axios';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Favorite, MonetizationOn } from '@mui/icons-material';
import { Button, TextField, Dialog, DialogTitle, DialogContent, Divider, CircularProgress, InputAdornment, Typography, DialogActions } from '@mui/material';

const donationSchema = z.object({
    donationAmount: z
        .number({ invalid_type_error: "O valor precisa ser um número" })
        .min(1, "O valor mínimo é de R$ 1,00")
});

// eslint-disable-next-line react/prop-types
export function DonationButton({ projectId }) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(donationSchema)
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        reset();
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await api.post(`/donation/create/${user?.id}/${projectId}`, { value: data.donationAmount });

            const { url } = response.data;
            window.location.href = url;

            handleClose();
        } catch {
            toast.error("Erro ao criar url de doação")
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Button
                variant="contained"
                fullWidth
                onClick={handleOpen}
                sx={{
                    backgroundColor: 'green',
                }}
            >
                Fazer uma Doação
            </Button>

            <Dialog open={open} onClose={() => isLoading ? null : handleClose()} maxWidth='sm' fullWidth>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle>
                        <Favorite color="error" /> Contribua com uma Causa
                    </DialogTitle>

                    <Divider />

                    <DialogContent>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            Sua doação faz toda a diferença! Escolha um valor que deseja doar e ajude a transformar vidas.
                        </Typography>

                        <TextField
                            fullWidth
                            label="Valor da Doação (R$)"
                            variant="outlined"
                            type="number"
                            {...register("donationAmount", { valueAsNumber: true })}
                            error={!!errors.donationAmount}
                            helperText={errors.donationAmount?.message}
                            margin="normal"
                            disabled={isLoading}
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
                                            <MonetizationOn sx={{ color: 'green' }} />
                                            <Divider flexItem orientation="vertical" />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            variant='outlined'
                            color='inherit'
                            disabled={isLoading}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ backgroundColor: 'green' }}
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} color='success' /> : "Doar"}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};
