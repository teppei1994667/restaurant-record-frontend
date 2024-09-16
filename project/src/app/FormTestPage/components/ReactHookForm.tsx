"use client";

import { FormEmailTextField } from "@/share/components/form/FormEmailTextField";
import { FormPasswordTextField } from "@/share/components/form/FormPasswordTextField";
import { FormTextField } from "@/share/components/form/FormTextField";
import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { testDataType } from "../page";

type ReactHookFormProps = {
  testData: testDataType[];
};

export const ReactHookForm = (props: ReactHookFormProps) => {
  const { testData } = props;
  const [viewData, setViewData] = useState<testDataType[]>([]);
  const form = useForm({
    defaultValues: { formTextField: "", formEmailTextField: "", formPasswordTextField: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleSendOnClick = async () => {
    const test = {
      name: form.getValues("formTextField"),
      email: form.getValues("formEmailTextField"),
      password: form.getValues("formPasswordTextField"),
    };

    const res = await fetch("http://localhost:3000/tests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(test),
    });
    form.reset();
    const newTestData: testDataType[] = await res.json();
    setViewData(newTestData);
  };

  const handleSetOnClick = () => {
    form.setValue("formTextField", "デフォルト値をセット");
    form.setValue("formEmailTextField", "default@gmail.com");
    form.setValue("formPasswordTextField", "Password39108667");
  };

  const handleClearOnClick = () => {
    form.reset();
  };

  useEffect(() => {
    if (testData != null) {
      setViewData(testData);
    }
  }, []);

  const FormTextFieldRules = {
    required: { value: true, message: "必須入力です" },
    maxLength: { value: 10, message: "最大10文字の入力が必要です" },
    minLength: { value: 3, message: "最低３文字の入力が必要です" },
  };

  // console.log("viewData", viewData);

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
        {viewData.map((data: testDataType) => (
          <Grid container className="justify-center mt-10">
            <Grid item>
              <Typography>{data.name}</Typography>
            </Grid>
            <Grid item>
              <Typography className="ml-5">{data.email}</Typography>
            </Grid>
            <Grid item>
              <Typography className="ml-5">{data.password}</Typography>
            </Grid>
          </Grid>
        ))}
      </FormProvider>
    </>
  );
};
