import { Box, IconButton, Typography, Button, Avatar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HeaderComponent } from "../../Components/Header";

export function ProjetosPage() {
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
                    padding: '0 1rem',
                    borderBottom: '1px solid #000000',
                    marginTop: '-100px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '500px' }}>
                    <IconButton>
                        <HomeIcon sx={{ color: '#000000' }} />
                    </IconButton>
                    <Typography sx={{ color: '#000000', fontWeight: 'bold' }}>Home</Typography>
                </Box>

                <IconButton>
                    <AccountCircleIcon sx={{ fontSize: 40, color: '#000000' }} />
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
            
            <Box>
                <Typography variant='h3'
                    sx={{
                        padding: '0',
                        margin: '0',
                        fontSize: '36px',
                        marginBottom: '20px', // Espaço entre o título e o bloco de descrição
                        marginTop: '50px',
                        marginLeft: '200px',
                        fontWeight: 'bold',
                        color: '#22703E',
                    }}
                >
                    EcoFuturo
                </Typography>
            </Box>

            {/* Blocos lado a lado */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '0 200px' }}>
                {/* Bloco cinza com a descrição da EcoFuturo */}
                <Box
                    sx={{
                        backgroundColor: '#C4C3C3', // Cor de fundo cinza
                        padding: '20px',
                        borderRadius: '10px', // Bordas arredondadas
                        flex: 1, // Para que o bloco ocupe espaço proporcional
                    }}
                >
                    <Typography variant='body1' sx={{ color: '#000', fontSize: '20px' }}>
                        A EcoFuturo é uma ONG dedicada à preservação do meio ambiente e à conscientização sobre a 
                        importância do reflorestamento. 
                        Focada em educar comunidades sobre o impacto das mudanças climáticas, promove campanhas 
                        de plantio de árvores e redução de resíduos.
                    </Typography>

                    {/* Botão "Apoie esse projeto" */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', }}>
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: '#3A914D',
                                color: 'white',
                                borderRadius: '20px', // Bordas arredondadas
                                padding: '10px 20px',
                                fontWeight: 'bold',
                            }}
                        >
                            Apoie esse projeto
                        </Button>
                    </Box>
                </Box>

                {/* Bloco com informações da ONG responsável */}
                <Box
                    sx={{
                        backgroundColor: '#C4C3C3', // Cor de fundo cinza
                        padding: '20px',
                        borderRadius: '10px', // Bordas arredondadas
                        flex: '0.5' // Para que o bloco ocupe espaço proporcional
                    }}
                >
                    <Typography variant='body1' sx={{ color: '#000', fontSize: '20px', fontWeight: 'bold' }}>
                        ONG responsável: 
                    </Typography>
                    <Typography variant='body1' sx={{ color: '#000', fontSize: '20px',  }}>
                        Guardiões da Amazônia
                    </Typography>
                    <Typography variant='body2' sx={{ color: '#000', fontSize: '20px', fontWeight: 'bold' }}> {/* Texto menor */}
                        Data de início: 
                    </Typography>
                    <Typography variant='body2' sx={{ color: '#000', fontSize: '20px', }}> {/* Texto menor */}
                        15 de Outubro de 2022
                    </Typography>
                </Box>
            </Box>

            {/* Logo de Avatar e título "Perfil da ONG responsável" */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <Avatar
                    alt="Logo da ONG"
                    src="/avatarong.png" // Substitua pelo caminho da sua imagem de logo
                    sx={{ width: 56, height: 56, marginRight: '10px' }} // Ajuste o tamanho do Avatar
                />
                <Typography variant='h6' sx={{ fontWeight: '700' }}>
                    Perfil da ONG responsável
                </Typography>
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    backgroundColor: '#46A95F',
                    padding: '45px',
                    position: 'relative',
                    bottom: 0,
                    width: '100%',
                    marginTop: '200px', // Espaço entre o conteúdo e o rodapé
                }}
            >
                <Typography sx={{ fontSize: '15px', color: 'white' }}>
                    Termos de Uso | LGPD
                </Typography>
            </Box>
        </Box>
    );
}
