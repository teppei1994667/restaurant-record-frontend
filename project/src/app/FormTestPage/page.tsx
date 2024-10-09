import { HeaderContainer } from "@/share/components/HeaderContainer";
import { ReactHookForm } from "./components/ReactHookForm";

export type testDataType = {
  name: string;
  email: string;
  password: string;
};

const FormTestPage = async () => {
  // サーバーからデータ取得
  const res = await fetch("http://app:3000/tests", {
    // オプション: キャッシュを無効にする
    cache: "no-store",
  });
  const testData: testDataType[] = await res.json();
  return (
    <>
      <HeaderContainer />
      <ReactHookForm testData={testData} />
    </>
  );
};

export default FormTestPage;
