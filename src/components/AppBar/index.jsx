import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectChangeLanguage from '../SelectChangeLanguage';
import { Article, ExitToApp, Home, Menu, Person } from '@mui/icons-material';
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Toolbar, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { LogoComponent } from '../Logo';

// eslint-disable-next-line react/prop-types
export function AppBarComponent({ color = 'white' }) {
    const path = useLocation();
    const navigate = useNavigate();
    const { token, logout } = useAuth();
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:768px)");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleNavigate = (route) => {
        navigate(route);
        setDrawerOpen(false);
    };

    const DrawerContent = (
        <List>
            <ListItem button onClick={() => handleNavigate('/')}>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleNavigate('/project')}>
                <ListItemIcon><Article /></ListItemIcon>
                <ListItemText primary="Projetos" />
            </ListItem>
            {!token && (
                <>
                    <ListItem button onClick={() => handleNavigate('/signup')}>
                        <ListItemText primary="Registre-se" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigate('/signin')}>
                        <ListItemText primary="Login" />
                    </ListItem>
                </>
            )}
            {token && (
                <>
                    <ListItem button onClick={() => handleNavigate('/profile')}>
                        <ListItemIcon><Person /></ListItemIcon>
                        <ListItemText primary="Ver perfil" />
                    </ListItem>
                    <ListItem button onClick={() => {
                        logout();
                        handleNavigate('/');
                    }}>
                        <ListItemIcon><ExitToApp /></ListItemIcon>
                        <ListItemText primary="Sair" />
                    </ListItem>
                </>
            )}
        </List>
    );

    return (
        <AppBar sx={{ color, backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }} position="static">
            <Toolbar sx={{ padding: '.6rem', justifyContent: 'space-between' }}>
                <LogoComponent />

                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <Menu />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        >
                            {DrawerContent}
                        </Drawer>
                    </>
                ) : (
                    <Stack
                        direction="row"
                        flexGrow={1}
                        spacing={2}
                        justifyContent="end"
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
                            <Stack direction="row" spacing={2}>
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
                            <Stack direction="row" spacing={2}>
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
                )}
            </Toolbar>
        </AppBar>
    );
}