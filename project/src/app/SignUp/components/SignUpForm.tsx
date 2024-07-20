import { Paper, Grid, Button, TextField } from "@mui/material";

export const SignUpForm = () => {
  return (
    <>
      <Paper elevation={0} sx={{ height: "100vh" }}>
        <Grid container>
          <Grid item className="w-96">
            <TextField
              name="name"
              label="ユーザー名"
              fullWidth
              InputLabelProps={{ className: "font-mono" }}
            />
          </Grid>
        </Grid>
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
        <Grid container className="mt-10">
          <Grid item className="w-96">
            <TextField
              name="passwordConfirmation"
              label="パスワード確認"
              fullWidth
              InputLabelProps={{ className: "font-mono" }}
            />
          </Grid>
        </Grid>
        <Grid container className="justify-center mt-10">
          <Grid item>
            <Button
              className="text-gray-500 border-gray-500 font-mono"
              variant="text"
              sx={{
                height: "60px",
                width: "130px",
              }}
            >
              登録
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
