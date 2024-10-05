import { Grid, Typography } from "@mui/material";

export const UserInfo = () => {
  return (
    <>
      <Grid container className="justify-center mt-20">
        <Grid item>
          <Typography className="text-gray-500 font-mono" variant="h5">
            ユーザー情報
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-5">
        <Grid item>
          <Typography className="text-gray-500 font-mono">ユーザー名: </Typography>
        </Grid>
        <Grid item className="ml-3">
          <Typography className="text-gray-500 font-mono">test</Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-5">
        <Grid item>
          <Typography className="text-gray-500 font-mono">メールアドレス: </Typography>
        </Grid>
        <Grid item className="ml-3">
          <Typography className="text-gray-500 font-mono">test@gmail.com</Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-5">
        <Grid item>
          <Typography className="text-gray-500 font-mono">登録日: </Typography>
        </Grid>
        <Grid item className="ml-3">
          <Typography className="text-gray-500 font-mono">2024/10/01</Typography>
        </Grid>
      </Grid>
    </>
  );
};
