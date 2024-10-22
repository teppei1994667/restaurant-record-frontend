import { AxiosResponse, isAxiosError } from "axios";
import { convertAuthUserAxioDocker, convertAuthUserAxios } from "./convertAxiosUtil";
import {
  Authenticated,
  AuthUserShow,
  CheckUserAuthHeaders,
  SignInParams,
  SignUpParams,
} from "./type/authUtilType";
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
export const checkAuthenticated = async (
  headers: CheckUserAuthHeaders,
): Promise<AxiosResponse<Authenticated> | null> => {
  try {
    const response: AxiosResponse<Authenticated> = await convertAuthUserAxioDocker.get(
      "/authenticated",
      {
        headers: {
          "access-token": headers["access-token"],
          client: headers.client,
          uid: headers.uid,
        },
      },
    );
    return response;
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      return e.response;
    }
    return null;
  }
};

// ユーザー情報取得
export const getAuthUser = async (
  headers: CheckUserAuthHeaders,
): Promise<AxiosResponse<AuthUserShow> | null> => {
  try {
    const response: AxiosResponse<AuthUserShow> = await convertAuthUserAxioDocker.get("/show", {
      headers: {
        "access-token": headers["access-token"],
        client: headers.client,
        uid: headers.uid,
      },
    });
    return response;
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      return e.response;
    }
    return null;
  }
};
