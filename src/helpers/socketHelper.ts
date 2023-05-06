import { Socket } from "socket.io-client";
import { MessageType, initialMessage } from "../types/MessageType";

export const JoinRoom = (socket: Socket, name: string) => {
    let userData = { room: 1, userName: name }
    socket.emit("join_room", userData);
}

export const sendMessage = async (socket: Socket, messageData: Object) => {
    await socket.emit("send_message", messageData);
}

type Props = {
    socket: Socket,
    setMessageList: () => void
}
export const receiveMessage = ({ socket, setMessageList }: Props) => {
    socket.on("receive_message", (data) => {
        //setMessageList((list) => [...list, data as MessageType]);
    });
}