import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { HeaderComponent } from "../Header";
import FilterListIcon from '@mui/icons-material/FilterList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, IconButton, TextField, Typography, InputAdornment, Grid2 } from "@mui/material";

export function HomePage() {
    const navigate = useNavigate();

    return (
        <Box>
            <HeaderComponent />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 1rem',
                    borderBottom: '1px solid #000000',
                    marginTop: '-80px',
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
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0',
                    position: 'relative',
                    marginTop: '50px' // Adicionado para o posicionamento do texto
                }}
            >
                <Box
                    component='img'
                    src='/fotoonça.png'
                    alt='imagem de fundo do perfil'
                    sx={{
                        height: '350px',
                        width: '100%',
                        maxWidth: '1000px',
                        borderRadius: '20px',
                    }}
                />
                <Typography
                    sx={{
                        position: 'absolute',
                        top: '30%',
                        left: '45%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '35px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    Gostaria de fazer a diferença?
                </Typography>
                <Typography
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '34%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    Apoie um projeto!
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                    gap: '1rem',

                }}
            >
                <IconButton sx={{ backgroundColor: '#ffffff', color: 'black', fontSize: '40px' }}>
                    <FilterListIcon />
                </IconButton>
                <TextField
                    variant="outlined"
                    sx={{
                        width: '850px',
                        height: '50px',
                        backgroundColor: '#D9D9D9',
                        borderRadius: '20px',
                        '& fieldset': { border: 'none' },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" sx={{ backgroundColor: '#3A914D', borderRadius: '17px' }}>
                    Buscar
                </Button>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10rem'
            }}>
                <Grid2 container spacing={10}>
                    <Grid2 size={6}>
                        <Box sx={{
                            padding: '2rem',
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: '550px',
                            borderWidth: '2px',
                            borderRadius: '8px',
                            backgroundColor: '#E7E7E7',
                        }}>
                            <Box>
                                <Box
                                    component='img'
                                    src='/ecofuturo.png'
                                    alt='Logo da EcoFuturo'
                                    sx={{
                                        height: '250px',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography sx={{
                                        padding: '0 15px',
                                        fontSize: '28px',
                                        fontWeight: 'bold'
                                    }}>EcoFuturo</Typography>

                                </Box>

                                <Typography sx={{
                                    padding: '20px 15px',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}>
                                    A EcoFuturo é uma ONG dedicada à preservação do meio ambiente e à conscientização sobre a
                                    importância do reflorestamento. Focada em educar comunidades sobre o impacto das mudanças climáticas
                                    , promove campanhas de plantio de árvores e redução de resíduos.
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            backgroundColor: '#3A914D',
                                            height: '3rem',
                                            borderRadius: '20px',
                                            width: '200px'
                                        }}
                                        onClick={() => navigate('/editar')}
                                    >
                                        Saiba mais
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>

                    <Grid2 size={6}>
                        <Box sx={{
                            padding: '2rem',
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: '550px',
                            borderWidth: '2px',
                            borderRadius: '8px',
                            backgroundColor: '#E7E7E7',
                        }}>
                            <Box>
                                <Box
                                    component='img'
                                    src='/cidadaniaviva.jpg'
                                    alt='Logo da cidadania'
                                    sx={{
                                        height: '250px',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography sx={{
                                        padding: '0 15px',
                                        fontSize: '28px',
                                        fontWeight: 'bold',
                                    }}>Cidadania Viva</Typography>


                                </Box>

                                <Typography sx={{
                                    padding: '20px 15px',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}>
                                    A ONG Cidadania Viva atua para garantir direitos básicos a comunidades carentes, com ênfase em
                                    educação, saúde e assistência social. Suas ações incluem programas de alfabetização, campanhas de
                                    vacinação e suporte a famílias em situação de vulnerabilidade.
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            backgroundColor: '#3A914D',
                                            height: '3rem',
                                            borderRadius: '20px',
                                            width: '200px'
                                        }}
                                        onClick={() => navigate('/editar')}
                                    >
                                        Saiba mais
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>

                    <Grid2 size={6}>
                        <Box sx={{
                            padding: '2rem',
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: '550px',
                            borderWidth: '2px',
                            borderRadius: '8px',
                            backgroundColor: '#E7E7E7',
                        }}>
                            <Box>
                                <Box
                                    component='img'
                                    src='/amoranimal.png'
                                    alt='Logo da animal'
                                    sx={{
                                        height: '250px',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography sx={{
                                        padding: '0 15px',
                                        fontSize: '28px',
                                        fontWeight: 'bold',
                                    }}>Amor Animal</Typography>


                                </Box>

                                <Typography sx={{
                                    padding: '20px 15px',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}>
                                    Amor Animal é uma ONG voltada para o resgate, tratamento e adoção de animais abandonados.
                                    Além de oferecer abrigos temporários, promove campanhas de conscientização contra maus-tratos e
                                    busca incentivar a adoção responsável.
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            backgroundColor: '#3A914D',
                                            height: '3rem',
                                            borderRadius: '20px',
                                            width: '200px'
                                        }}
                                        onClick={() => navigate('/editar')}
                                    >
                                        Saiba mais
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>

                    <Grid2 size={6}>
                        <Box sx={{
                            padding: '2rem',
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: '550px',
                            borderWidth: '2px',
                            borderRadius: '8px',
                            backgroundColor: '#E7E7E7',
                        }}>
                            <Box>
                                <Box
                                    component='img'
                                    src='/Saúde para Todos.jpg'
                                    alt='Logo da Saúde para Todos'
                                    sx={{
                                        height: '250px',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography sx={{
                                        padding: '0 15px',
                                        fontSize: '28px',
                                        fontWeight: 'bold',
                                    }}>Saúde para Todos</Typography>


                                </Box>

                                <Typography sx={{
                                    padding: '20px 15px',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}>
                                    A ONG Saúde para Todos trabalha para melhorar o acesso a serviços de saúde em regiões remotas e carentes. Seu foco é
                                    oferecer cuidados médicos básicos, treinamento para profissionais de saúde locais e promover campanhas de prevenção de
                                    doenças.
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            backgroundColor: '#3A914D',
                                            height: '3rem',
                                            borderRadius: '20px',
                                            width: '200px'
                                        }}
                                        onClick={() => navigate('/editar')}
                                    >
                                        Saiba mais
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>

            <Box
                sx={{
                    backgroundColor: '#46A95F',
                    padding: '45px',
                    position: 'relative',
                    bottom: 0,
                    width: '100%',
                }}
            >
                <Typography sx={{ fontSize: '15px', color: 'white' }}>
                    Termos de Uso | LGPD
                </Typography>

            </Box>
        </Box>
    );
}
