"use client";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Link,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useState } from "react";
import { signOut } from "../util/authUtil";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";

export const Header = () => {
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
      console.log("サインアウト res", res);
      if (res.status === 200) {
        // ブラウザのcookiesに保存しているトークンを削除
        Cookies.remove("_access-token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        // サインインページへリダイレクト
        router.push("/");
      }
    } catch (e) {
      console.log("エラー", e);
      if (isAxiosError(e)) {
        if (e.response?.status === 404) {
          alert(e.response.data.errors);
        }
      } else {
        alert("不明なエラーです");
      }
    }
  };

  const drawerList = (
    <Box sx={{ width: "350px", paddingTop: "25px" }}>
      <ListItemButton className="text-center justify-center" onClick={handleDrawerOpenClose}>
        <Typography variant="h6" className="text-gray-500">
          テスト
        </Typography>
      </ListItemButton>
    </Box>
  );
  return (
    <>
      <AppBar elevation={1} position="static" color="inherit">
        <Toolbar>
          <Grid container sx={{ height: "64px", placeItems: "center" }}>
            <Grid item>
              <IconButton edge="start">
                <MenuIcon onClick={handleDrawerOpenClose} />
                <Drawer
                  className="text-center"
                  anchor="left"
                  open={isDrawerOpend}
                  onClose={handleDrawerOpenClose}
                >
                  {drawerList}
                </Drawer>
              </IconButton>
            </Grid>
            <Grid item sx={{ flexGrow: "1", marginLeft: "30px" }}>
              <Link
                className="no-underline text-gray-500 font-mono"
                href="/"
                variant="h6"
                sx={{ textDecoration: "none" }}
              >
                Restaurant Record
              </Link>
            </Grid>
            <Grid item sx={{}}>
              <Button className="text-gray-500 font-mono" onClick={handleSignOutOnClick}>
                ログアウト
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
