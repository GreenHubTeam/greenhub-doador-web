import { useAuth } from "../../hooks/useAuth";
import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import { AppBarComponent } from "../../components/AppBar";
import { FooterComponent } from "../../components/Footer";
import { ListProjects } from "../../components/ListProjects";

export function Projects() {
    const { user } = useAuth();
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Box flexGrow={1}>
            {!user && <AppBarComponent color="black" />}
            <Box
                sx={{
                    padding: isMobile ? "0 1rem" : "0 7rem",
                }}
            >
                <Box sx={{ my: "2rem" }}>
                    <Box
                        sx={{
                            width: "100%",
                            borderRadius: {
                                xs: '1rem',
                                md: '2rem'
                            },
                            height: isMobile ? "150px" : "200px",
                            backgroundImage: "url('/fotoonça.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            padding: isMobile ? "0 1rem" : "0 4rem",
                            display: "flex",
                            flexDirection: "column",
                            color: "white",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant={isMobile ? "h6" : "h3"} fontWeight={700}>
                            {user ? `Bem vindo ${(user.name).split(" ")[0]}!` : "Gostaria de fazer a diferença?"}
                        </Typography>

                        <Typography variant={isMobile ? "subtitle1" : "h5"} sx={{ color: "darkgray" }}>
                            Apoie um projeto!
                        </Typography>
                    </Box>
                </Box>

                <Grid2 container>
                    <ListProjects viewProfile={!!user} />
                </Grid2>
            </Box>
            {!user && <FooterComponent />}
        </Box>
    );
}
