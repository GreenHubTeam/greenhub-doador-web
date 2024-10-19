import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// eslint-disable-next-line react/prop-types
export default function ThemeClientProvider({ children }) {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}