import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { Route, Routes } from 'react-router-dom';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
        </Routes>
    );
};
