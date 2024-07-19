import { Button, Grid, Paper, TextField } from "@mui/material";

export const SignInForm = () => {
  return (
    <>
      <Paper elevation={0} sx={{ height: "100vh" }}>
        <Grid container className="mt-10">
          <Grid item className="w-96">
            <TextField
              name="email"
              label="メールアドレス"
              fullWidth
              InputLabelProps={{ className: "font-mono" }}
            />
          </Grid>
        </Grid>
        <Grid container className="mt-10">
          <Grid item className="w-96">
            <TextField
              name="password"
              label="パスワード"
              fullWidth
              InputLabelProps={{ className: "font-mono" }}
            />
          </Grid>
        </Grid>
        <Grid container className="justify-center mt-16">
          <Grid item>
            <Button
              className="text-gray-500 border-gray-500 font-mono"
              variant="text"
              disabled={false}
              sx={{
                height: "60px",
                width: "130px",
              }}
            >
              サインイン
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
