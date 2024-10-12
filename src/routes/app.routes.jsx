import { HomePage } from '../pages/Home';
import { PerfilPage } from '../pages/Perfil';
import { ProjetosPage } from '../pages/Projetos';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/perfil' element={<PerfilPage />} />
            <Route path='/projetos' element={<ProjetosPage />} />
        </Routes>
    )
}