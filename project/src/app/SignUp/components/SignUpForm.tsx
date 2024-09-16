"use client";

import { FormEmailTextField } from "@/share/form/FormEmailTextField";
import { FormPasswordTextField } from "@/share/form/FormPasswordTextField";
import { FormTextField } from "@/share/form/FormTextField";
import Cookies from "js-cookie";
import { signUp } from "@/share/util/authUtil";
import { Paper, Grid, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import router from "next/router";
import { isAxiosError } from "axios";

export const SignUpForm = () => {
  const signUpForm = useForm({
    defaultValues: { name: "", email: "", password: "", passwordConfirmation: "" },
    mode: "onBlur",
  });

  const nameRules = {
    required: { value: true, message: "必須入力です" },
  };

  /* 
    「登録」ボタン押下時
  */
  const handleSignUpOnClick = async () => {
    try {
      const res = await signUp(signUpForm.getValues());
      if (res.status === 200) {
        // アカウント作成と同時にログインさせてしまう
        Cookies.set("_access-token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        signUpForm.reset();
        // router.push("/User");
      }
    } catch (e) {
      if (isAxiosError(e)) {
        // サーバーからのレスポンスがある場合
        if (e.response) {
          if (e.response.status === 422) {
            alert(e.response.data.errors.fullMessages);
          } else {
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

  console.log("cookies", Cookies.get());

  return (
    <>
      <FormProvider {...signUpForm}>
        <Paper elevation={0} sx={{ height: "100vh" }}>
          <Grid container>
            <Grid item className="w-96">
              <FormTextField
                name="name"
                label="ユーザー名"
                rules={nameRules}
                helperText={signUpForm.formState.errors.name?.message}
                InputLabelProps={{ className: "font-mono" }}
              />
            </Grid>
          </Grid>
          <Grid container className="mt-10">
            <Grid item className="w-96">
              <FormEmailTextField
                name="email"
                label="メールアドレス"
                helperText={signUpForm.formState.errors.email?.message}
                InputLabelProps={{ className: "font-mono" }}
              />
            </Grid>
          </Grid>
          <Grid container className="mt-10">
            <Grid item className="w-96">
              <FormPasswordTextField
                name="password"
                label="パスワード"
                helperText={signUpForm.formState.errors.password?.message}
                InputLabelProps={{ className: "font-mono" }}
              />
            </Grid>
          </Grid>
          <Grid container className="mt-10">
            <Grid item className="w-96">
              <FormPasswordTextField
                name="passwordConfirmation"
                label="パスワード確認"
                helperText={signUpForm.formState.errors.passwordConfirmation?.message}
                InputLabelProps={{ className: "font-mono" }}
              />
            </Grid>
          </Grid>
          <Grid container className="justify-center mt-10">
            <Grid item>
              <Button
                className="text-gray-500 border-gray-500 font-mono"
                variant="text"
                onClick={signUpForm.handleSubmit(handleSignUpOnClick)}
                sx={{
                  height: "60px",
                  width: "130px",
                }}
              >
                登録
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </FormProvider>
    </>
  );
};
