"use client";

import { useCallback, useEffect, useState } from "react";
import { signOut } from "../util/authUtil";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { HeaderPresentation } from "./HeaderPresentation";

export const HeaderContainer = () => {
  console.log("Headers cookies", Cookies.get());
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isDrawerOpend, setIsDrawerOpend] = useState<boolean>(false);

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

  useEffect(() => {
    if (Cookies.get("_access-token") && Cookies.get("_client") && Cookies.get("_uid")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <HeaderPresentation
        isLoggedIn={isLoggedIn}
        isDrawerOpend={isDrawerOpend}
        handleDrawerOpenClose={handleDrawerOpenClose}
        handleSignOutOnClick={handleSignOutOnClick}
      />
    </>
  );
};
