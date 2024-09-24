
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Components/Login';
import { HomePage } from '../Components/Home';
import { PerfilPage } from '../Components/Perfil';
import { ProjetosPage } from '../Components/Projetos';




export function IndexRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/Perfil' element={<PerfilPage />} />
                <Route path='/Projetos' element={<ProjetosPage />} />


            </Routes>
        </BrowserRouter>
    )

}