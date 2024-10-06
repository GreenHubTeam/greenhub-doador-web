import { LoginPage } from '../Components/Login';
import { RegisterPage } from '../Components/Register';
import { Route, Routes } from 'react-router-dom';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/registro' element={<RegisterPage />} />
        </Routes>
    )
}
