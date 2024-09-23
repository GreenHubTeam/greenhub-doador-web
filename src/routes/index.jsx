
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Components/Login';
import { HomePage } from '../Components/Home';

export function IndexRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/home' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )

}