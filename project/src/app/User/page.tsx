import { Header } from "@/share/components/Header";
import { AuthUserShow } from "@/share/util/type/authUtilType";
import { Grid, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/share/util/authUtil";

const User = async () => {
  const cookieStore = cookies();
  const authHeaders = {
    "access-token": cookieStore.get("_access-token")?.value ?? "",
    client: cookieStore.get("_client")?.value ?? "",
    uid: cookieStore.get("_uid")?.value ?? "",
  };

  const res: AxiosResponse<AuthUserShow> | null = await getAuthUser(authHeaders);

  if (res != null) {
    if (res?.status === 401) {
      redirect("/SignIn");
    }
  }

  return (
    <>
      <Header />
      <Grid container className="justify-center mt-10">
        <Grid item>
          <Typography className="text-gray-500 font-mono" variant="h4">
            テスト店
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-10">
        <Grid item>
          <Typography className="text-gray-500 font-mono" variant="h6">
            店舗一覧
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default User;
