import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login';
import { Chat } from './pages/Chat';
import { RequireAuth } from './helpers/RequireAuth';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/chat' element={<RequireAuth><Chat/></RequireAuth>}/>
            </Routes>
        </BrowserRouter>
    );
}