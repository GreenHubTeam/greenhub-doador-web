import { useTranslation } from "react-i18next";
import { FooterComponent } from "../../components/Footer";
import { HeroSection } from "../../components/HeroSection";
import { SlideProject } from "../../components/SlideProject";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Grid2, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from "@mui/material";
import theme from '../../theme/theme'; 

export function Home() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width: 768px)'); 

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
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography variant="h6" color="textSecondary">
                            {t('about.title')}
                        </Typography>
                        <Typography variant="h4" fontWeight={700} my={2}>
                            {t('about.subtitle')}
                        </Typography>

                        <Typography variant="subtitle1">
                            {t('about.description')}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
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
                        <Typography variant="h4" fontWeight={700} my={2} textAlign="center">
                            Apoie Projetos em Destaque
                        </Typography>
                    </Grid2>

                    {isMobile && (
                        <Grid2 size={{ xs: 12 }}>
                            <SlideProject />
                        </Grid2>
                    )}
                </Grid2>
            </Box>

            <FooterComponent />
        </Box>
    );
}
