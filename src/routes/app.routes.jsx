import { Routes, Route } from "react-router-dom";
import { Portal } from "../pages/portal";
import { Projects } from "../pages/project";
import OngProfileComponent from "../pages/ong";
import { LayoutLogged } from "../components/LayoutLogged";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LayoutLogged />}>
                <Route path="/" element={<Portal />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/ong/:id" element={<OngProfileComponent />} />
            </Route>
        </Routes>
    )
}