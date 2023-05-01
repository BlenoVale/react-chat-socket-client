import { useContext } from 'react';
import * as C from './styles';
import { Context } from '../../context/Context';

export const Chat = () => {
    const {state} = useContext(Context);

    return (
        <C.Container>
            <div className='chat-area'>
                <div className='chat-header'>
                    <div>SimpleChat - olá, <span>{state.user.name}</span></div>
                </div>

                <div className='chat-lists'>
                    <div className='chat-list-msgs'>
                        <div className='msg-area right-side'>
                            <div className='userName me'>Bleno</div>
                            <div className='msg me'>Olá, tudo bem? Estou testando a mensagem.</div>
                        </div>
                        <div className='msg-area'>
                            <div className='userName'>User</div>
                            <div className='msg'>Olá, tudo bem? Estou testando a mensagem.</div>
                        </div>
                    </div>
                    <div className='chat-list-users'>
                        <div className='userName me'>Bleno</div>
                        <div className='userName'>User 2</div>
                        <div className='userName'>User 3</div>
                    </div>
                </div>

                <div className='chat-input-box'>
                    <input type='text' placeholder='Digite a sua mensagem...'/>
                    <button>Enviar</button>
                </div>
            </div>
        </C.Container>
    );
}