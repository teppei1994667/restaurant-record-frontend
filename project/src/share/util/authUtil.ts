import { convertAuthUserAxioDocker, convertAuthUserAxios } from "./convertAxiosUtil";
import { checkUserAuthHeaders, SignInParams, SignUpParams } from "./type/authUtilType";
import Cookies from "js-cookie";

// サインアップ
export const signUp = (params: SignUpParams) => {
  return convertAuthUserAxios.post("/", params);
};

// サインイン
export const signIn = (params: SignInParams) => {
  return convertAuthUserAxios.post("sign_in", params);
};

// サインアウト
export const signOut = () => {
  return convertAuthUserAxios.delete("sign_out", {
    headers: {
      "access-token": Cookies.get("_access-token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// ユーザー認証確認
export const checkUserAuth = async (headers: checkUserAuthHeaders, sendUrl: string) => {
  try {
    const response = await convertAuthUserAxioDocker.get(sendUrl, {
      headers: {
        "access-token": headers["access-token"],
        client: headers.client,
        uid: headers.uid,
      },
    });

    return response.data;
  } catch (e) {
    return null;
  }
};
