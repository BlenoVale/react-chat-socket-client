import { useContext, useState } from 'react';
import * as C from './styles';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { JoinRoom } from '../../helpers/socketHelper';

type Props = {
    socket: Socket;
}
export const Login = ({ socket }: Props) => {
    const { state, dispatch } = useContext(Context);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleEnterChat = () => {
        if (name.trim() !== '') {
            dispatch({
                type: 'SET_NAME',
                payload: { name }
            });
            JoinRoom(socket);
            navigate('/chat');
        } else {
            alert('Digite o seu Nome para prosseguir.')
        }
    }

    return (
        <C.Container>
            <div className='login-area'>
                <h1>Por favor, digite o seu nome para continuar.</h1>
                <div className='login-input-area'>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />
                    <button onClick={handleEnterChat}>ENTRAR</button>
                </div>
            </div>
        </C.Container>
    );
}