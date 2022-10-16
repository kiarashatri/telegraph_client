import { useEffect } from "react";
import { RootState } from "../redux/configureStore";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Dashboard(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state: RootState) => state.user.id);
  const aa = useAppSelector((state: RootState) => state.user.accessToken);

  useEffect(() => {}, []);

  return (
    <>
      <button onClick={() => {}}>dashboard</button>
      <p>redux res: {id}</p>
      <p>user: {aa}</p>
    </>
  );
}
