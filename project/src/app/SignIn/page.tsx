import { Header } from "@/share/components/Header";
import { Box, Grid, Typography } from "@mui/material";
import { SignInForm } from "./components/signInForm";

const SignIn = () => {
  return (
    <>
      <Header />
      <Grid container className="justify-center mt-10">
        <Grid item>
          <Typography className="text-gray-500 font-mono" variant="h4">
            Sign In
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-5">
        <Grid item>
          <SignInForm />
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;
