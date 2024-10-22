"use client";

import { useCallback, useState } from "react";
import { signOut } from "../util/authUtil";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { HeaderPresentation } from "./HeaderPresentation";

export const HeaderContainer = () => {
  const [isDrawerOpend, setIsDrawerOpend] = useState(false);

  const router = useRouter();

  // Drawerの開閉イベント
  const handleDrawerOpenClose = useCallback(() => {
    if (isDrawerOpend) {
      setIsDrawerOpend(false);
    } else {
      setIsDrawerOpend(true);
    }
  }, [isDrawerOpend]);

  /*
    「ログアウト」ボタン押下時
  */
  const handleSignOutOnClick = async () => {
    try {
      const res = await signOut();
      if (res.status === 200) {
        // ブラウザのcookiesに保存しているトークンを削除
        Cookies.remove("_access-token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        // サインインページへリダイレクト
        router.push("/");
      }
    } catch (e) {
      if (isAxiosError(e)) {
        if (e.response?.status === 404) {
          alert(e.response.data.errors);
        }
      } else {
        alert("不明なエラーです");
      }
    }
  };

  return (
    <>
      <HeaderPresentation
        isDrawerOpend={isDrawerOpend}
        handleDrawerOpenClose={handleDrawerOpenClose}
        handleSignOutOnClick={handleSignOutOnClick}
      />
    </>
  );
};
