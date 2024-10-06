"use client";
import { Grid, Typography } from "@mui/material";

type TitleProps = {
  name?: string;
};

export const PageTitle = (props: TitleProps) => {
  const { name } = props;
  return (
    <Grid container className="justify-center mt-10">
      <Grid item>
        <Typography className="text-gray-500 font-mono" variant="h4">
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};
