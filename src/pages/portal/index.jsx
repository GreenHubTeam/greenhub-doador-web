import { ListPost } from "../../components/ListPosts";
import { ListRandomOngs } from "../../components/ListRandomOngs";
import { Box, Card, CardContent, Grid2, Typography, useMediaQuery } from "@mui/material";
import { ListLatestProjects } from "../../components/listLastestProjects";

export function Portal() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <Box flexGrow={1}>
            <Box
                padding={{ xs: "0 1rem", md: "0 7rem" }}
                my={4}
                minHeight="100dvh"
            >
                <Grid2
                    container
                    spacing={2}
                >
                    <Grid2 order={{ xs: 3, md: 1 }} size={{ xs: 12, md: 3 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                position: isMobile ? "relative" : "sticky",
                                top: isMobile ? "unset" : 30,
                                marginBottom: isMobile ? "1rem" : "unset",
                            }}
                        >
                            <CardContent>
                                <Typography sx={{ mb: "1rem" }} color="textPrimary">
                                    Últimos projetos visualizados
                                </Typography>
                                <ListLatestProjects />
                            </CardContent>
                        </Card>
                    </Grid2>

                    <Grid2 order={{ xs: 2 }} size={{ xs: 12, md: 6 }}>
                        <ListPost />
                    </Grid2>

                    <Grid2 order={{ xs: 1, md: 3 }} size={{ xs: 12, md: 3 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                position: isMobile ? "relative" : "sticky",
                                top: isMobile ? "unset" : 30,
                                marginTop: 0,
                            }}
                        >
                            <CardContent>
                                <Typography sx={{ mb: "1rem" }} color="textPrimary">
                                    Explore ONGs
                                </Typography>

                                <ListRandomOngs />
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Box>
        </Box >
    );
}
