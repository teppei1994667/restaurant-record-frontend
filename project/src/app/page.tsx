import { Header } from "@/share/components/Header";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mainImage from "../public/restaurant-record-main-img.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Grid container className="justify-center pt-10">
        <Grid item>
          <Typography className="text-gray-500 font-mono" variant="h3">
            Restaurant Record
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="mt-20" justifyContent="center">
        <Grid item>
          <Image
            src={mainImage}
            alt={"メインイメージ"}
            className="opacity-70"
            width={318}
            height={321}
          />
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-16">
        <Grid item>
          <Link href="/">
            <Button className="text-lg text-gray-500 h-20 w-48" variant="text">
              ログイン
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/">
            <Button
              className="text-lg text-gray-500 ml-20 h-20 w-48"
              variant="text"
            >
              新規登録
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
