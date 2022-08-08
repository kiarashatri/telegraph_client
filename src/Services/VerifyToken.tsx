import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";

type VerifyTokenType = {
  verify: boolean | null;
  request_completed: boolean;
};

async function postVerifyToServer(token?: string | undefined) {
  let verify;
  let inScopeToken: String | null;

  if (localStorage.getItem("ACCESS_TOKEN") === null) {
    return { verify: false };
  }

  if (token === undefined) {
    inScopeToken = localStorage.getItem("ACCESS_TOKEN");
  } else {
    inScopeToken = token;
  }

  try {
    await axios
      .post<VerifyTokenType>(
        `${process.env.REACT_APP_API_SERVER}/verify_token`,
        { ACCESS_TOKEN: inScopeToken },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        verify = res.data.verify;
        if (!res.data.verify) {
          localStorage.removeItem("ACCESS_TOKEN");
        }
      });
  } catch (error) {
    verify = null;
  }

  return { verify };
}

export default function VerifyToken() {
  let navigate2Home = useNavigate();
  const [jsxVerify, setJsxVerify] = useState<Boolean | null>();

  useEffect(() => {
    postVerifyToServer().then(({ verify }) => {
      if (verify) {
        navigate2Home("/");
      } else {
        setJsxVerify(!verify);
      }
    });
  }, []);

  return (
    <>
      {jsxVerify === null ? (
        <Alert severity="error">
          You Are Offline , please reload the page after getting online
        </Alert>
      ) : (
        false
      )}
    </>
  );
}
