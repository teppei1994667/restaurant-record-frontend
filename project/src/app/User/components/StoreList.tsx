import { Grid, Typography } from "@mui/material";

export const StoreList = () => {
  return (
    <>
      <Grid container className="justify-center mt-10">
        <Grid item>
          <Typography className="text-gray-500 font-mono" variant="h5">
            店舗一覧
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-5">
        <Grid item>
          <Typography className="text-gray-500 font-mono">テスト店1</Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-5">
        <Grid item>
          <Typography className="text-gray-500 font-mono">テスト店2</Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-5">
        <Grid item>
          <Typography className="text-gray-500 font-mono">テスト店3</Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-5">
        <Grid item>
          <Typography className="text-gray-500 font-mono">テスト店4</Typography>
        </Grid>
      </Grid>
    </>
  );
};
