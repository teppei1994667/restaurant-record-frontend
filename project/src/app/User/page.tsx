import { HeaderContainer } from "@/share/components/HeaderContainer";
import { AuthUserShow } from "@/share/util/type/authUtilType";
import { Grid, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/share/util/authUtil";
import { PageTitle } from "../../share/components/PageTitle";
import { UserInfo } from "./components/UserInfo";
import { StoreList } from "./components/StoreList";

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
      <HeaderContainer />
      <PageTitle name={res?.data.user.name} />
      <StoreList />
      <UserInfo />
    </>
  );
};

export default User;
