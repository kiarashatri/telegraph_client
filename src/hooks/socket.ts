import { io, Socket } from "socket.io-client";

const connectSocket = (inputAccessToken: string): Socket => {
  return io(String(process.env.REACT_APP_SOCKET_URI), {
    auth: {
      accessToken: inputAccessToken,
    },
  });
};

export default connectSocket;
