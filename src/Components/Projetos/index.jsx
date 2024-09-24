import { Box, IconButton, Typography, Button, Avatar, Grid2 } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HeaderComponent } from "../Header";
import { useNavigate } from 'react-router-dom';


export function ProjetosPage() {
    const navigate = useNavigate();
    
    return (
        <Box>
            {/* Header */}
            <HeaderComponent sx={{ marginBottom: '20px' }} /> {/* Espaço entre o cabeçalho e o conteúdo */}

            {/* Navbar com ícones de Home e Avatar */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 ',
                    borderBottom: '1px solid #000000',
                    marginTop: '-100px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '500px', marginTop: '-10px'}}>
                    <IconButton onClick={() => navigate('/home')}>
                        <HomeIcon sx={{ color: '#000000' }} />
                    </IconButton>
                    <Typography sx={{ color: '#000000', fontWeight: 'bold' }}>Home</Typography>
                </Box>

                <IconButton>
                    <AccountCircleIcon sx={{ fontSize: 40, color: '#000000', marginTop: '-10px' }} />
                </IconButton>
            </Box>

            <Box
                component='img'
                src='/ecofuturo.png'
                alt='imagem de fundo do perfil'
                sx={{
                    height: '300px',
                    width: '60%', // Ajuste a largura para 100%
                    margin: '0 auto', // Centraliza horizontalmente
                    display: 'block', // Exibe como um bloco
                    objectFit: 'cover', // Ajusta a imagem para cobrir o espaço
                    borderRadius: '20px',
                    marginTop: '50px', // Espaço entre a navbar e a imagem de fundo
                }}
            />

            {/* Blocos lado a lado */}

            <Grid2 container spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '20px 180px', margin: '0 140px' }}>
                    {/* Bloco cinza com a descrição da EcoFuturo */}
                    <Grid2 size={6}>
                        <Typography variant='h3'
                            sx={{
                                padding: '0',
                                fontSize: '36px',
                                marginBottom: '0.55rem', // Espaço entre o título e o bloco de descrição
                                marginTop: '20px',
                                fontWeight: 'bold',
                                color: '#22703E',
                            }}
                        >
                            EcoFuturo
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: '#C4C3C3', // Cor de fundo cinza
                                padding: '30px',
                                height: '240px',
                                width: '80%',
                                borderRadius: '10px', // Bordas arredondadas
                                flex: 1, // Para que o bloco ocupe espaço proporcional
                                margin: '1rem'
                            }}
                        >
                            <Typography variant='body1' sx={{ color: '#000', fontSize: '20px' }}>
                                A EcoFuturo é uma ONG dedicada à preservação do meio ambiente e à conscientização sobre a
                                importância do reflorestamento.
                                Focada em educar comunidades sobre o impacto das mudanças climáticas, promove campanhas
                                de plantio de árvores e redução de resíduos.
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', }}>
                            <Button
                                variant='contained'
                                sx={{
                                    backgroundColor: '#3A914D',
                                    color: 'white',
                                    borderRadius: '20px', // Bordas arredondadas
                                    padding: '17px 30px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Apoie esse projeto
                            </Button>
                        </Box>

                    </Grid2>


                    {/* Bloco com informações da ONG responsável */}
                    <Grid2 size={6}>
                        <Box
                            sx={{
                                backgroundColor: '#C4C3C3', // Cor de fundo cinza
                                padding: '20px',
                                width: '50%',
                                borderRadius: '10px', // Bordas arredondadas
                                marginTop: '90px',
                            }}
                        >
                            <Typography variant='body1' sx={{ color: '#000', fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>
                                ONG responsável:
                            </Typography>
                            <Typography variant='body1' sx={{ color: '#000', fontSize: '20px', marginBottom: '8px' }}>
                                Guardiões da Amazônia
                            </Typography>
                            <Typography variant='body2' sx={{ color: '#000', fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}> {/* Texto menor */}
                                Data de início:
                            </Typography>
                            <Typography variant='body2' sx={{ color: '#000', fontSize: '20px', }}> {/* Texto menor */}
                                15 de Outubro de 2022
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', marginTop: '20px', }}>
                            <Avatar
                                alt="Logo da ONG"
                                src="/avatarong.png" // Substitua pelo caminho da sua imagem de logo
                                sx={{ width: 100, height: 100 }} // Ajuste o tamanho do Avatar
                            />
                            <Typography variant='h5' sx={{ fontWeight: '700', marginTop: '30px',}}>
                                Perfil da ONG responsável
                            </Typography>
                        </Box>
                    </Grid2>
                </Box>
            </Grid2>

            {/* Footer */}
            <Box
                sx={{
                    backgroundColor: '#46A95F',
                    padding: '25px',
                    position: 'relative',
                    width: '100%',
                    marginTop: '80px', // Espaço entre o conteúdo e o rodapé
                }}
            >
                <Typography sx={{ fontSize: '15px', color: 'white' }}>
                    Termos de Uso | LGPD
                </Typography>
            </Box>
        </Box>
    );
}
