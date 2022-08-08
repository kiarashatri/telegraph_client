import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostLogin from "../Services/PostLogin";

export default function Login(): JSX.Element {
  const [status, setStatus] = useState<number | undefined>(0);
  const [data, setData] = useState<{
    access_token: string;
    authenticated: string;
  }>({ access_token: "", authenticated: "" });
  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleReq() {
    PostLogin(inputUsername, inputPassword).then(
      ({ post_data, post_status }) => {
        setStatus(post_status);
        setData(post_data);

        if (status === 200 && post_data.authenticated === "ok") {
          localStorage.setItem("ACCESS_TOKEN", post_data.access_token);
          navigate("/");
        }
      }
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">login!</h1>
      <button onClick={handleReq}>login</button>

      {
        /* user_not_found alert from server */
        data.authenticated === "user_not_found" && (
          <Alert severity="error">User Not Found , please register first</Alert>
        )
      }

      {
        /* incorrect_password alert from server */
        data.authenticated === "incorrect_password" && (
          <Alert severity="error">
            Your Password incorrect , please try again
          </Alert>
        )
      }

      {
        /* email_confirmation_require alert from server */
        data.authenticated === "email_confirmation_require" && (
          <Alert severity="error">
            Your Email isn't verify yet! please verify your email first.
          </Alert>
        )
      }
    </>
  );
}
