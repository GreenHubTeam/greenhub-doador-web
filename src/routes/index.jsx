import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function RoutesMain() {
    const { token } = useAuth();

    return (
        <BrowserRouter>
            {token ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}