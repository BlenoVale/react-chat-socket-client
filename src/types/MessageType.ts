export type MessageType = {
    room: number;
    author: string;
    message: string;
    time: string;

}

export const initialMessage = {
    room: 0,
    author: '',
    message: '',
    time: '',
}