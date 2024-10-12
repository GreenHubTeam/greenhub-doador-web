import { LoginPage } from '../pages/Login';
import { RegisterPage } from '../pages/Register';
import { Route, Routes } from 'react-router-dom';
import { NoHomePage } from '../pages/Nohome';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<NoHomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/registro' element={<RegisterPage />} />
        </Routes>
    )
}
