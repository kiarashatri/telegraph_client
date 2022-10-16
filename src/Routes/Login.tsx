import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "../components/macro/Copyright";
import postLogin from "../hooks/postLogin";
import { useState } from "react";
import PostLoginHookResponseType from "../Types/hooks/postLoginHookResonseType";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import theme from "../helpers/theme";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [remember, setRemember] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginResponse, setLoginResponse] = useState<boolean>();

  console.log(theme.palette.primary.light);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setLoginResponse(true);
    const form = new FormData(event.currentTarget);
    const username = String(form.get("username"));
    const password = String(form.get("password"));
    postLogin(username, password).then(
      (response: PostLoginHookResponseType) => {
        setLoading(false);
        if (response.authenticated) {
          sessionStorage.setItem("ACCESS_TOKEN", String(response.accessToken));
          sessionStorage.setItem("USER_ID", String(response.userId));
          if (remember) {
            localStorage.setItem("ACCESS_TOKEN", String(response.accessToken));
            localStorage.setItem("USER_ID", String(response.userId));
          }
          navigate("/");
        } else {
          setLoginResponse(false);
        }
      }
    );
  };

  return (
    <Grid container>
      <CssBaseline />
      <Grid>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              onChange={(e, val) => setRemember(val)}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot_password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Copyright
          sx={{
            position: "fixed",
            bottom: theme.spacing(2),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
