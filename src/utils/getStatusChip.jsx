import { Chip } from "@mui/material";

export const getStatusChip = (status) => {
    switch (status) {
        case 'APPROVED':
            return <Chip label='Aprovado' variant='filled' color='success' />;
        case 'REPROVED':
            return <Chip label='Rejeitado' variant='filled' color='error' />;
        case 'WAITING':
            return <Chip label='Pendente' variant='filled' color='warning' />;
        case 'INACTIVE':
            return <Chip label='Inativo' variant='filled' color='error' />;
        default:
            return <Chip label='Status desconhecido' variant='filled' color='default' />;
    }
};
