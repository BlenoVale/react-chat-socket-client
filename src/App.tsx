import { useEffect, useState } from 'react'
import io from 'socket.io-client';
import { Router } from './router';
import { Context, ContextProvider } from './context/Context';

const socket = io("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState([]);
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');

  const sendMessage = () => {
    socket.emit("send_message", { message });
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  );
}

export default App;

/**
    <div className="App">
      <input placeholder='Message...' onChange={e => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      
      {messageReceived}
    </div>
 */