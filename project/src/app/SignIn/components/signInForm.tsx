"use client";

import { signIn } from "@/share/util/authUtil";
import { Button, Grid, Paper } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { FormEmailTextField } from "@/share/components/form/FormEmailTextField";
import { FormPasswordTextField } from "@/share/components/form/FormPasswordTextField";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";

export type SignInFormType = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const router = useRouter();
  const signInForm = useForm<SignInFormType>({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  /* 
    「サインイン」ボタン押下時
  */
  const handleSignInOnClick = async () => {
    try {
      const res = await signIn(signInForm.getValues());
      if (res.status === 200) {
        Cookies.set("_access-token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        console.log("ログイン成功", res);
        // ユーザーページへリダイレクト
        router.push("/User");
      }
    } catch (e) {
      console.log("エラー", e);
      if (isAxiosError(e)) {
        // サーバーからのレスポンスがある場合
        if (e.response) {
          if (e.response?.status === 401) {
            alert("メールアドレスまたはパスワードが間違っています。");
          } else {
            // 500 Internal Server Errorを想定
            alert(
              `status: ${e.response.status}\nmessage: エラーが発生しました。しばらくしてからもう一度お試しください。`,
            );
          }
          // リクエストが送信されたがレスポンスがない場合
        } else if (e.request) {
          alert("サーバーからのレスポンスが存在しません。");
          // それ以外のエラー
        } else {
          alert(e.message);
        }
      } else {
        alert("不明なエラー");
      }
    }
  };

  return (
    <>
      <FormProvider {...signInForm}>
        <Paper elevation={0} sx={{ height: "100vh" }}>
          <Grid container className="mt-10">
            <Grid item className="w-96">
              <FormEmailTextField
                name="email"
                label="メールアドレス"
                helperText={signInForm.formState.errors.email?.message}
                InputLabelProps={{ className: "font-mono" }}
              />
            </Grid>
          </Grid>
          <Grid container className="mt-10">
            <Grid item className="w-96">
              <FormPasswordTextField
                name="password"
                label="パスワード"
                helperText={signInForm.formState.errors.password?.message}
                InputLabelProps={{ className: "font-mono" }}
              />
            </Grid>
          </Grid>
          <Grid container className="justify-center mt-16">
            <Grid item>
              <Button
                className="text-gray-500 border-gray-500 font-mono"
                variant="text"
                disabled={false}
                onClick={handleSignInOnClick}
                sx={{
                  height: "60px",
                  width: "130px",
                }}
              >
                サインイン
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </FormProvider>
    </>
  );
};
