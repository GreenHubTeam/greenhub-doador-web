import { Chip } from "@mui/material";

export const getStatusChip = (type) => {
    switch (type) {
        case 'ADMIN':
            return <Chip label='ADMINISTRADOR' variant='filled' color='info' />;
        case 'DONOR':
            return <Chip label='DOADOR' variant='filled' color='success' />;
        case 'ONG':
            return <Chip label='PenONGdente' variant='filled' color='warning' />;
    }
};
