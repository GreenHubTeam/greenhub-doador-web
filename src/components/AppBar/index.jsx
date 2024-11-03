import { LogoComponent } from '../Logo';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectChangeLanguage from '../SelectChangeLanguage';
import { Article, ExitToApp, Home, Person } from '@mui/icons-material';
import { AppBar, Button, IconButton, Stack, Toolbar, Tooltip } from '@mui/material';

// eslint-disable-next-line react/prop-types
export function AppBarComponent({ color = 'white' }) {
    const path = useLocation();
    const navigate = useNavigate();
    const { token, logout } = useAuth();

    return (
        <AppBar sx={{ color, backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }} position="static">
            <Toolbar sx={{ padding: '.6rem' }}>
                <LogoComponent />

                <Stack
                    direction='row'
                    flexGrow={1}
                    spacing={2}
                    justifyContent='end'
                >
                    <SelectChangeLanguage />
                    <Button
                        color={path.pathname === '/' ? "success" : "inherit"}
                        onClick={() => navigate('/')}
                        startIcon={<Home />}
                    >
                        Home
                    </Button>
                    <Button
                        color={path.pathname === '/project' ? "success" : "inherit"}
                        onClick={() => navigate('/project')}
                        startIcon={<Article />}
                    >
                        Projetos
                    </Button>

                    {!token && (
                        <Stack direction='row' spacing={2}>
                            <Button
                                variant="contained"
                                sx={{ borderColor: 'gray', color: 'black', backgroundColor: 'white' }}
                                onClick={() => navigate('/signup')}
                            >
                                Registre-se
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: 'green' }}
                                onClick={() => navigate('/signin')}
                            >
                                Login
                            </Button>
                        </Stack>
                    )}

                    {token && (
                        <Stack direction='row' spacing={2}>
                            <Tooltip title="Sair">
                                <IconButton onClick={() => {
                                    logout();
                                    navigate('/');
                                }}>
                                    <ExitToApp />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Ver perfil">
                                <IconButton onClick={() => navigate('/profile')}>
                                    <Person />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    )}

                </Stack>
            </Toolbar>
        </AppBar>
    );
}