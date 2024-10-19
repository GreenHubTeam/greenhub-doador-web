import { HomePage } from '../Components/Home';
import { PerfilPage } from '../Components/Perfil';
import { ProjetosPage } from '../Components/Projetos';
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