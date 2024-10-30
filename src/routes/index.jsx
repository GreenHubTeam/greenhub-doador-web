
import { LoginPage } from '../Components/Login';
import { RegisterPage } from '../Components/Register';
import { HomePage } from '../Components/Home';
import { PerfilPage } from '../Components/Perfil';
import { ProjetosPage } from '../Components/Projetos';
import { Doacaosucesso } from '../Components/doacaosucesso';
import { Doacaofake } from '../Components/doacaofake';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function IndexRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/registro' element={<RegisterPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/perfil' element={<PerfilPage />} />
                <Route path='/projetos' element={<ProjetosPage />} />
                <Route path='/doacaosucesso' element={< Doacaosucesso />} />
                <Route path='/doacaofake' element={< Doacaofake />} />
            </Routes>
        </BrowserRouter>
    )

}