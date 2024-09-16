import { AxiosError } from "axios";
import { convertAuthUserAxios } from "./convertAxiosUtil";
import { SignInParams, SignUpParams } from "./type/authUtilType";

// サインアップ
export const signUp = (params: SignUpParams) => {
  return convertAuthUserAxios.post("/", params);
};

// サインイン
export const signIn = (params: SignInParams) => {
  return convertAuthUserAxios.post("sign_in", params);
};
