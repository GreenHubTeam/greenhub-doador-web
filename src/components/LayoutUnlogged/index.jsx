import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppBarComponent } from "../AppBar";

export function LayoutUnlogged() {
    return (
        <Box flexGrow={1}>
            <AppBarComponent />
            <Outlet />
        </Box>
    )
}