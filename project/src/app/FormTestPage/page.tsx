import { Header } from "@/share/components/Header";
import { ReactHookForm } from "./components/ReactHookForm";

const FormTestPage = async () => {
  // サーバーからデータ取得
  const res = await fetch("http://app:3000/tests", {
    // オプション: キャッシュを無効にする
    cache: "no-store",
  });
  console.log("res", res);
  const testData = await res.json();
  console.log("testData", testData.tests);

  return (
    <>
      <Header />
      <ReactHookForm testData={testData} />
    </>
  );
};

export default FormTestPage;
