"use client";

import { signIn } from "@/share/util/authUtil";
import { FormProvider, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SignInFormPresentation } from "./SignInFormPresentation";
import { useCallback } from "react";

export type SignInFormType = {
  email: string;
  password: string;
};

export const SignInFormContainer = () => {
  const router = useRouter();
  const signInForm = useForm<SignInFormType>({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  /* 
    「サインイン」ボタン押下時
  */
  const handleSignInOnClick = useCallback(async (_event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signIn(signInForm.getValues());
      if (res.status === 200) {
        Cookies.set("_access-token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        // ユーザーページへリダイレクト
        router.push("/User");
      }
    } catch (e) {
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
  }, []);

  return (
    <>
      <FormProvider {...signInForm}>
        <SignInFormPresentation handleSignInOnClick={handleSignInOnClick} />
      </FormProvider>
    </>
  );
};
