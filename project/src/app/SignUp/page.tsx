import { Header } from "@/share/components/Header";
import { Grid, Typography } from "@mui/material";
import { SignUpForm } from "./components/SignUpForm";
import { redirect } from "next/navigation";
import { checkUserAuth } from "@/share/util/authUtil";
import { cookies } from "next/headers";

const SignUp = async () => {
  const cookieStore = cookies();
  const sendUrl = "/authenticated";
  const authHeaders = {
    "access-token": cookieStore.get("_access-token")?.value ?? "",
    client: cookieStore.get("_client")?.value ?? "",
    uid: cookieStore.get("_uid")?.value ?? "",
  };

  const auth = await checkUserAuth(authHeaders, sendUrl);
  console.log("SignUp auth", auth);

  if (auth.isLogin) {
    redirect("/User");
  }

  return (
    <>
      <Header />
      <Grid container className="justify-center mt-10">
        <Grid item>
          <Typography className="text-gray-500 font-mono" variant="h4">
            新規登録
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-10">
        <Grid item>
          <SignUpForm />
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
