import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login';
import { Chat } from './pages/Chat';
import { RequireAuth } from './helpers/RequireAuth';
import { Socket } from 'socket.io-client';

type Props = {
    socket: Socket;
}
export const Router = ({socket}: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login socket={socket}/>}/>
                <Route path='/chat' element={<RequireAuth><Chat socket={socket}/></RequireAuth>}/>
            </Routes>
        </BrowserRouter>
    );
}