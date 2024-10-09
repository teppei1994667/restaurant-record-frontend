"use client";

import { Button, Grid, Paper } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormEmailTextField } from "@/share/components/form/FormEmailTextField";
import { FormPasswordTextField } from "@/share/components/form/FormPasswordTextField";
import { memo } from "react";
import { SignInFormType } from "./SignInFormContainer";

type SignInFormPresentationProps = {
  handleSignInOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SignInFormPresentation = memo((props: SignInFormPresentationProps) => {
  const { handleSignInOnClick } = props;
  const signInForm = useFormContext<SignInFormType>();

  return (
    <>
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
    </>
  );
});
