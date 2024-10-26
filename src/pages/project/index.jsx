import { Box, Grid2, Typography } from "@mui/material";
import { AppBarComponent } from "../../components/AppBar";
import { FooterComponent } from "../../components/Footer";
import { ListProjects } from "../../components/ListProjects";

export function Projects() {
    return (
        <Box flexGrow={1} >
            <AppBarComponent color='black' />
            <Box
                sx={{
                    padding: '0 7rem',
                }}
            >
                <Box
                    sx={{
                        my: '2rem'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            borderRadius: '2rem',
                            height: '300px',
                            backgroundImage: 'url("/fotoonça.png")',
                            backgroundSize: 'center',
                            backgroundPosition: 'center',
                            padding: '0 4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography variant="h3" fontWeight={700}>
                            Gostaria de fazer a diferença?
                        </Typography>

                        <Typography variant="h5" sx={{ color: 'darkgray' }} >
                            Apoie um projeto!
                        </Typography>
                    </Box>
                </Box>

                <Grid2 container>
                    <ListProjects />
                </Grid2>

            </Box>
            <FooterComponent />
        </Box>
    )
}