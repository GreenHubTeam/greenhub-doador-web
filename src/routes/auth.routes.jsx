import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Route, Routes } from 'react-router-dom';
import { LayoutUnlogged } from '../components/LayoutUnlogged';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LayoutUnlogged />} >
                <Route path='/' element={<Home />} />
            </Route>

            <Route path='/signin' element={<Login />} />
        </Routes>
    );
};
