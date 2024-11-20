import { Box, useMediaQuery } from "@mui/material";
import { PoliciesComponent } from "../PoliciesComponent";

export function FooterComponent() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            {isMobile && (
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
            )}
        </>
    );
}
