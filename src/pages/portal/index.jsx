import { ListPost } from "../../components/ListPosts";
import { ListRandomOngs } from "../../components/ListRandomOngs";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { ListLatestProjects } from "../../components/listLastestProjects";

export function Portal() {
    return (
        <Box flexGrow={1} >
            <Box padding={{ xs: '0 2rem', md: '0 7rem' }} my={4} minHeight='100dvh'>
                <Grid2 container spacing={2}>
                    <Grid2 size={3}>
                        <Card variant="outlined" sx={{ position: 'sticky', top: 30, }} >
                            <CardContent>
                                <Typography sx={{ mb: '1rem' }} color="textPrimary">
                                    Ultimos projetos vizualizados
                                </Typography>
                                <ListLatestProjects />
                            </CardContent>
                        </Card>
                    </Grid2>

                    <Grid2 size={6}>
                        <ListPost />
                    </Grid2>

                    <Grid2 size={3}>
                        <Card variant="outlined" sx={{ position: 'sticky', top: 30, }}>
                            <CardContent>
                                <Typography sx={{ mb: '1rem' }} color="textPrimary">
                                    Explore ONGs
                                </Typography>

                                <ListRandomOngs />
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Box>
        </Box >
    )
}