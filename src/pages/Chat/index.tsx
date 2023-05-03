import { useContext, useEffect, useState } from 'react';
import * as C from './styles';
import { Context } from '../../context/Context';
import { Socket } from 'socket.io-client';
import { sendMessage, receiveMessage } from '../../helpers/socketHelper';
import { MessageType } from '../../types/MessageType';

type Props = {
    socket: Socket;
}
export const Chat = ({ socket }: Props) => {
    const { state } = useContext(Context);
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState<MessageType[]>([]);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data as MessageType]);
        });

        /*let receivedMsg = receiveMessage(socket);
        setMessageList((list) => [...list, receivedMsg]);
        console.log(messageList);*/
    }, [socket]);

    const handleSendMessage = async () => {
        const messageData = {
            room: 1,
            author: state.user.name,
            message: currentMessage,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        };

        await sendMessage(socket, messageData);
        setMessageList((list) => [...list, messageData]);
    }

    const identifyMyMsg = (name: string) => {
        return state.user.name === name ? 'me' : '';
    }

    return (
        <C.Container>
            <div className='chat-area'>
                <div className='chat-header'>
                    <div>SimpleChat - olá, <span>{state.user.name}</span></div>
                </div>

                <div className='chat-lists'>
                    <div className='chat-list-msgs'>
                        {messageList.map((msg, key) => (
                            <div className={`msg-area ${identifyMyMsg(msg.author)}`} key={key}>
                                <div className={`userName ${identifyMyMsg(msg.author)}`}>
                                    {msg.author}
                                </div>
                                <div className={`msg ${identifyMyMsg(msg.author)}`}>
                                    {msg.message}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='chat-list-users'>
                        <div className='userName me'>Bleno</div>
                        <div className='userName'>User 2</div>
                        <div className='userName'>User 3</div>
                    </div>
                </div>

                <div className='chat-input-box'>
                    <input
                        type='text'
                        placeholder='Digite a sua mensagem...'
                        onChange={e => setCurrentMessage(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSendMessage()} />
                    <button onClick={handleSendMessage}>Enviar</button>
                </div>
            </div>
        </C.Container>
    );
}