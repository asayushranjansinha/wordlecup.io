import socketIOClient from "socket.io-client";

const ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;
const useSocket = () => {
  const newSocket = socketIOClient(ENDPOINT, { transports: ["websocket"] });
  return newSocket
};

export default useSocket;
