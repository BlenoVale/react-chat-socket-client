import { useContext, useState } from 'react';
import * as C from './styles';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { state, dispatch } = useContext(Context);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleEnterChat = () => {
        if (name !== '') {
            dispatch({
                type: 'SET_NAME',
                payload: { name }
            });
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