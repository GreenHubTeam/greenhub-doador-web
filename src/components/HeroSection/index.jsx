import { motion } from "framer-motion";
import { AppBarComponent } from "../AppBar";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import theme from "../../theme/theme";

export function HeroSection() {
    const router = useNavigate();
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width: 768px)'); 

    return (
        <Box
            sx={{
                height: '100dvh',
                backgroundImage: "url('https://portalamazonia.com/wp-content/uploads/2021/06/Foto_1_WWF_AFP-1.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                <AppBarComponent color='white' />

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: isMobile ? 'center' : 'flex-start',
                        paddingLeft: isMobile ? '1rem' : '7rem',
                        paddingRight: isMobile ? '1rem' : 0,
                        textAlign: isMobile ? 'center' : 'left',
                        color: 'white',
                        maxWidth: isMobile ? '100%' : '800px'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Typography
                            variant={isMobile ? "h4" : "h3"}
                            fontWeight={700}
                            mb={2}
                        >
                            {t('home.title')}
                        </Typography>

                        <Typography
                            variant={isMobile ? "body1" : "h5"}
                            fontWeight={500}
                            sx={{ color: '#dcdcdc' }}
                            mb={isMobile ? '1rem' : 0}
                        >
                            {t('home.description')}
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'green',
                                mt: '2rem',
                                height: '3rem',
                                width: isMobile ? '100%' : 'auto'
                            }}
                            onClick={() => router('/project')}
                        >
                            {t('home.buttonLabel')}
                        </Button>
                    </motion.div>
                </Box>
            </Box>
        </Box>
    );
}
