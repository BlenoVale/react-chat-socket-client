export type MessageType = {
    room: number;
    author: string;
    message: string;
    time: string;

}

export const initialMessage: MessageType = {
    room: 0,
    author: '',
    message: '',
    time: '',
}