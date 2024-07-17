"use client";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useState } from "react";

export const Header = () => {
  const [isDrawerOpend, setIsDrawerOpend] = useState(false);

  // Drawerの開閉イベント
  const handleDrawerOpenClose = useCallback(() => {
    if (isDrawerOpend) {
      setIsDrawerOpend(false);
    } else {
      setIsDrawerOpend(true);
    }
  }, [isDrawerOpend]);

  const drawerList = (
    <Box sx={{ width: "350px", paddingTop: "25px" }}>
      <ListItemButton
        className="text-center justify-center"
        onClick={handleDrawerOpenClose}
      >
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
                className="no-underline text-gray-500"
                href="/"
                variant="h6"
                sx={{ textDecoration: "none" }}
              >
                Restaurant Record
              </Link>
            </Grid>
            <Grid item sx={{}}>
              <Button className="text-gray-500">ログアウト</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
