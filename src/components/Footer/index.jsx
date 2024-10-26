import { Box } from "@mui/material";
import { PoliciesComponent } from "../PoliciesComponent";

export function FooterComponent() {
    return (
        <Box
            sx={{
                backgroundColor: 'green',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700'
            }}
        >
            <PoliciesComponent />
        </Box>
    )
}