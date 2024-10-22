import { AppBarComponent } from "../AppBar";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion"

export function HeroSection() {
    const router = useNavigate();

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
                <AppBarComponent />
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: '7rem',
                        color: 'white',
                        maxWidth: '800px'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Box>
                            <Typography
                                variant="h3"
                                fontWeight={700}
                                mb={2}
                            >
                                Transforme o Futuro com Suas Doações
                            </Typography>
                            <Typography
                                variant="h5"
                                fontWeight={500}
                                sx={{ color: '#dcdcdc' }}
                            >
                                Conectamos doadores e ONGs para construir um mundo mais sustentável e justo. Apoie projetos que fazem a diferença.
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{ backgroundColor: 'green', mt: '2rem', height: '3rem' }}
                                onClick={() => router('/projects')}
                            >
                                Descubra Projetos Sustentáveis
                            </Button>
                        </Box>
                    </motion.div>
                </Box>
            </Box>
        </Box>
    )
}