import { FooterComponent } from "../../components/Footer";
import { HeroSection } from "../../components/HeroSection";
import { SlideProject } from "../../components/SlideProject";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Grid2, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

export function Home() {
    return (
        <Box flexGrow={1}>
            <HeroSection />

            <Box
                sx={{
                    padding: '5rem 7rem',
                    my: '4rem'
                }}
            >
                <Grid2 container spacing={5}>
                    <Grid2 size={{
                        xs: 12,
                        md: 6
                    }}>
                        <Typography variant="h6" color="textSecondary">
                            Sobre
                        </Typography>
                        <Typography variant="h4" fontWeight={700} my={2}>
                            O que é o GreenHub?
                        </Typography>

                        <Typography variant="subtitle1">
                            O GreenHub é uma plataforma que conecta doadores conscientes a ONGs que trabalham por um futuro mais sustentável. Nosso propósito é facilitar o processo de doação e engajamento, promovendo um impacto real no desenvolvimento de projetos que fazem a diferença.
                        </Typography>
                    </Grid2>
                    <Grid2 size={{
                        xs: 12,
                        md: 6
                    }}>
                        <Box mt={5}>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Diversidade de Projetos"
                                        secondary="Encontre iniciativas que se alinham com seus valores."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Apoio Direto a Causas Importantes"
                                        secondary="Escolha projetos que estejam alinhados com suas paixões e valores"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Participação Ativa em Projetos Sustentáveis"
                                        secondary="Ajude a impulsionar iniciativas que promovem a sustentabilidade e o bem-estar."
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>

            <Box
                sx={{
                    padding: '5rem 7rem',
                    backgroundColor: '#f7f7f7',
                    margin: '0 7rem 2rem',
                    borderRadius: '2rem'
                }}
            >
                <Grid2 container spacing={5}>
                    <Grid2 size={12}>
                        <Typography variant="h4" fontWeight={700} my={2} textAlign='center'>
                            Apoie Projetos em Destaque
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, }}>
                        <SlideProject />
                    </Grid2>
                </Grid2>
            </Box>

            <FooterComponent />
        </Box >
    )
}
