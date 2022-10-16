import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import verifyToken from "../hooks/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { resetUser, setAccessToken, setId } from "../redux/slice/user";

const CheckAuth = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState<boolean>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location: any = useLocation();

  useEffect(() => {
    const sessionAccessToken = sessionStorage.getItem("ACCESS_TOKEN");
    const localAccessToken = localStorage.getItem("ACCESS_TOKEN");
    let localScopeAccessToken: string = "";

    if (sessionAccessToken !== null) {
      localScopeAccessToken = sessionAccessToken;
    } else if (localAccessToken !== null) {
      localScopeAccessToken = localAccessToken;
    } else {
      navigate("/login");
    }

    const sessionUserId = sessionStorage.getItem("USER_ID");
    const localUserId = localStorage.getItem("USER_ID");
    let localScopeUserId: string = "";

    if (sessionUserId !== null) {
      localScopeUserId = sessionUserId;
    } else if (localUserId !== null) {
      localScopeUserId = localUserId;
    } else {
      navigate("/login");
    }

    verifyToken(String(localScopeAccessToken))
      .then((response: boolean) => {
        setIsLogin(response);

        if (response) {
          dispatch(setAccessToken(String(localScopeAccessToken)));
          dispatch(setId(String(localScopeUserId)));
        } else {
          dispatch(resetUser());
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("USER_ID");
          sessionStorage.removeItem("ACCESS_TOKEN");
          sessionStorage.removeItem("USER_ID");
          navigate("/login");
        }
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return isLogin ? (
    <Outlet />
  ) : (
    <>
      <p>access denied </p>
    </>
  );
};

export default CheckAuth;
