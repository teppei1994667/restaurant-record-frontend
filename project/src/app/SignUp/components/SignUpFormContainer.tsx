"use client";

import Cookies from "js-cookie";
import { signUp } from "@/share/util/authUtil";
import { FormProvider, useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SignUpFormPresentation } from "./SignUpFormPresentation";

export type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const SignUpFormContainer = () => {
  const router = useRouter();
  const signUpForm = useForm<SignUpFormType>({
    defaultValues: { name: "", email: "", password: "", passwordConfirmation: "" },
    mode: "onSubmit",
  });

  /* 
    「登録」ボタン押下時
  */
  const handleSignUpOnClick = useCallback(async (_event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signUp(signUpForm.getValues());
      if (res.status === 200) {
        // アカウント作成と同時にログインさせてしまう
        Cookies.set("_access-token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        // userページへリダイレクト
        router.push("/User");
      }
    } catch (e) {
      if (isAxiosError(e)) {
        // サーバーからのレスポンスがある場合
        if (e.response) {
          if (e.response.status === 422) {
            alert(e.response.data.errors.fullMessages);
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
  }, []);

  return (
    <>
      <FormProvider {...signUpForm}>
        <SignUpFormPresentation handleSignUpOnClick={handleSignUpOnClick} />
      </FormProvider>
    </>
  );
};
