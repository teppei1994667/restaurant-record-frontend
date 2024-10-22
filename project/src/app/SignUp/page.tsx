import { HeaderContainer } from "@/share/components/HeaderContainer";
import { Grid, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { checkAuthenticated } from "@/share/util/authUtil";
import { cookies } from "next/headers";
import { AxiosResponse } from "axios";
import { Authenticated } from "@/share/util/type/authUtilType";
import { SignUpFormContainer } from "./components/SignUpFormContainer";

const SignUp = async () => {
  const cookieStore = cookies();
  const authHeaders = {
    "access-token": cookieStore.get("_access-token")?.value ?? "",
    client: cookieStore.get("_client")?.value ?? "",
    uid: cookieStore.get("_uid")?.value ?? "",
  };

  const res: AxiosResponse<Authenticated> | null = await checkAuthenticated(authHeaders);

  if (res != null) {
    if (res.data.isLogin) {
      redirect("/User");
    }
  }

  return (
    <>
      <HeaderContainer />
      <Grid container className="justify-center mt-10">
        <Grid item>
          <Typography className="text-gray-500 font-mono" variant="h4">
            新規登録
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-10">
        <Grid item>
          <SignUpFormContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
