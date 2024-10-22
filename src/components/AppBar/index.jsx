import { LogoComponent } from '../Logo';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Stack, Toolbar } from '@mui/material';

export function AppBarComponent() {
    const router = useNavigate();

    return (
        <AppBar sx={{ backgroundColor: 'transparent', color: 'white', border: 'none', boxShadow: 'none' }}
            position="static">
            <Toolbar sx={{ padding: '.6rem' }}>
                <LogoComponent />

                <Stack
                    direction='row'
                    flexGrow={1}
                    spacing={2}
                    justifyContent='end'
                >
                    <Button color="inherit" onClick={() => router('/')}>
                        Home
                    </Button>
                    <Button color="inherit" onClick={() => router('/projects')}>
                        Projetos
                    </Button>

                    <Stack direction='row' spacing={2}>
                        <Button
                            variant="contained"
                            sx={{ borderColor: 'gray', color: 'black', backgroundColor: 'white' }}
                            onClick={() => router('/signup')}
                        >
                            Registre-se
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: 'green' }}
                            onClick={() => router('/signin')}
                        >
                            Login
                        </Button>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}