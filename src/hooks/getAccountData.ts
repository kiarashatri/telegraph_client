import { Socket } from "socket.io-client";
import { RootState } from "../redux/configureStore";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  setBiography,
  setConnection,
  setFamily,
  setName,
  setPhoto,
  setUsername,
} from "../redux/slice/user";
import GetUserProfileEmitResponseType from "../Types/emitsResponse/GetUserProfileEmitResponseType";

const getAccountInfo = (socket: Socket): void => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state: RootState) => state.user.id);

  socket.on("connect", () => {
    dispatch(setConnection(socket.connected));
  });
  socket.on("disconnect", () => {
    dispatch(setConnection(socket.connected));
  });

  socket.emit(
    "user/profile/get",
    userId,
    (response: GetUserProfileEmitResponseType) => {
      dispatch(setName(response.name));
      dispatch(setFamily(response.family));
      dispatch(setUsername(response.username));
      dispatch(setBiography(response.biography));
      dispatch(setPhoto(response.photo));
    }
  );
};

export default getAccountInfo;
