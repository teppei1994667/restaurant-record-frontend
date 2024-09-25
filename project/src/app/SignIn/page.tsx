import { Header } from "@/share/components/Header";
import { Grid, Typography } from "@mui/material";
import { SignInForm } from "./components/SignInForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkUserAuth } from "@/share/util/authUtil";

const SignIn = async () => {
  const cookieStore = cookies();
  const sendUrl = "/authenticated";
  const authHeaders = {
    "access-token": cookieStore.get("_access-token")?.value ?? "",
    client: cookieStore.get("_client")?.value ?? "",
    uid: cookieStore.get("_uid")?.value ?? "",
  };

  const auth = await checkUserAuth(authHeaders, sendUrl);
  console.log("SignIn auth", auth);

  if (auth.isLogin) {
    redirect("/User");
  }

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
