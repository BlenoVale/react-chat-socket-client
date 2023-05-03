import { Socket } from "socket.io-client";
import { MessageType, initialMessage } from "../types/MessageType";

export const JoinRoom = (socket: Socket) => {
    socket.emit("join_room", 1);
}

export const sendMessage = async (socket: Socket, messageData: Object) => {
    await socket.emit("send_message", messageData);
}

export const receiveMessage = (socket: Socket) => {
    let receivedMsg: MessageType = initialMessage;
    socket.on("receive_message", (data) => {
        console.log(receivedMsg);
        receivedMsg = data as MessageType;
    });
    return receivedMsg;
}