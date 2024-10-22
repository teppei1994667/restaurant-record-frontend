"use client";

import { FormEmailTextField } from "@/share/components/form/FormEmailTextField";
import { FormPasswordTextField } from "@/share/components/form/FormPasswordTextField";
import { FormTextField } from "@/share/components/form/FormTextField";
import { Paper, Grid, Button } from "@mui/material";
import { memo } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { SignUpFormType } from "./SignUpFormContainer";

type SignUpFormPresentationProps = {
  handleSignUpOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SignUpFormPresentation = memo((props: SignUpFormPresentationProps) => {
  const { handleSignUpOnClick } = props;

  const signUpForm = useFormContext<SignUpFormType>();

  const nameRules = {
    required: { value: true, message: "必須入力です" },
  };

  return (
    <>
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
              onClick={signUpForm.handleSubmit(() => handleSignUpOnClick)}
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
    </>
  );
});
