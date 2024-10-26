import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Projects } from '../pages/project';
import { Register } from '../pages/register';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from '../pages/project/detail';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/project/:id' element={<ProjectDetail />} />
        </Routes>
    );
};
