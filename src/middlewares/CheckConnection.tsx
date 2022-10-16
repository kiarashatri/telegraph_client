import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Offline from "../routes/Offline";

const CheckConnection = (): JSX.Element => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect((): void => {
    setIsOnline(navigator.onLine);
  }, [navigator.onLine]);

  return isOnline ? <Outlet /> : <Offline />;
};

export default CheckConnection;
