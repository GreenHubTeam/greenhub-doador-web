import { AuthRoutes } from "./auth.routes";
import { BrowserRouter } from "react-router-dom";

export function RoutesMain() {
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}