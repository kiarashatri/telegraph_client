import { Button, Grid, TextField, Typography } from "@mui/material";

export default function Register(): JSX.Element {
  return (
    <Grid container={true} style={{ minHeight: "100vh" }} spacing={5}>
      <Grid item>
        <Typography variant="h5" color="primary">
          Bonsaiilabs
        </Typography>
      </Grid>
      <Grid item style={{ border: "0.2px solid gray" }}>
        <Login />
      </Grid>
    </Grid>
  );
}

const Login = () => {
  return (
    <Grid container>
      <TextField
        variant="outlined"
        label="Email"
        fullWidth
        style={{ marginBottom: "2em" }}
      />
      <TextField
        variant="outlined"
        label="Password"
        fullWidth
        style={{ marginBottom: "2em" }}
      />
      <Button size="large" variant="contained" color="primary">
        LOGIN
      </Button>
    </Grid>
  );
};
