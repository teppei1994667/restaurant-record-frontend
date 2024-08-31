"use client";

import { FormEmailTextField } from "@/share/form/FormEmailTextField";
import { FormPasswordTextField } from "@/share/form/FormPasswordTextField";
import { FormTextField } from "@/share/form/FormTextField";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export type testDataType = {
  name: string;
  email: string;
  password: string;
};

type ReactHookFormProps = {
  testData: testDataType[];
};

export const ReactHookForm = (props: ReactHookFormProps) => {
  const { testData } = props;
  const [data, setData] = useState<testDataType[] | undefined>();
  const form = useForm({
    defaultValues: { formTextField: "", formEmailTextField: "", formPasswordTextField: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleSendOnClick = () => {
    console.log("送信", form.getValues());
    form.reset();
    setData(testData);
  };

  const handleSetOnClick = () => {
    form.setValue("formTextField", "デフォルト値をセット");
    form.setValue("formEmailTextField", "default@gmail.com");
    form.setValue("formPasswordTextField", "Password39108667");
  };

  const handleClearOnClick = () => {
    form.reset();
  };

  const FormTextFieldRules = {
    required: { value: true, message: "必須入力です" },
    maxLength: { value: 10, message: "最大10文字の入力が必要です" },
    minLength: { value: 3, message: "最低３文字の入力が必要です" },
  };

  console.log("data", data);

  return (
    <>
      <FormProvider {...form}>
        <Grid container className="justify-center mt-10">
          <Grid item>
            <Typography className="text-gray-500 font-mono" variant="h4">
              フォームコンポーネントのテストページ
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="justify-center mt-10">
          <Grid item sx={{ width: "350px" }}>
            <FormTextField
              name="formTextField"
              label="FormTextField"
              rules={FormTextFieldRules}
              helperText={form.formState.errors.formTextField?.message}
            />
          </Grid>
        </Grid>
        <Grid container className="justify-center mt-10">
          <Grid item sx={{ width: "350px" }}>
            <FormEmailTextField
              name="formEmailTextField"
              label="FormEmailTextField"
              helperText={form.formState.errors.formEmailTextField?.message}
            />
          </Grid>
        </Grid>
        <Grid container className="justify-center mt-10">
          <Grid item sx={{ width: "350px" }}>
            <FormPasswordTextField
              name="formPasswordTextField"
              label="FormPasswordTextField"
              helperText={form.formState.errors.formPasswordTextField?.message}
            />
          </Grid>
        </Grid>
        <Grid container className="justify-center mt-10">
          <Grid item sx={{ width: "150px" }}>
            <Button
              className="text-gray-500 border-gray-500 font-mono"
              variant="text"
              onClick={form.handleSubmit(handleSendOnClick)}
              sx={{
                height: "60px",
                width: "130px",
              }}
            >
              送信
            </Button>
          </Grid>
          <Grid item sx={{ width: "150px" }}>
            <Button
              className="text-gray-500 border-gray-500 font-mono"
              variant="text"
              onClick={handleSetOnClick}
              sx={{
                height: "60px",
                width: "130px",
              }}
            >
              セット
            </Button>
          </Grid>
          <Grid item sx={{ width: "150px" }}>
            <Button
              className="text-gray-500 border-gray-500 font-mono"
              variant="text"
              onClick={handleClearOnClick}
              sx={{
                height: "60px",
                width: "130px",
              }}
            >
              クリア
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};
