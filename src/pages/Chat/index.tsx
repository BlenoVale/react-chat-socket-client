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
    const [connectedUserList, setConnectedUserList] = useState([]);
    const [messageList, setMessageList] = useState<MessageType[]>([]);

    useEffect(() => {
        console.log('testando');
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data as MessageType]);
        });

        socket.on('list-update', (data) => {
            let listWithoutSender = data.list.filter((item: string) => { return item != state.user.name });
            setConnectedUserList(listWithoutSender);
        });
    }, [socket]);

    const handleSendMessage = async () => {
        if (currentMessage.trim() !== '') {
            const messageData: MessageType = {
                room: 1,
                author: state.user.name,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            };

            await sendMessage(socket, messageData);
            setMessageList((list) => [...list, messageData]);
        }

        setCurrentMessage('');
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
                        <div className={`userName me`}>{state.user.name}</div>
                        {connectedUserList.map((name, key) => (
                            <div className={`userName`} key={key}>{name}</div>
                        ))}
                    </div>
                </div>

                <div className='chat-input-box'>
                    <input
                        type='text'
                        value={currentMessage}
                        placeholder='Digite a sua mensagem...'
                        onChange={e => setCurrentMessage(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSendMessage()} />
                    <button onClick={handleSendMessage}>Enviar</button>
                </div>
            </div>
        </C.Container >
    );
}