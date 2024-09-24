
import { LoginPage } from '../Components/Login';
import { HomePage } from '../Components/Home';
import { PerfilPage } from '../Components/Perfil';
import { ProjetosPage } from '../Components/Projetos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function IndexRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/perfil' element={<PerfilPage />} />
                <Route path='/projetos' element={<ProjetosPage />} />
            </Routes>
        </BrowserRouter>
    )

}