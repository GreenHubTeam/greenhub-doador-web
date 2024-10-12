import { api } from "../../libs/axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExitToApp from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from "../../context/authContext";
import { HeaderComponent } from "../../Components/Header";
import { CardProject } from '../../Components/cardproject';
import FilterListIcon from '@mui/icons-material/FilterList';
import Person from '@mui/icons-material/AccountCircle';
import { Box, Button, IconButton, TextField, Typography, InputAdornment, Divider, Grid2, Stack } from "@mui/material";

export function HomePage() {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState([]);

    const { user } = useAuth();

    const { logout } = useAuth();

    function Logout() {
        logout();
        navigate('/')
    }

    const fetchProjects = async () => {
        try {
            const response = await api.get(`/project/approved`);
            setProjectData(response.data);
        } catch (error) {
            console.error("Erro ao buscar os projetos:", error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

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
                    marginTop: '-115px',
                }}
            >
                <IconButton 
                    onClick={Logout}
                    sx={{ 
                        marginLeft: 'auto',
                        padding: '10px',
                        fontSize: 40,
                        color: '#000000'
                    }}
                >
                    <ExitToApp />
                </IconButton>

                <IconButton sx={{ margin: '8px', padding: '10px',}}>
                    <Person sx={{ fontSize: 40, color: '#000000' }} />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0',
                    position: 'relative',
                    marginTop: '50px'
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
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    sx={{
                                        display: 'flex',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <SearchIcon />

                                    <Divider orientation="vertical" flexItem />
                                </InputAdornment>
                            ),
                        },
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
                <Grid2 container spacing={2}>
                    {
                        projectData.map(
                            (project, index) => (
                                <Grid2 key={index} size={4}>
                                    <CardProject
                                        name={project.name}
                                        description={project.description}
                                        imagePath={project.imagePath}
                                        status={project.status}
                                        id={project.id}
                                    />
                                </Grid2>
                            )
                        )
                    }
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
