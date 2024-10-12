import { Box, IconButton, Typography, Button, Avatar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HeaderComponent } from "../../Components/Header";

export function PerfilPage() {
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
                src='/fundoperfil.jpg'
                alt='imagem de fundo do perfil'
                sx={{
                    height: '300px',
                    width: '85%', // Ajuste a largura para 100%
                    margin: '0 auto', // Centraliza horizontalmente
                    display: 'block', // Exibe como um bloco
                    objectFit: 'cover', // Ajusta a imagem para cobrir o espaço
                    borderRadius: '20px',
                    marginTop: '50px', // Espaço entre a navbar e a imagem de fundo
                }}
            />
            <Box sx={{
                display: 'flex',
                margin: '-90px 130px',
                alignItems: 'center',
                gap: '2rem',
                objectFit: 'cover', // Ajusta a imagem para cobrir o espaço

            }}>
                <Box
                    component='img' src='avatarperfil.jpg'
                    alt='Foto de perfil da ONG'
                    sx={{
                        height: '120px',
                        borderRadius: '100px',
                    }}
                />

                <Typography
                    variant='h3'
                    sx={{
                        padding: '0',
                        margin: '0',
                        fontSize: '30px',
                        marginBottom: '50px',
                        marginTop: '50px',
                        fontWeight: 'bold',
                        color: 'white',
                    }}
                >
                    João Silva
                </Typography>
            </Box>
            <Box>
                <Typography variant='h3'
                    sx={{
                        padding: '0',
                        margin: '0',
                        fontSize: '26px',
                        marginBottom: '100px',
                        marginTop: '150px',
                        marginLeft: '100px',
                        fontWeight: 'bold',
                        color: 'black',
                    }}
                >
                    Projetos que você ta apoiando
                </Typography>
            </Box>

            {/* Barra com logo e botões */}
            <Box
                sx={{
                    backgroundColor: '#D9D9D9',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '0 100px', // Espaço nas laterais
                    borderRadius: '10px', // Bordas arredondadas
                    marginTop:'-70px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                        alt="Logo EcoFuturo"
                        src="/ecofuturo.png" // Substitua pela URL da sua imagem
                        sx={{ width: 80, height: 80, marginRight: '10px' }} // Tamanho do avatar
                    />
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        EcoFuturo
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Button variant="contained" sx={{ backgroundColor: '#2F5A3A', borderRadius:'20px' }}>Ver Detalhes</Button>
                    <Button variant="contained" sx={{ backgroundColor: '#3A914D', borderRadius:'20px' }}>Doe Novamente</Button>
                </Box>
            </Box>


            <Box
                sx={{
                    backgroundColor: '#D9D9D9',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '0 100px', // Espaço nas laterais
                    borderRadius: '10px', // Bordas arredondadas
                    marginTop:'20px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                        alt="Logo EcoFuturo"
                        src="/Saúde para Todos.jpg" // Substitua pela URL da sua imagem
                        sx={{ width: 80, height: 80, marginRight: '10px' }} // Tamanho do avatar
                    />
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Saúde para Todos
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Button variant="contained" sx={{ backgroundColor: '#2F5A3A', borderRadius:'20px' }}>Ver Detalhes</Button>
                    <Button variant="contained" sx={{ backgroundColor: '#3A914D', borderRadius:'20px' }}>Doe Novamente</Button>
                </Box>
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
