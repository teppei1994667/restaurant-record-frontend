"use client";

import { FormEmailTextField } from "@/share/form/FormEmailTextField";
import { FormPasswordTextField } from "@/share/form/FormPasswordTextField";
import { FormTextField } from "@/share/form/FormTextField";
import { Paper, Grid, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

export const SignUpForm = () => {
  const signUpForm = useForm({
    defaultValues: { name: "", email: "", password: "", passwordConfirmation: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const nameRules = {
    required: { value: true, message: "必須入力です" },
  };

  // 登録ボタンテスト用関数
  const handleSignUpOnClickTest = () => {
    console.log("登録", signUpForm.getValues());
    signUpForm.reset();
  };
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
                onClick={signUpForm.handleSubmit(handleSignUpOnClickTest)}
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
