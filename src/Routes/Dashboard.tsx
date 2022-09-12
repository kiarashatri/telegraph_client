import VerifyToken from "../Services/VerifyToken";
import { io, Socket } from "socket.io-client";
import { useEffect } from "react";

const socket: Socket = io("ws://localhost:5000", {
  auth: {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiaWRfdXNlcl9raWFyYXNoXzEyMyIsIm5hbWUiOiJraWFyYXNoIiwiYWdlIjoyMCwiaWF0IjoxNjYwMTUwMzk4fQ.2LbBzN_Pl367dThoO_lPb0v-Fj4MF8aZKTjzCSE06OY",
  },
});

export default function Dashboard(): JSX.Element {
  useEffect(() => {
    socket.once("tst", (args) => {
      console.log(socket.id);
      console.log(args);
    });
  });

  return (
    <>
      <button
        onClick={() => {
          socket.emit("from-client", " msg from client");
        }}
      >
        send!
      </button>
      <VerifyToken navigateTo="" />
    </>
  );
}
