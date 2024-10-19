import { Home } from '../pages/home';
import { Route, Routes } from 'react-router-dom';
import { LayoutUnlogged } from '../components/LayoutUnlogged';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LayoutUnlogged />} >
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    );
};
