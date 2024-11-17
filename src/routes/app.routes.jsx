import { Portal } from "../pages/portal";
import { Projects } from "../pages/project";
import OngProfileComponent from "../pages/ong";
import { Routes, Route } from "react-router-dom";
import ProjectDetail from "../pages/project/detail";
import DonationSuccess from "../pages/donate/success";
import { LayoutLogged } from "../components/LayoutLogged";
import ProfileComponent from "../pages/profile";
import { NotFoundPage } from "../pages/not-found";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LayoutLogged />}>
                <Route path="/" element={<Portal />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/project/donate/success" element={<DonationSuccess />} />
                <Route path="/profile" element={<ProfileComponent />} />
                <Route path="/ong/:id" element={<OngProfileComponent />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
};