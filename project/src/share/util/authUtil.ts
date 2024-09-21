import { convertAuthUserAxioDocker, convertAuthUserAxios } from "./convertAxiosUtil";
import { checkUserAuthHeaders, SignInParams, SignUpParams } from "./type/authUtilType";

// サインアップ
export const signUp = (params: SignUpParams) => {
  return convertAuthUserAxios.post("/", params);
};

// サインイン
export const signIn = (params: SignInParams) => {
  return convertAuthUserAxios.post("sign_in", params);
};

// ユーザー認証確認
export const checkUserAuth = async (headers: checkUserAuthHeaders) => {
  try {
    const response = await convertAuthUserAxioDocker.get("/show", {
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
