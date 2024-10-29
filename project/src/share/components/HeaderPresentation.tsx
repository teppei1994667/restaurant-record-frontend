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

type HeaderPresentationProps = {
  isLoggedIn: boolean;
  isDrawerOpend: boolean;
  handleDrawerOpenClose: () => void;
  handleSignOutOnClick: () => void;
};

export const HeaderPresentation = (props: HeaderPresentationProps) => {
  const { isLoggedIn, isDrawerOpend, handleDrawerOpenClose, handleSignOutOnClick } = props;

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
            {isLoggedIn ? (
              <Grid item>
                <Button className="text-gray-500 font-mono" onClick={handleSignOutOnClick}>
                  ログアウト
                </Button>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
