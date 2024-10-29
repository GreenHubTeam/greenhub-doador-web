import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppBarComponent } from "../AppBar";
import { FooterComponent } from "../Footer";

export function LayoutLogged() {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5' }}>
            <AppBarComponent color="black" />
            <Outlet />
            <FooterComponent />
        </Box>
    )
}