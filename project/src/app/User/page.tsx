import { Header } from "@/share/components/Header";
import { checkUserAuth } from "@/share/util/authUtil";
import { Grid, Typography } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const User = async () => {
  const cookieStore = cookies();
  const authHeaders = {
    "access-token": cookieStore.get("_access-token")?.value ?? "",
    client: cookieStore.get("_client")?.value ?? "",
    uid: cookieStore.get("_uid")?.value ?? "",
  };

  const auth = await checkUserAuth(authHeaders);
  console.log("auth", auth);

  if (auth == null) {
    redirect("/SignIn");
  }

  console.log("cookies", cookieStore.getAll());

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
      {/* {userContext.StoreModels.map((storeModel, index) => (
        <Grid container className="justify-center mt-5" key={index}>
          <Grid item>
            <Link href={{ pathname: "Store", query: { id: storeModel.id } }}>
              <Button className="text-gray-500" variant="text" sx={{ height: "70px", width: "200px" }}>
                {storeModel.name}
              </Button>
            </Link>
          </Grid>
        </Grid>
      ))} */}
    </>
  );
};

export default User;
